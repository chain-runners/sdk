import { APIToken, APITrait, TraitType } from '@chain-runners/api-client'

export type { Maybe, Nullable } from './utils'
export { TraitType } from '@chain-runners/api-client'

export type RunnerTrait = Omit<APITrait, '__typename' | 'svgContent'>
export type RunnerToken = Omit<APIToken, '__typename' | 'rawMetadata'>

export type HiddenTraits = Partial<Record<TraitType, boolean>>
