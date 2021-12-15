import { getChainRunnersAPIClient } from '@chain-runners/api-client'
import {
  ChainRunners__factory,
  MAINNET_CHAIN_RUNNERS_CONTRACT_ADDRESS,
} from '@chain-runners/contract-connectors'
import { prettyLog } from '@chain-runners/utils'
import { ethers } from 'ethers'

const INFURA_ID = process.env.INFURA_ID
const INFURA_URL = `https://mainnet.infura.io/v3/${INFURA_ID}`

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(INFURA_URL)
  const contract = ChainRunners__factory.connect(
    MAINNET_CHAIN_RUNNERS_CONTRACT_ADDRESS,
    provider,
  )
  const dnaResult = await contract.getDna(780)
  console.log(dnaResult.toString())

  const client = getChainRunnersAPIClient()
  const result = await client.getRunnerById({ id: '780' })
  prettyLog({ token: result.token })
}

main().then(() => {
  console.log('Done')
  process.exit()
})
