
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
  type Click {
    timestamp: Int
    type: String
  }
  type Query {
    hello: Click
  }
`);

var root = {
  hello: () => ({
    id: 'String',
    name: 'String',
    job_title: 'String',
    email: 'String'
  })
};

module.exports = graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
})
