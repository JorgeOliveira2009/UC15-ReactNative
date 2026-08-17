import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

export default function ListaUsuarios() {
 
  const [usuarios, setUsuarios] = useState<any[]>([]);

  
  useEffect(() => {
    
    const buscarUsuarios = async () => {
      try {
        console.log("Buscando dados da API...");
        
   
        const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
        

        const dados = await resposta.json();

    
        setUsuarios(dados);
      } catch (erro) {
   
        console.error("Erro ao buscar usuários:", erro);
      }
    };

    buscarUsuarios();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>👥 Lista de Usuários</Text>
      
      
      <FlatList
        data={usuarios}
        keyExtractor={(item) => item.id.toString()} 
        renderItem={({ item }) => (
          <Text style={styles.item}>• {item.name}</Text> 
        )}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 30 },
  titulo: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  item: { fontSize: 18, marginVertical: 4 },
});