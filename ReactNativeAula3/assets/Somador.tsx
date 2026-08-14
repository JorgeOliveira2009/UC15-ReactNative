import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Somador() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState<number | null>(null);

  function somar() {
    setResultado(Number(num1) + Number(num2));
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={num1}
        onChangeText={setNum1}
        keyboardType="numeric"
        placeholder="Número 1"
      />
      <TextInput
        style={styles.input}
        value={num2}
        onChangeText={setNum2}
        keyboardType="numeric"
        placeholder="Número 2"
      />

      <TouchableOpacity style={styles.botao} onPress={somar}>
        <Text style={styles.textoBotao}>Somar</Text>
      </TouchableOpacity>

      {resultado !== null && <Text style={styles.resultado}>Resultado: {resultado}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 12 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, width: 200 },
  botao: { backgroundColor: '#0ea5e9', padding: 12, borderRadius: 8 },
  textoBotao: { color: '#fff', fontWeight: '700' },
  resultado: { fontSize: 20, fontWeight: '700' },
});