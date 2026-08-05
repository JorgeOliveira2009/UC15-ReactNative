import React from 'react';
import { View, StyleSheet } from 'react-native';
import CartaoPerfil from './assets/CartaoPerfil';

export default function App() {
  return (
    <View style={styles.container}>
      <CartaoPerfil
        name="Leon da massa"
        bio="Matador de zumbis muito daora"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#000000ff',
  },
});