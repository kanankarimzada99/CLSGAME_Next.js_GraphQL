# clp-game

This is a really simple project that show the usage of Next.js with TypeScript.

## What is the Tech stack?

Front End: NextJs, ReactJS, Typescript, GraphQL

Back End: nodeJS, expressJs, Typescript, GraphQL

Database: Firebase realtime database

Cloud service: AWS EC2, Firebase

### Download manually

Install it and run:

```bash
yarn && yarn dev
```

if error occurs, try to build the project first and run again:

```bash
yarn build && yarn dev
```

it is normal that `yarn build` fail due to `babel` and `typescript` integration which force `isolatedModules = true` in tsconfig.json. Since this will not block `yarn dev` or `yarn start`, this can be fixed later.

## To be improved

 * [ ] Move config to config file, or .env
 * [ ] Make `yarn build` successful
 * [ ] Use GraphQL Subscriptions as web socket instead of using Firebase socket directly. Ref.: https://www.apollographql.com/docs/react/data/subscriptions/
