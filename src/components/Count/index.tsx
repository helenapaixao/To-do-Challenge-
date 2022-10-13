import React from "react";
import { Text } from "react-native";
import { InfoCreated, InfoDone, Container, TextCounter } from "./styles";

export default function Count() {
  return (
    <Container>
      <InfoCreated>
        <TextCounter>0</TextCounter>
      </InfoCreated>
      <InfoDone>
        <TextCounter>2</TextCounter>
      </InfoDone>
    </Container>
  );
}
