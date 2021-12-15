import { getChainRunnersAPIClient } from '@chain-runners/api-client'
import { ALL_TRAITS } from '@chain-runners/data'
import { getSelectedTraits } from '@chain-runners/utils'
import { getOrThrow } from '@chain-runners/utils/dist/types'

async function main() {
  const client = getChainRunnersAPIClient()
  const response = await client.getRunnerById({ id: '780' })
  const token = getOrThrow(response.token)

  console.log(token.dnaString)

  const traits = getSelectedTraits(ALL_TRAITS, token.dnaString)
  console.log(traits.map((t) => t.displayName))
}

main().then(() => {
  console.log('Done')
  process.exit()
})
