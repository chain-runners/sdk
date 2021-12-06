# @chain-runners/api-client

This package uses [graphql-code-generator](https://github.com/dotansimha/graphql-code-generator) to generate a typed API
client for the Chain Runners GraphQL API at `https://api.chainrunners.xyz/graphql`. The client generated is a
[graphql-request](https://github.com/prisma-labs/graphql-request) Client that makes the GraphQL requests using the
generated functions.

### Usage

```ts
import { getChainRunnersAPIClient } from "@chain-runners/api-client"

async function main(): Promise<void> {
  const client = getChainRunnersAPIClient()
  const response = await client.getRunnerById({ id: "780" })
  console.log(response.token?.dnaHexString)
}

main()
```

### Functions

Will expand this documentation over time, for now either utilize intellisense in your editor or check out the types
in `src/generated.ts` starting on line 410 to see what functions are available. 
