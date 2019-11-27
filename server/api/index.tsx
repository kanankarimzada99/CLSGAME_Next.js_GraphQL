

import { buildSchema } from 'graphql'
import graphqlHTTP from 'express-graphql';
import firebase from '../../src/helpers/firebase';

var schema = buildSchema(`
  type Click {
    timestamp: String
    type: String
  }
  type Query {
    hello: Click
  }
  type Mutation {
    addClick(type: String): Click
  }
`);

var root = {
  addClick: ({ type }: { type: String }) => {
    const timestamp = new Date().getTime()
    const newClick = {
      type,
      timestamp: timestamp.toString()
    }
    firebase.database().ref(`counts/${timestamp}`).set(newClick)
    return newClick
  }
}

module.exports = graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
})
