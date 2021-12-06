# @chain-runners/sdk

Consists of various packages to help facilitate building on the [Chain Runners](https://chainrunners.xyz/) NFT platform.

### IMPORTANT DISCLAIMERS

1. Things are *very* early so expect things to change rapidly. Especially prior to a 1.0 release, there will likely be
   breaking changes as things evolve. We would recommend paying attention to the changes and you also may want to
   consider pinning to a specific version of the dependency you are using to avoid builds accidentally changing.
2. The docs and tests are very light right now as it is early days. No support guarantees are made, especially while we
   are in a phase of rapid iteration. This is especially true of the Terminal which is basically in an MVP state and
   will almost certainly see very significant changes in the coming weeks and months.

### Packages

- `@chain-runners/api-client`: Generated `graphql-request` for the Chain Runners GraphQL API
- `@chain-runners/contract-types`: Generated contract clients for the Chain Runners contracts with types
- `@chain-runners/ui`: React component library used to build core CR experiences such as the RunnerHub
