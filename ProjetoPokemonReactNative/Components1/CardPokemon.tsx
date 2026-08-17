import { View, Text, Image, StyleSheet } from 'react-native';


const CORES: Record<string, string> = {
  fire:'#FF6B35',
  water:'#4A90E2'
  ,grass:'#5DB85D'
  ,electric:'#F5C542',
  psychic:'#F85888'
  ,ice:'#96D9D6'
  ,dragon:'#7038F8'
  ,dark:'#705848',
  fairy:'#EE99AC'
  ,fighting:'#C03028'
  ,poison:'#A040A0'
  ,ground:'#E0C068',
  flying:'#A890F0'
  ,bug:'#A8B820'
  ,rock:'#B8A038'
  ,ghost:'#705898',
  steel:'#B8B8D0'
  ,normal:'#A8A878',
};

export interface Pokemon {
  id: number; nome: string; tipos: string[]; imagem: string;
}

export default function CardPokemon({ pokemon: p }: { pokemon: Pokemon }) {
// OLHA SÓ O QUE EU DESCOBRI
// Cada Pokémon vem com o seu tipo, então eu uso esse tipo pra procurar
// a cor correspondente no CORES e deixar a borda do card combinando com ele!
// É tipo: Pokémon = "fire" → CORES["fire"] → laranja 
  const cor = CORES[p.tipos[0]] ?? '#A8A878';
  return (
    <View style={[s.card, { borderLeftColor: cor }]}>
      <Image source={{ uri: p.imagem }} style={s.img} resizeMode="contain" />
      <Text style={s.num}>#{String(p.id).padStart(3, '0')}</Text>
      <Text style={s.nome}>{p.nome}</Text>
    </View>
  );
}

const s = StyleSheet.create({
  card:{ flexDirection:'row', 
    alignItems:'center', 
    backgroundColor:'#2e2e2e', 
    marginHorizontal:16, 
    marginVertical:6, 
    borderRadius:8, 
    padding:12, 
    gap:12, 
    borderLeftWidth:6 },

  img:{ width:70, 
    height:70 },

  num:{ fontFamily:'Courier New', 
    fontSize:11, 
    color:'#8BAC0F' },

  nome:{ fontFamily:'Courier New', 
    fontSize:17, 
    fontWeight:'700', 
    color:'#E8F8C8', 
    textTransform:'capitalize' },
});
