import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function FotoPerfil() {
  return (
    <Image
      source={{ uri: 'https://i.pinimg.com/736x/b5/53/3a/b5533aab6640f98053830b275ba588a0.jpg' }}
      style={styles.foto}
    />
  );
}

const styles = StyleSheet.create({
  foto: {
    width: 140,
    height: 140,
    borderRadius: 98,
  },
});