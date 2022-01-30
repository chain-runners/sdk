import { HiddenTraits, TraitType } from '@chain-runners/types'
import { ALL_TRAIT_ORDERING } from './traits'

const IMAGE_API_CONFIG: { baseURI: string } = {
  baseURI: 'https://img.chainrunners.xyz',
}

export function setImageServiceBaseURI(baseURI: string) {
  IMAGE_API_CONFIG.baseURI = baseURI
}

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
  fileType: ImageFileType = ImageFileType.png,
): string {
  const layerFlags = hiddenTraits ? encodeLayerFlags(hiddenTraits) : undefined
  const params = layerFlags ? `?layerFlags=${layerFlags}` : ''

  return `${IMAGE_API_CONFIG.baseURI}/api/v1/tokens/${fileType}/${tokenId}${params}`
}

export function getImageUrlForTrait(
  traitId: number,
  fileType: ImageFileType = ImageFileType.png,
): string {
  return `${IMAGE_API_CONFIG.baseURI}/api/v1/traits/${fileType}/${traitId}.${fileType}`
}
