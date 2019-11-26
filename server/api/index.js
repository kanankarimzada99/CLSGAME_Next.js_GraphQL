
const express = require('express')
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var root = {
  hello: () => "World"
};

module.exports = graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
})
