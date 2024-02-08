import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function Head(){
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Jeu Devinette</Text>
    </View>

  )
}
export default function App() {
  return (
    <View style={styles.container}>
      <Head/>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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
