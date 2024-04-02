import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { Outlet } from 'react-router-dom';
import './Home.css';
import Footer from "./Components/Footer/index";
import NavTabs from './Components/NavTabs';

import { setContext } from '@apollo/client/link/context';

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


const App = () => (


  
  
  <ApolloProvider client={client}>
    <div>
      <NavTabs />
      <main className="">
        <Outlet />

      </main>
    <Footer />
    </div>
  </ApolloProvider>
  )
   
  

export default App;