import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

type Props = {
  id: string;
  titulo: string;
  foto: string;
  preco: number;
};

export default function CardProduto({ id, titulo, foto, preco }: Props) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: foto }} style={styles.foto} />
      <View>
        <Text style={styles.id}>#{id}</Text>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.preco}>R$ {preco.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#000000ff',
    padding: 12,
    borderRadius: 8,
    elevation: 2,
  },
  foto: { width: 64, height: 64, borderRadius: 8 },
  id: { fontSize: 12, color: '#ffffffff' },
  titulo: { fontSize: 16, fontWeight: '700', color: '#ffffffff' },
  preco: { fontSize: 14, color: '#630000ff', fontWeight: '600' },
});
