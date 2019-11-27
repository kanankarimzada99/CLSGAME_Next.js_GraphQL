// lib/withApollo.js
import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
// import { GRAPHQL_URL } from '../configs';

// TODO: set url in config
export default withApollo(
  ({ ctx, headers, initialState }) =>
    new ApolloClient({
      uri: 'http://ec2-13-59-81-130.us-east-2.compute.amazonaws.com/graphql',
      cache: new InMemoryCache().restore(initialState || {})
    })
);