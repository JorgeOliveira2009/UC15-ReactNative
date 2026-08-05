import React from 'react';
import { View, StyleSheet } from 'react-native';
import CardProduto from './assets/CardProduto';


const FOTO_1 = 'https://i.pinimg.com/736x/d9/af/58/d9af58e79ac30a30a8b97f1d755b76d1.jpg';
const FOTO_2 = 'https://i.pinimg.com/736x/1c/2a/40/1c2a40fc70d40f0d90289ce5cbc7b2a8.jpg';
const FOTO_3 = 'https://i.pinimg.com/736x/ab/b5/5c/abb55c6f10d737a3b8c9a896738f3a55.jpg';

export default function App() {
  return (
    <View style={styles.container}>
      <CardProduto
        foto={FOTO_1}
        nome="FEIJÃO ÃO"
        preco={49.99}
      />
      <CardProduto
        foto={FOTO_2}
        nome="BOMBA"
        preco={89.90}
      />
      <CardProduto
        foto={FOTO_3}
        nome="C4"
        preco={129.00}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    padding: 16,
    backgroundColor: '#b3b3b3ff',
  },
});
