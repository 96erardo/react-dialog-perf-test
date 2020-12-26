import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: process.env.REACT_APP_WORKSPACE_ENDPOINT || '',
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_GUEST_TOKEN}`
  }
})
