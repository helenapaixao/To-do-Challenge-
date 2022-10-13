import React from "react";
import { Text } from "react-native";
import { Container } from "./styles";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import Card from '../../components/Card'
import ButtonAdd from "../../components/ButtonAdd";
import {Input} from '../../components/Input'
import { Counter, InfoCreated, InfoDone, TextCounter} from "../../components/Count/styles";


export default function Home() {
  return (
    <>
      <Container>
      <Header />
  
     <ButtonAdd/>
     <Input/>
     <InfoCreated>
      Criadas
     </InfoCreated>
     <InfoDone>Concluídas</InfoDone>
     <Counter>
      <TextCounter>0</TextCounter>
     </Counter>
    </Container>
    </>
  
  );
}
