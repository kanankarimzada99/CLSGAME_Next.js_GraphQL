

import { buildSchema } from 'graphql'
import graphqlHTTP from 'express-graphql';
import firebase from '../../src/helpers/firebase';

var schema = buildSchema(`
  type Click {
    timestamp: Int
    type: String
  }
  type Mutation {
    addClick(type: String): Click
  }
`);

var root = {
  addClick: (type: String) => {
    const timestamp = new Date().getTime()
    const newClick = {
      type,
      timestamp
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
