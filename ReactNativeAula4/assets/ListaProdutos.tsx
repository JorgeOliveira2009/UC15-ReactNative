import React, { useState } from 'react';
import { View, TextInput, FlatList, StyleSheet } from 'react-native';
import CardProduto from './CardProduto';

const produtos = [
  { id: '1', titulo: 'Bomba dos guri', preco: 199.90, foto: 'https://i.pinimg.com/736x/1c/2a/40/1c2a40fc70d40f0d90289ce5cbc7b2a8.jpg' },
  { id: '2', titulo: 'Munição', preco: 59.90, foto: 'https://i.pinimg.com/736x/1b/ca/09/1bca09125b6ebf05eaf44d6c5a07d77c.jpg' },
  { id: '3', titulo: 'Granada dos guri', preco: 39.90, foto: 'https://i.pinimg.com/736x/3a/46/f6/3a46f6d57d95573a8cdb164afd5f4465.jpg' },
];


export default function Busca() {
  const [termo, setTermo] = useState('');

  
  const produtosFiltrados = produtos.filter((p) =>
    p.titulo.toLowerCase().includes(termo.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={termo}
        onChangeText={setTermo}
        placeholder="Buscar produto..."
      />
      <FlatList
        data={produtosFiltrados}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <CardProduto
            id={item.id}
            titulo={item.titulo}
            foto={item.foto}
            preco={item.preco}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  input: {
    margin: 16,
    marginTop: 80,  
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  lista: { paddingHorizontal: 16, gap: 12 },
});


