import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Outlet } from 'react-router-dom';
import './Home.css';
import Footer from "./Components/Footer/index";
import NavTabs from './Components/NavTabs';

const client = new ApolloClient({
  uri: "/graphql",
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