import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
} from "react-native";

function Head() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jeu Devinette</Text>
    </View>
  );
}

export default function App() {
  const [paysReponse, setPaysReponse] = useState("haiti");
  const [nom, setNom] = useState(" ");
  const [pays, setPays] = useState(" ");
  const [compteur, setCompteur] = useState(0);
  const compteurAugmente = () => (
     setCompteur(compteur + 1)
  )

  const deviner = () => {    
      if (compteur >= 3){
        compteurAugmente();
        Alert.alert(` Essaie ${compteur} ${pays} n'est pas le pays à deviner nombres de tentatives 
        dépassé vous avez perdu`);
        setCompteur(0)
      }
       else if (pays === paysReponse) {
       setCompteur(0)
        Alert.alert(`Bravo c'est bien ${paysReponse}!!! `);
      } else {
        compteurAugmente();
        Alert.alert(` Essaie ${compteur}:${pays} n'est pas le pays à deviner`);
      }
      return;
    };

    const rejouer = () => [


    ]

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
      <TouchableOpacity
        style={styles.button}
        title="Soumettre"
        onPress={() => deviner(pays, paysReponse,compteurAugmente)}
        // onPress={deviner(paysReponse, pays)}
      >
        <Text style={styles.buttonText}>Soumettre</Text>
      </TouchableOpacity>
  
      <TouchableOpacity style={styles.button2} title="Rejouer"
      onPress={() => setPays('')}>
        <Text style={styles.buttonText}>Rejouer</Text>
      </TouchableOpacity>

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
    borderRadius: 8,
    backgroundColor: "#0092FF",
    width: "100%",
    padding: 5,
    marginBottom: 15,
    borderWidth: 1,
  },
  button2: {
    borderRadius: 8,
    backgroundColor: "#FF0000",
    width: "100%",
    padding: 5,
    marginBottom: 15,
    borderWidth: 1,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
  },
});
