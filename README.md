# clp-game

A simple application that can live update a dashboard when a client application clicks on either the orange or blue button. The dashboard must show live updates of the number of clicks without polling the server and display a chart after 5 seconds is elapsed. The game can be reset when the page is refreshed.

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

### Demo

Dashboard: http://ec2-13-59-81-130.us-east-2.compute.amazonaws.com/dashboard

Client: http://ec2-13-59-81-130.us-east-2.compute.amazonaws.com/client

## What is the Tech stack?

Front End: NextJs, ReactJS, Typescript, GraphQL

Back End: nodeJS, expressJs, Typescript, GraphQL

Database: Firebase realtime database

Cloud service: AWS EC2, Firebase

## To be improved

 * [ ] Move config to config file, or .env
 * [ ] Make `yarn build` successful
 * [ ] Reduce load time to the application, e.g. use aws server in asia region
 * [ ] Make CSS ready on server side before render to client side
 * [ ] Use GraphQL Subscriptions as web socket instead of using Firebase socket directly. Ref.: https://www.apollographql.com/docs/react/data/subscriptions/
