import Document, { Html, Head, Main, NextScript } from 'next/document'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import fetch from 'node-fetch'

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  fetch
});

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <title>SEC Game</title>
        <Head />
        <body>
          <ApolloProvider client={client}>
            <Main />
          </ApolloProvider>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument