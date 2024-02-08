import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { StyleSheet, Text, View, TextInput,Button, Alert } from 'react-native';


function Head(){
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Jeu Devinette</Text>
    </View>

  )
}
export default function App() {
  const [nom, setNom] = useState(" ");
  return (
    <View style={styles.container}>
      <Head/>
      <Text>Tapez votre nom:</Text>
      <Text></Text>
      <TextInput style={styles.input} value={nom} 
      onChangeText={setNom}></TextInput>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text style={{fontSize:20}}>Joueur {nom} devinez le pays </Text>
      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 1,
  },
  title: {
    fontSize: 31,
    color: 'blue'
  },
  input: {
    borderColor:'black',
    borderWidth: 2,
    width: '100%'
  }
});
