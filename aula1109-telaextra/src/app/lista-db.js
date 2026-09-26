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
import * as SQLite from "expo-sqlite";

export default function Lista() {
  const [lista, setLista] = useState([]);
  const [texto, setTexto] = useState("");
  const [cor, setCor] = useState("");

  const db=SQLite.openDatabaseSync("bordel.db");
  db.execSync(`CREATE TABLE IF NOT EXISTS tarefas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    texto VARCHAR(255) NOT NULL,
    cor VARCHAR(255)
  );
  `);
  function carregar(){
    setLista(listar());
  }
  function adicionar(texto) {
  
  db.runSync("INSERT INTO tarefas (texto, cor) VALUES (? , ?)", [texto, cor]);
}
function excluir(id) {
  db.runSync("DELETE FROM tarefas WHERE id = ?", [id]);
}
function salvar(){
  adicionar(texto, cor)
  setTexto("")
  setCor("")
  carregar();
}
  useEffect(() => {
    carregar();
  }, []);

  function listar() {
  return db.getAllSync("SELECT * FROM tarefas ORDER BY id DESC");
}

 function remover(id) {
    excluir(id);
    carregar();
  }
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: "Lista" }} />
      <View style={styles.listagem}>
        <Input
          value={texto}
          onChangeText={setTexto}
          placeholder="Digite o texto"
        />
        <Input
          value={cor}
          onChangeText={setCor}
          placeholder="Digite a cor"
        />
        <Button title="adicionar" color="#020101" onPress={salvar} />
        <FlatList
          style={styles.lista}
          data={lista}
          renderItem={({ item }) => (
             <View style={styles.item}>
          <Text style={styles.item}>{item.texto} - {item.cor}</Text>
           <Button title="Excluir" onPress={() => remover(item.id)} />
        </View>
          )}
          />
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
