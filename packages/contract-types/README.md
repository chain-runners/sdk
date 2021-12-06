# @chain-runners/contract-types

This package uses [TypeChain](https://github.com/dethcrypto/TypeChain) to generate types contract clients based on the
Chain Runners contract ABIs. The contract clients can be instantiated using an [ethers](https://ethers.org/) Provider
and used to make requests against the CR contracts.

### Usage

```ts
import {
  ChainRunners__factory,
  MAINNET_CHAIN_RUNNERS_CONTRACT_ADDRESS,
} from '@chain-runners/contract-types'
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
}

main()
```
