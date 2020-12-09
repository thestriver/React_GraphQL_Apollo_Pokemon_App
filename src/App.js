import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { PokemonContainer } from "./containers/PokemonContainer";
// import { render } from 'react-dom';
import "./App.css";

export default function App() {
  const client = new ApolloClient({
    uri: "https://graphql-pokemon2.vercel.app/"
  });

  return (
    <ApolloProvider client={client}>
      <main>
        <PokemonContainer />
      </main>
    </ApolloProvider>
  );
}
