import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";

function Head() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jeu Devinette</Text>
    </View>
  );
}
const deviner = (paysADeviner, reponse) => {
  
  if (paysADeviner === reponse) {
    Alert.alert(`Bravo c'est bien${reponse}!!! `);
    console.log(`Bravo c'est bien ${reponse} `)
  } else {
    Alert.alert(` ${paysADeviner} n'est pas le pays à deviner`);
    console.log(` ${paysADeviner} n'est pas le pays à deviner`);
  }
  return;
};
export default function App() {
  const [paysReponse, setPaysReponse] = useState(" haiti");
  const [nom, setNom] = useState(" ");
  const [pays, setPays] = useState(" ");
  return (
    <View style={styles.container}>
      <Head />
      <Text>Tapez votre nom:</Text>
      <Text></Text>
      <TextInput
        style={styles.input}
        value={nom}
        onChangeText={setNom}
      ></TextInput>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text style={{ fontSize: 20 }}>Joueur{nom} devinez le pays </Text>
      <Text></Text>
      <TextInput
        style={styles.input}
        value={pays}
        onChangeText={setPays}
      ></TextInput>
      <Button
        style={styles.button}
        title="Soumettre"
        onPress={() => deviner(pays, paysReponse )}
       // onPress={deviner(paysReponse, pays)}
      ></Button>
      <Text></Text>
      <Button style={styles.button} title="Rejouer"></Button>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffff",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 1,
  },
  title: {
    fontSize: 31,
    color: "blue",
    padding: 25,
    paddingLeft: 0,
  },
  input: {
    borderColor: "black",
    borderWidth: 2,
    width: "100%",
  },
  button: {
    width: "100%",
    paddingBottom: 15,
  },
});
