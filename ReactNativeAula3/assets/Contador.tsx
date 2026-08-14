import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

export default function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <View>
      <Text>Contador: {contador}</Text>

      <TouchableOpacity style={styles.botao} onPress={() => setContador(contador + 1)}>
        <Text>Incrementar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#0ea5e9',
    padding: 12,
    borderRadius: 8,
  },
});