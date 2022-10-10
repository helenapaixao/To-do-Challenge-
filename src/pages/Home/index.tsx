import React from "react";
import { Text } from "react-native";
import { Container } from "./styles";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import Card from '../../components/Card'
import ButtonAdd from "../../components/ButtonAdd";


export default function Home() {
  return (
    <>
      <Container>
      <Header />
        <SearchBar/>
     <ButtonAdd/>
     
    </Container>
    </>
  
  );
}
