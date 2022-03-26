import { Maybe, RunnerTrait, TraitType } from '@chain-runners/types'
import { BigNumber } from 'ethers'
import { startCase } from 'lodash-es'

export function parseTraitTypeFromValue(traitVal: string): Maybe<TraitType> {
  return (
    Object.values(TraitType).find((entry: TraitType) => {
      return entry.toLowerCase() === traitVal.trim().toLowerCase().replace(' ', '')
    }) ?? null
  )
}

export function formatTraitType(traitType: TraitType): string {
  return startCase(traitType.replace('Accessory', 'Acc'))
}

export function formatTraitTypeLong(traitType: TraitType): string {
  return startCase(traitType)
}

export const BASE_TRAIT_ORDERING: Array<TraitType> = [
  TraitType.Race,
  TraitType.Mouth,
  TraitType.Nose,
  TraitType.Eyes,
]

export const ACCESSORY_TRAIT_ORDERING: Array<TraitType> = [
  TraitType.Background,
  TraitType.Face,
  TraitType.EarAccessory,
  TraitType.FaceAccessory,
  TraitType.Mask,
  TraitType.HeadBelow,
  TraitType.EyeAccessory,
  TraitType.HeadAbove,
  TraitType.MouthAccessory,
]

export const ALL_TRAIT_ORDERING: Array<TraitType> = [
  TraitType.Background,
  TraitType.Race,
  TraitType.Face,
  TraitType.Mouth,
  TraitType.Nose,
  TraitType.Eyes,
  TraitType.EarAccessory,
  TraitType.FaceAccessory,
  TraitType.Mask,
  TraitType.HeadBelow,
  TraitType.EyeAccessory,
  TraitType.HeadAbove,
  TraitType.MouthAccessory,
]

const WEIGHTS: Array<Array<Array<number>>> = [[], [], []]

WEIGHTS[0][0] = [
  36, 225, 225, 225, 360, 135, 27, 360, 315, 315, 315, 315, 225, 180, 225, 180, 360, 180,
  45, 360, 360, 360, 27, 36, 360, 45, 180, 360, 225, 360, 225, 225, 360, 180, 45, 360, 18,
  225, 225, 225, 225, 180, 225, 361,
]
WEIGHTS[0][1] = [875, 1269, 779, 779, 779, 779, 779, 779, 779, 779, 779, 779, 17, 8, 41]
WEIGHTS[0][2] = [
  303, 303, 303, 303, 151, 30, 0, 0, 151, 151, 151, 151, 30, 303, 151, 30, 303, 303, 303,
  303, 303, 303, 30, 151, 303, 303, 303, 303, 303, 303, 303, 303, 3066,
]
WEIGHTS[0][3] = [645, 0, 1290, 322, 645, 645, 645, 967, 322, 967, 645, 967, 967, 973]
WEIGHTS[0][4] = [0, 0, 0, 1250, 1250, 1250, 1250, 1250, 1250, 1250, 1250]
WEIGHTS[0][5] = [
  121, 121, 121, 121, 121, 121, 243, 0, 0, 0, 0, 121, 121, 243, 121, 121, 243, 121, 121,
  121, 121, 121, 243, 121, 121, 121, 121, 243, 121, 121, 121, 121, 243, 121, 121, 121,
  243, 121, 121, 121, 121, 243, 121, 121, 121, 121, 243, 121, 121, 121, 121, 243, 121,
  121, 121, 121, 243, 121, 121, 121, 121, 243, 121, 121, 243, 0, 0, 0, 121, 121, 243, 121,
  121, 306,
]
WEIGHTS[0][6] = [925, 555, 185, 555, 925, 925, 185, 1296, 1296, 1296, 1857]
WEIGHTS[0][7] = [88, 88, 88, 88, 88, 265, 442, 8853]
WEIGHTS[0][8] = [189, 189, 47, 18, 9, 28, 37, 9483]
WEIGHTS[0][9] = [
  340, 340, 340, 340, 340, 340, 34, 340, 340, 340, 340, 170, 170, 170, 102, 238, 238, 238,
  272, 340, 340, 340, 272, 238, 238, 238, 238, 170, 34, 340, 340, 136, 340, 340, 340, 340,
  344,
]
WEIGHTS[0][10] = [
  159, 212, 106, 53, 26, 159, 53, 265, 53, 212, 159, 265, 53, 265, 265, 212, 53, 159, 239,
  53, 106, 5, 106, 53, 212, 212, 106, 159, 212, 265, 212, 265, 5066,
]
WEIGHTS[0][11] = [
  139, 278, 278, 250, 250, 194, 222, 278, 278, 194, 222, 83, 222, 278, 139, 139, 27, 278,
  278, 278, 278, 27, 278, 139, 278, 278, 278, 278, 278, 278, 278, 278, 278, 278, 278, 27,
  139, 139, 139, 139, 0, 278, 194, 83, 83, 278, 83, 27, 306,
]
WEIGHTS[0][12] = [981, 2945, 654, 16, 981, 327, 654, 163, 3279]

// Skull
WEIGHTS[1][0] = [
  36, 225, 225, 225, 360, 135, 27, 360, 315, 315, 315, 315, 225, 180, 225, 180, 360, 180,
  45, 360, 360, 360, 27, 36, 360, 45, 180, 360, 225, 360, 225, 225, 360, 180, 45, 360, 18,
  225, 225, 225, 225, 180, 225, 361,
]
WEIGHTS[1][1] = [875, 1269, 779, 779, 779, 779, 779, 779, 779, 779, 779, 779, 17, 8, 41]
WEIGHTS[1][2] = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 10000,
]
WEIGHTS[1][3] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
WEIGHTS[1][4] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
WEIGHTS[1][5] = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 384, 7692, 1923, 0, 0, 0, 0, 0, 1,
]
WEIGHTS[1][6] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10000]
WEIGHTS[1][7] = [0, 0, 0, 0, 0, 909, 0, 9091]
WEIGHTS[1][8] = [0, 0, 0, 0, 0, 0, 0, 10000]
WEIGHTS[1][9] = [
  526, 526, 526, 0, 0, 0, 0, 0, 526, 0, 0, 0, 526, 0, 526, 0, 0, 0, 526, 526, 526, 526,
  526, 526, 526, 526, 526, 526, 526, 0, 0, 526, 0, 0, 0, 0, 532,
]
WEIGHTS[1][10] = [
  80, 0, 400, 240, 80, 0, 240, 0, 0, 80, 80, 80, 0, 0, 0, 0, 80, 80, 0, 0, 80, 80, 0, 80,
  80, 80, 80, 80, 0, 0, 0, 0, 8000,
]
WEIGHTS[1][11] = [
  289, 0, 0, 0, 0, 404, 462, 578, 578, 0, 462, 173, 462, 578, 0, 0, 57, 0, 57, 0, 57, 57,
  578, 289, 578, 57, 0, 57, 57, 57, 578, 578, 0, 0, 0, 0, 0, 0, 57, 289, 578, 0, 0, 0,
  231, 57, 0, 0, 1745,
]
WEIGHTS[1][12] = [714, 714, 714, 0, 714, 0, 0, 0, 7144]

// Bot
WEIGHTS[2][0] = [
  36, 225, 225, 225, 360, 135, 27, 360, 315, 315, 315, 315, 225, 180, 225, 180, 360, 180,
  45, 360, 360, 360, 27, 36, 360, 45, 180, 360, 225, 360, 225, 225, 360, 180, 45, 360, 18,
  225, 225, 225, 225, 180, 225, 361,
]
WEIGHTS[2][1] = [875, 1269, 779, 779, 779, 779, 779, 779, 779, 779, 779, 779, 17, 8, 41]
WEIGHTS[2][2] = [
  303, 303, 303, 303, 151, 30, 0, 0, 151, 151, 151, 151, 30, 303, 151, 30, 303, 303, 303,
  303, 303, 303, 30, 151, 303, 303, 303, 303, 303, 303, 303, 303, 3066,
]
WEIGHTS[2][3] = [645, 0, 1290, 322, 645, 645, 645, 967, 322, 967, 645, 967, 967, 973]
WEIGHTS[2][4] = [2500, 2500, 2500, 0, 0, 0, 0, 0, 0, 2500, 0]
WEIGHTS[2][5] = [
  0, 0, 0, 0, 0, 0, 588, 588, 588, 588, 588, 0, 0, 588, 0, 0, 588, 0, 0, 0, 0, 0, 588, 0,
  0, 0, 0, 588, 0, 0, 0, 588, 588, 0, 0, 0, 588, 0, 0, 0, 0, 588, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 588, 0, 0, 0, 0, 588, 0, 0, 0, 0, 588, 0, 0, 0, 0, 0, 0, 0, 0, 588, 0, 0, 4,
]
WEIGHTS[2][6] = [925, 555, 185, 555, 925, 925, 185, 1296, 1296, 1296, 1857]
WEIGHTS[2][7] = [88, 88, 88, 88, 88, 265, 442, 8853]
WEIGHTS[2][8] = [183, 274, 274, 18, 18, 27, 36, 9170]
WEIGHTS[2][9] = [
  340, 340, 340, 340, 340, 340, 34, 340, 340, 340, 340, 170, 170, 170, 102, 238, 238, 238,
  272, 340, 340, 340, 272, 238, 238, 238, 238, 170, 34, 340, 340, 136, 340, 340, 340, 340,
  344,
]
WEIGHTS[2][10] = [
  217, 362, 217, 144, 72, 289, 144, 362, 72, 289, 217, 362, 72, 362, 362, 289, 0, 217, 0,
  72, 144, 7, 217, 72, 217, 217, 289, 217, 289, 362, 217, 362, 3269,
]
WEIGHTS[2][11] = [
  139, 278, 278, 250, 250, 194, 222, 278, 278, 194, 222, 83, 222, 278, 139, 139, 27, 278,
  278, 278, 278, 27, 278, 139, 278, 278, 278, 278, 278, 278, 278, 278, 278, 278, 278, 27,
  139, 139, 139, 139, 0, 278, 194, 83, 83, 278, 83, 27, 306,
]
WEIGHTS[2][12] = [981, 2945, 654, 16, 981, 327, 654, 163, 3279]

function getRaceIndex(dnaSegment: BigNumber): number {
  const raceWeights = WEIGHTS[0][1]

  let lowerBound = 0
  for (let i = 0; i < raceWeights.length; i++) {
    const percentage = raceWeights[i]
    if (dnaSegment.gte(lowerBound) && dnaSegment.lt(lowerBound + percentage)) {
      if (i === 1) {
        return 2
      } else if (i > 11) {
        return 1
      } else {
        return 0
      }
    }
    lowerBound += percentage
  }
  throw new Error(`Didn't find race index value for dna`)
}

function getTraitLayerIndex(
  dnaSegments: Array<BigNumber>,
  raceIndex: number,
  layerIndex: number,
): number {
  const dnaSegment = dnaSegments[layerIndex]
  const raceWeights = WEIGHTS[raceIndex][layerIndex]
  let lowerBound = 0
  for (let i = 0; i < raceWeights.length; i++) {
    const percentage = raceWeights[i]
    if (dnaSegment.gte(lowerBound) && dnaSegment.lt(lowerBound + percentage)) {
      return i
    }
    lowerBound += percentage
  }
  return raceWeights.length
}

function getTrait(
  traits: Array<RunnerTrait>,
  traitType: TraitType,
  traitIndex: number,
): Maybe<RunnerTrait> {
  return traits.find((t) => t.type === traitType && t.traitIndex === traitIndex)
}

function splitDna(dna: BigNumber): Array<BigNumber> {
  const dnaSegments: Array<BigNumber> = []
  for (let i = 0; i < Object.values(TraitType).length; i++) {
    dnaSegments[i] = dna.mod(10000)
    dna = dna.shr(14)
  }
  return dnaSegments
}

export function getSelectedTraits(
  allTraits: Array<RunnerTrait>,
  dnaString: string,
): Array<RunnerTrait> {
  const dna = BigNumber.from(dnaString)
  const dnaSegments: Array<BigNumber> = splitDna(dna)

  const raceIndex = getRaceIndex(dnaSegments[1])

  const hasFaceAcc = dnaSegments[7].lt(10000 - WEIGHTS[raceIndex][7][7])
  const hasMask = dnaSegments[8].lt(10000 - WEIGHTS[raceIndex][8][7])
  const hasHeadBelow = dnaSegments[9].lt(10000 - WEIGHTS[raceIndex][9][36])
  const hasHeadAbove = dnaSegments[11].lt(10000 - WEIGHTS[raceIndex][11][48])
  const useHeadAbove = dnaSegments[0].mod(2).gt(0)
  const selectedTraits: Array<RunnerTrait> = []
  for (let i = 0; i < Object.values(TraitType).length; i++) {
    /*
    These conditions help make sure layer selection meshes well visually.
    1. If mask, no face/eye acc/mouth acc
    2. If face acc, no mask/mouth acc/face
    3. If both head above & head below, randomly choose one
    */
    if (
      ((i == 2 || i == 12) && !hasMask && !hasFaceAcc) ||
      (i == 7 && !hasMask) ||
      (i == 10 && !hasMask) ||
      i < 2 ||
      (i > 2 && i < 7) ||
      i == 8 ||
      i == 9 ||
      i == 11
    ) {
      if (
        (hasHeadBelow && hasHeadAbove && i == 9 && useHeadAbove) ||
        (i == 11 && !useHeadAbove)
      )
        continue
      const traitIndex = getTraitLayerIndex(dnaSegments, raceIndex, i)
      const trait = getTrait(allTraits, ALL_TRAIT_ORDERING[i], traitIndex)
      if (trait) {
        selectedTraits.push(trait)
      }
    }
  }
  return selectedTraits
}
