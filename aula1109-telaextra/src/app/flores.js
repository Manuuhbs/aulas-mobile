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
  const [nome, setNome] = useState("");
  const [corPredominante, setCorPredominante] = useState("");
  const [nomeCientifico, setNomeCientifico] = useState("");
  const [idEdita, setIdEdita] = useState(0)

  const db = SQLite.openDatabaseSync("flores.db");
  db.execSync(`CREATE TABLE IF NOT EXISTS flores (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR(255) NOT NULL,
    corPredominante VARCHAR(255) NOT NULL,
    nomeCientifico VARCHAR(255) NOT NULL
  );
  `);
  function carregar() {
    setLista(listar());
  }
  function editar(nome, corPredominante, nomeCientifico, id){
    db.runSync("UPDATE flores SET nome = ?, corPredominante = ?, nomeCientifico = ? WHERE id = ?", [nome, corPredominante, nomeCientifico, id])
  }
  function adicionar(nome, corPredominante, nomeCientifico) {
    db.runSync("INSERT INTO flores (nome, corPredominante, nomeCientifico) VALUES (? , ?, ?)", [nome, corPredominante, nomeCientifico]);
  }
  function excluir(id) {
    db.runSync("DELETE FROM flores WHERE id = ?", [id]);
  }
  function salvarOuEditar() {
    if (idEdita == 0) {
      adicionar(nome, corPredominante, nomeCientifico);
    } else{
      editar(nome, corPredominante, nomeCientifico, idEdita);
      }
    setNome("");
    setCorPredominante("");
    setNomeCientifico("");
    setIdEdita(0);
    carregar();

  }
  function edita(flores){
    setIdEdita(flores.id);
    setNome(flores.nome);
    setCorPredominante(flores.corPredominante);
    setNomeCientifico(flores.nomeCientifico);
  }  
  useEffect(() => {
    carregar();
  }, []);

  function listar() {
    return db.getAllSync("SELECT * FROM flores ORDER BY id DESC");
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
          value={nome}
          onChangeText={setNome}
          placeholder="Digite o nome"
        />
        <Input value={corPredominante} onChangeText={setCorPredominante} placeholder="Digite a cor predominante" />
        <Input value={nomeCientifico} onChangeText={setNomeCientifico} placeholder="Digite o nome cientifico" />

        <Button title="Salvar" color="#020101" onPress={salvarOuEditar} />
        <FlatList
          style={styles.lista}
          data={lista}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.item}>
                {item.nome} - {item.corPredominante} - {item.nomeCientifico}
              </Text>
              <Button title="Excluir" onPress={() => remover(item.id)} />
              <Button title="Editar" onPress={() => edita(item)} />

            </View>
          )}
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
