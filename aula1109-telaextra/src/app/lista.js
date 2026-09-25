import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  FlatList,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Stack } from "expo-router";
import { Input } from "../../components/input";
export default function Lista() {
  const [lista, setLista] = useState([]);
  const [texto, setTexto] = useState("");

  function adicionaNaLista() {
    setLista([...lista, texto]);
    setTexto("");
  }

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: "Lista" }} />
      <View style={styles.listagem}>
        <Input
          value={texto}
          onChangeText={setTexto}
          placeholder="adicione à lista"
        />
        <Button title="adicionar" color="#020101" onPress={adicionaNaLista} />
        <FlatList
          style={styles.lista}
          data={lista}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listagem: {
    alignItems: "center",
  },
  botoes: {
    height: 100,
    width: 50,
  },
  item: {
    borderRadius: 3,
    backgroundColor: "#ffa481",
    gap: 10,
    fontSize: 16,
    width: 300,
    marginBottom: 5,
    textAlign: "center",
  },
  lista: {
    marginTop: 10,
  },
});
