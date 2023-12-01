import react from 'react';
import Home from './Home';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
    <div>
      <p> above</p>
      <Home/>
    </div>
      </ApolloProvider>
  )
}

export default App;
