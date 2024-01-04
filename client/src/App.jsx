import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Outlet } from 'react-router-dom';
import './Home.css';

import About from "./Pages/About";
import Login from "./Pages/Login";
import Users from "./Users";
import Signup from "./Pages/Signup";
import Footer from "./Components/Footer/index";
import Home from "./Pages/Home";
import NavTabs from './Components/NavTabs';
import {Cloudinary} from "@cloudinary/url-gen";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

const cld = new Cloudinary({cloud: {cloudName: 'dnafosoap'}});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <NavTabs />
      <main className="mx-3 ">
        <Outlet />
      </main>
    <Footer />
    </div>
  </ApolloProvider>
    )
  

export default App;