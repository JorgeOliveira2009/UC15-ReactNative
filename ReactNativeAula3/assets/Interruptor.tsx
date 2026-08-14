import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Interruptor() {
  const [ligado, setLigado] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.status}>{ligado ? 'LIGADO' : 'DESLIGADO'}</Text>

      <TouchableOpacity
        style={[styles.botao, ligado && styles.botaoLigado]}
        onPress={() => setLigado(!ligado)}
      >
        <Text style={styles.textoBotao}>{ligado ? 'Desligar' : 'Ligar'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 16,
  },
  status: {
    fontSize: 24,
    fontWeight: '900',
    color: '#1a1a1a',
  },
  botao: {
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 8,
    backgroundColor: '#e2e8f0',
  },
  botaoLigado: {
    backgroundColor: '#22c55e',
  },
  textoBotao: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
  },
});