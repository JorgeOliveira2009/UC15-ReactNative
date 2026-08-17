import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

export default function Exemplo1() {
  const [contador, setContador] = useState(0);

  
  useEffect(() => {
    console.log("O componente foi renderizado!");
  });

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>Renderizações: {contador}</Text>
      <Text
        onPress={() => setContador(contador + 1)}
        style={{ marginTop: 10, color: "blue" }}
      >
        ➕ Clique para renderizar
      </Text>
    </View>
  );
}