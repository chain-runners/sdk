import { APIToken, APITrait, TraitType } from '@chain-runners/api-client'

export type { Maybe, Nullable } from './utils'
export { TraitType } from '@chain-runners/api-client'

export type RunnerTrait = Omit<APITrait, '__typename'>
export type RunnerToken = Omit<APIToken, '__typename'>

export type HiddenTraits = Partial<Record<TraitType, boolean>>
