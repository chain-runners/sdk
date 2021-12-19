import { Flex } from '@chakra-ui/react'
import {
  convertFromRaw,
  convertToRaw,
  Editor,
  EditorState,
  RawDraftContentState,
  RawDraftInlineStyleRange,
  RichUtils,
} from 'draft-js'
import React, { MouseEvent, useCallback, useState } from 'react'
import { BiBold, BiItalic, BiStrikethrough, BiUnderline } from 'react-icons/all'
import { usePrimaryColor } from '../hooks'
import { HackerButton } from './HackerButton'
import { HackerIconButton } from './HackerIconButton'

export enum RichTextStyle {
  Bold = 'BOLD',
  Italic = 'ITALIC',
  Underline = 'UNDERLINE',
  Monospace = 'MONOSPACE',
  Strikethrough = 'STRIKETHROUGH',
}

export type InlineStyleRange = {
  length: number
  offset: number
  style: RichTextStyle
}

export type RichTextBlock = {
  inlineStyleRanges: Array<InlineStyleRange>
  text: string
}

function initializeEditorState(blocks?: Array<RichTextBlock> | null): EditorState {
  if (!blocks) return EditorState.createEmpty()

  return EditorState.createWithContent(
    convertFromRaw({
      entityMap: {},
      blocks: blocks.map((block, index) => {
        return {
          text: block.text,
          inlineStyleRanges: block.inlineStyleRanges as Array<RawDraftInlineStyleRange>,
          type: 'unstyled',
          depth: 1,
          key: `${index}`,
          entityRanges: [],
        }
      }),
    }),
  )
}

function extractTextBlocksFromEditorState(
  editorState: EditorState,
): Array<RichTextBlock> {
  const rawContent: RawDraftContentState = convertToRaw(editorState.getCurrentContent())

  return rawContent.blocks.map((block) => {
    return {
      text: block.text,
      inlineStyleRanges: block.inlineStyleRanges.map(
        (inlineStyleRange): InlineStyleRange => {
          return {
            style: inlineStyleRange.style as unknown as RichTextStyle,
            offset: inlineStyleRange.offset,
            length: inlineStyleRange.length,
          }
        },
      ),
    }
  })
}

export type TextEditorProps = {
  placeholder?: string
  isSaving?: boolean
  onSave?: (bioData: Array<RichTextBlock> | null, didChange: boolean) => void
  onCancel?: () => void
  textBlocks?: Array<RichTextBlock> | null
  isReadOnly?: boolean
}

export const TextEditor: React.FC<TextEditorProps> = ({
  isSaving,
  onSave,
  onCancel,
  placeholder,
  textBlocks,
  isReadOnly,
}) => {
  const { primaryColor } = usePrimaryColor()
  const [editorState, setEditorState] = useState(initializeEditorState(textBlocks))

  const handleSave = useCallback(() => {
    const textBlocks = extractTextBlocksFromEditorState(editorState)
    onSave?.(textBlocks, true)
  }, [editorState, onSave])

  const handleCancel = useCallback(() => {
    setEditorState(initializeEditorState(textBlocks))
    onCancel?.()
  }, [onCancel, textBlocks])

  const handleKeyCommand = useCallback((command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command)
    if (newState) {
      setEditorState(newState)
      return 'handled'
    }
    return 'not-handled'
  }, [])

  const handleToggleStyle = useCallback((style: RichTextStyle) => {
    setEditorState((editorState) => RichUtils.toggleInlineStyle(editorState, style))
  }, [])

  const createStyleToggleHandler = useCallback(
    (style: RichTextStyle) => {
      return (event: MouseEvent) => {
        event.preventDefault()
        handleToggleStyle(style)
      }
    },
    [handleToggleStyle],
  )

  const currentStyle = editorState.getCurrentInlineStyle()

  return (
    <Flex
      minH="300px"
      flex={1}
      direction="column"
      borderColor={primaryColor}
      borderWidth={isReadOnly ? 0 : '1px'}
      sx={{
        '.DraftEditor-root': {
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        },
        '.public-DraftEditorPlaceholder-root': {
          position: 'absolute',
          top: 0,
          left: 0.5,
          display: 'inline-block',
          opacity: 0.5,
        },
        '.DraftEditor-editorContainer': {
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        },
        '.public-DraftEditor-content': {
          flex: 1,
        },
      }}
    >
      <Flex borderColor={primaryColor} borderBottomWidth="1px" hidden={isReadOnly}>
        <HackerIconButton
          borderWidth={0}
          borderRightWidth="1px"
          size="sm"
          onMouseDown={createStyleToggleHandler(RichTextStyle.Bold)}
          filled={currentStyle.has(RichTextStyle.Bold)}
        >
          <BiBold />
        </HackerIconButton>
        <HackerIconButton
          borderWidth={0}
          borderRightWidth="1px"
          size="sm"
          onMouseDown={createStyleToggleHandler(RichTextStyle.Italic)}
          filled={currentStyle.has(RichTextStyle.Italic)}
        >
          <BiItalic />
        </HackerIconButton>
        <HackerIconButton
          borderWidth={0}
          borderRightWidth="1px"
          size="sm"
          onMouseDown={createStyleToggleHandler(RichTextStyle.Underline)}
          filled={currentStyle.has(RichTextStyle.Underline)}
        >
          <BiUnderline />
        </HackerIconButton>
        <HackerIconButton
          borderWidth={0}
          borderRightWidth="1px"
          size="sm"
          onMouseDown={createStyleToggleHandler(RichTextStyle.Strikethrough)}
          filled={currentStyle.has(RichTextStyle.Strikethrough)}
        >
          <BiStrikethrough />
        </HackerIconButton>
        <Flex flex={1} justifyContent="flex-end">
          {onCancel && (
            <HackerButton
              borderWidth={0}
              borderLeftWidth="1px"
              size="sm"
              onClick={handleCancel}
              isLoading={isSaving}
            >
              Cancel
            </HackerButton>
          )}
          {onSave && (
            <HackerButton
              borderWidth={0}
              borderLeftWidth="1px"
              size="sm"
              onClick={handleSave}
              isLoading={isSaving}
            >
              Save
            </HackerButton>
          )}
        </Flex>
      </Flex>
      <Flex flex={1} direction="column" p={1} overflowY="auto">
        <Editor
          placeholder={placeholder}
          editorState={editorState}
          onChange={setEditorState}
          handleKeyCommand={handleKeyCommand}
          readOnly={isReadOnly}
        />
      </Flex>
    </Flex>
  )
}
