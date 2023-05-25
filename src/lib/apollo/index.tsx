import { ApolloClient, from, HttpLink } from '@apollo/client'
import { RetryLink } from '@apollo/client/link/retry'

import authLink from './authLink'
import cache from './cache'

const retryLink = new RetryLink({
  delay: {
    initial: 100
  },
  attempts: {
    max: 2,
    retryIf: (error) => !!error
  }
})

const httpLink = new HttpLink({
  uri: "https://api-mumbai.lens.dev",
  fetchOptions: 'no-cors',
  fetch
})

const apolloClient = new ApolloClient({
  link: from([authLink, retryLink, httpLink]),
  cache
})

export default apolloClient