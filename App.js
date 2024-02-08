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
const deviner = (props) => {
  const [pays, setPays] = useState(" haiti");

  if (pays = props){
    Alert.alert(`Bravo c'est bien ${pays} `)
  } else{Alert.alert(` ${props} n'est pas le pays à deviner`)}



}
export default function App() {
  const [nom, setNom] = useState(" ");
  const [pays, setPays] = useState(" ");
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
      <Text style={{fontSize:20,}}>Joueur {nom} devinez le pays </Text>
      <Text></Text>
      <TextInput style={styles.input} value='' >
        
      </TextInput>
      <Button style={styles.Button} title='Soumettre'></Button>
      <Text></Text>
      <Button style={styles.Button} title='Rejouer'></Button>
      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#ffff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 1,
  },
  title: {
    fontSize: 31,
    color: 'blue',
    padding: 25,
    paddingLeft:0
  },
  input: {
    borderColor:'black',
    borderWidth: 2,
    width: '100%'
  },
  Button: {
    width:'100%',
    paddingBottom: 15
    

  }
});
