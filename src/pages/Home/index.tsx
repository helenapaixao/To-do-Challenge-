import React from "react";
import { Text } from "react-native";
import { Container } from "./styles";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import Card from '../../components/Card'


export default function Home() {
  return (
    <>
      <Container>
      <Header />
        <SearchBar/>
     
        <Card/>
    </Container>
    </>
  
  );
}
