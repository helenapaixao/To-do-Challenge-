import React, { useState, useEffect } from "react";
import { Text, Image } from "react-native";
import { Container, RadioCircle, SelectRb } from "./styles";

interface RadioButtonProps {
  hasSelect: boolean;
}

export default function RadioButton({ hasSelect }: RadioButtonProps) {
  const [select, setSelect] = useState(false);

  return (
    <Container>
      <RadioCircle onPress={() => {}}/>
    </Container>
  );
}
