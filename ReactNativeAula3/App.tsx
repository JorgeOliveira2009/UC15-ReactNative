import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Contador from './assets/Contador';
import Interruptor from './assets/Interruptor';
import Somador from './assets/Somador';

export default function App() {
  return (
    <View style={styles.container}>
      <Somador/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
