import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { Container } from "./styles";
import { AntDesign } from "@expo/vector-icons";

export default function ButtonAdd({ ...rest }: RectButtonProps) {
  return (
    <Container {...rest}>
      <AntDesign name="pluscircleo" color="#F2f2f2" size={24} />
    </Container>
  );
}
