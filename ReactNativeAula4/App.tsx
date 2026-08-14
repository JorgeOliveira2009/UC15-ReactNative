import React from 'react';
import { View, StyleSheet } from 'react-native';
import Busca from './assets/Busca';

export default function App() {
  return (
    <View style={styles.container}>
      <Busca />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e2e2eff',
  },
});