import App from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost';
import withApollo from '../helpers/withApollo'

type Props = {
  Component: React.ReactNode,
  pageProps: Object,
  apollo: any
}

class MyApp extends App<Props> {
  render() {
    const { Component, pageProps, apollo } = this.props;

    return (
      <ApolloProvider client={apollo}>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
}

export default withApollo(MyApp);