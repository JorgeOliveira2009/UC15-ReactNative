import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

type Props = {
  foto: string;
  nome: string;
  preco: number;
};

export default function CardProduto({ foto, nome, preco }: Props) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: foto }} style={styles.foto} />
      <View style={styles.info}>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.preco}>R$ {preco.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 280,
    backgroundColor: '#f5f0e8',
    borderWidth: 3,
    borderColor: '#1a1a1a',
    padding: 12,
    gap: 10,
    alignItems: 'center',
    shadowColor: '#1a1a1a',
    shadowOpacity: 1,
    shadowRadius: 0,
    shadowOffset: { width: 6, height: 6 },
    elevation: 6,
  },
  foto: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: '#1a1a1a',
  },
  info: {
    width: '100%',
    borderTopWidth: 2,
    borderColor: '#1a1a1a',
    paddingTop: 8,
    gap: 4,
  },
  nome: {
    fontSize: 16,
    fontWeight: '900',
    color: '#1a1a1a',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  preco: {
    fontSize: 20,
    fontWeight: '900',
    color: '#c0392b',
    letterSpacing: 1,
  },
});