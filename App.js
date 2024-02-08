import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

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
      <Text>Tapez votre nom:</Text>
      <Text></Text>
      <TextInput value='@'></TextInput>
      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 15,
  },
  title: {
    fontSize: 31,
    color: 'blue'
  },
  TextInput: {
    borderColor:'black',
    borderWidth: '20px',
    width: '150px'
  }
});
