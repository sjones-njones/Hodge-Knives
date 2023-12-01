import react from 'react';
import Home from './Home';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import Users from "./Users"
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
    <div>
      <Users/>
      <p> above</p>
      <Home/>
    </div>
      </ApolloProvider>
  )
}

export default App;
