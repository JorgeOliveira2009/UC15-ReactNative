import { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from "react-native";
import CardPokemon, { Pokemon } from "./CardPokemon";

export default function BuscaPokemon() {
  const [busca, setBusca] = useState("");
  const [lista, setLista] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);

  // Carrega os Pokémon automaticamente quando a tela abrir
  useEffect(() => {
    carregarPokemons();
  }, []);

  const carregarPokemons = async () => {
    try {
      const pokemons: Pokemon[] = [];

      for (let i = 1; i <= 10; i++) {
        const resposta = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${i}`
        );

        const dados = await resposta.json();

        const pokemon: Pokemon = {
          id: dados.id,
          nome: dados.name,
          tipos: dados.types.map((t: any) => t.type.name),
          imagem:
            dados.sprites?.versions?.["generation-v"]?.["black-white"]
              ?.animated?.front_default ||
            dados.sprites?.other?.["official-artwork"]?.front_default ||
            dados.sprites?.front_default,
        };

        pokemons.push(pokemon);
      }

      setLista(pokemons);
    } catch (erro) {
      console.error("Erro ao carregar pokémons:", erro);
    }
  };

  const buscarPokemon = async () => {
    const nome = busca.trim().toLowerCase();

    if (!nome) return;

    setLoading(true);

    try {
      const resposta = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${nome}`
      );

      if (!resposta.ok) {
        Alert.alert("Não encontrado", `"${busca}" não existe.`);
        return;
      }

      const dados = await resposta.json();

      const pokemon: Pokemon = {
        id: dados.id,
        nome: dados.name,
        tipos: dados.types.map((t: any) => t.type.name),
        imagem:
          dados.sprites?.versions?.["generation-v"]?.["black-white"]
            ?.animated?.front_default ||
          dados.sprites?.other?.["official-artwork"]?.front_default ||
          dados.sprites?.front_default,
      };

      // Coloca o pesquisado no começo da lista
      // e evita Pokémon duplicado
      setLista((prev) => [
        pokemon,
        ...prev.filter((p) => p.id !== pokemon.id),
      ]);

      setBusca("");
    } catch (erro) {
      console.error("Erro ao buscar pokémon:", erro);
      Alert.alert("Erro", "Não foi possível buscar o Pokémon.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>POKÉDEX</Text>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          value={busca}
          onChangeText={setBusca}
          onSubmitEditing={buscarPokemon}
          placeholder="pikachu..."
          placeholderTextColor="#555"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="search"
        />

        <TouchableOpacity
          style={styles.botao}
          onPress={buscarPokemon}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#0F380F" size="small" />
          ) : (
            <Text style={styles.botaoTxt}>OK</Text>
          )}
        </TouchableOpacity>
      </View>

      <FlatList
        data={lista}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <CardPokemon pokemon={item} />}
        contentContainerStyle={{ paddingBottom: 32 }}
        ListEmptyComponent={
          <Text style={styles.vazio}>
            nenhum pokémon carregado ainda.
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    paddingTop: 50,
  },

  titulo: {
    fontFamily: "Courier New",
    fontSize: 22,
    fontWeight: "700",
    color: "#8BAC0F",
    letterSpacing: 4,
    textAlign: "center",
    marginBottom: 16,
  },

  inputRow: {
    flexDirection: "row",
    marginHorizontal: 16,
    marginBottom: 12,
    gap: 8,
  },

  input: {
    flex: 1,
    backgroundColor: "#2e2e2e",
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontFamily: "Courier New",
    fontSize: 14,
    color: "#E8F8C8",
    borderWidth: 1,
    borderColor: "#3d3d3d",
  },

  botao: {
    backgroundColor: "#8BAC0F",
    borderRadius: 8,
    paddingHorizontal: 18,
    justifyContent: "center",
    alignItems: "center",
  },

  botaoTxt: {
    fontFamily: "Courier New",
    fontSize: 14,
    fontWeight: "700",
    color: "#0F380F",
  },

  vazio: {
    fontFamily: "Courier New",
    fontSize: 12,
    color: "#555",
    textAlign: "center",
    marginTop: 40,
  },
});