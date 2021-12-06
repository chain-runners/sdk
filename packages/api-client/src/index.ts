import { GraphQLClient } from 'graphql-request'
import { getSdk } from './generated'

export const DEFAULT_CHAIN_RUNNERS_GRAPHQL_API_ENDPOINT =
  'https://api.chainrunners.xyz/graphql'
export type GraphQLAPIClient = ReturnType<typeof getSdk>

function getAPIHeaders(token?: string): Record<string, string> {
  return token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : {}
}

export function getChainRunnersAPIClient(
  endpoint?: string,
  token?: string,
): GraphQLAPIClient {
  const client = new GraphQLClient(
    endpoint ?? DEFAULT_CHAIN_RUNNERS_GRAPHQL_API_ENDPOINT,
    {
      credentials: 'include',
    },
  )

  const headers = getAPIHeaders(token)
  return getSdk(client, (action) => {
    return action(headers)
  })
}
