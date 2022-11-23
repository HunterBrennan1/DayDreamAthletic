import React from 'react';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

import { NavBar } from "./components/navBar";
import { MainPage } from "./components/MainPage"
import { Cards } from "./components/Cards"
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/App.css";

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client = {client}>
      <div className="App">
        <NavBar />
        <MainPage />
        <Cards/>
      </div>
    </ApolloProvider>
  );
}

export default App;