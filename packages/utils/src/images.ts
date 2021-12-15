import { HiddenTraits, TraitType } from '@chain-runners/types'
import { ALL_TRAIT_ORDERING } from './traits'

export function encodeLayerFlags(hiddenTraits: HiddenTraits): string | undefined {
  const flags: Array<number> = Object.values(TraitType)
    .filter((traitType: TraitType) => hiddenTraits[traitType])
    .map((traitType) => ALL_TRAIT_ORDERING.indexOf(traitType))

  if (!flags.length) return

  return Buffer.from(JSON.stringify(flags)).toString('base64')
}

export enum ImageFileType {
  svg = 'svg',
  png = 'png',
}

export function getImageUrlForToken(
  tokenId: number,
  hiddenTraits?: HiddenTraits,
  fileType?: ImageFileType,
): string {
  const layerFlags = hiddenTraits ? encodeLayerFlags(hiddenTraits) : undefined
  const params = layerFlags ? `?layerFlags=${layerFlags}` : ''

  return `https://img.chainrunners.xyz/api/v1/tokens/${
    fileType ?? ImageFileType.png
  }/${tokenId}${params}`
}

export function getImageUrlForTrait(traitId: number): string {
  return `https://img.chainrunners.xyz/api/v1/traits/svg/${traitId}.svg`
}
