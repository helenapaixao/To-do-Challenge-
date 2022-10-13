import React from "react";
import { Text } from "react-native";
import { Container } from "./styles";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import Card from '../../components/Card'
import ButtonAdd from "../../components/ButtonAdd";
import {Input} from '../../components/Input'


export default function Home() {
  return (
    <>
      <Container>
      <Header />
  
     <ButtonAdd/>
     <Input/>
    </Container>
    </>
  
  );
}
