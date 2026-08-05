import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FotoPerfil from './Fotoperfil';
import BotaoSeguir from './Botaoseguir';

type Props = {
  name: string;
  bio: string;
};

export default function CartaoPerfil({ name, bio }: Props) {
  return (
    <View style={styles.card}>
      <FotoPerfil />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.bio}>{bio}</Text>
      <BotaoSeguir />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 360,
    height: 360,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    backgroundColor: '#6e0000ff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  name: {
    fontSize: 40,
    fontWeight: '700',
    color: '#0f172a',
  },
  bio: {
    fontSize: 20,
    color: '#000000ff',
  },
});
