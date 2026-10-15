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
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Stack } from "expo-router";
import { Input } from "./components/input";
import * as SQLite from "expo-sqlite";

export default function AgendaContatos() {
  const [lista, setLista] = useState([]);
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [idEdita, setIdEdita] = useState(0);

  const db = SQLite.openDatabaseSync("agenda.db");
  db.execSync(`CREATE TABLE IF NOT EXISTS agenda(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome VARCHAR(255) NOT NULL,
  telefone CHAR(11) NOT NULL);`);

  function adicionar(nome, telefone, id) {
    db.runSync("INSERT INTO agenda (nome, telefone) VALUES (?, ?)", [
      nome,
      telefone,
    ]);
  }
  function excluir(id) {
    db.runSync("DELETE from agenda WHERE id = ?", [id]);
  }

  function edita(nome, telefone, id) {
    db.runSync("UPDATE agenda SET nome = ?, telefone = ? WHERE id = ?", [
      nome,
      telefone,
      id,
    ]);
  }
  function listar() {
    return db.getAllSync("SELECT * from agenda ORDER BY id DESC");
  }
  function carregar() {
    setLista(listar());
  }
  function salvarOuEditar() {
    if (idEdita == 0) {
      adicionar(nome, telefone);
    } else {
      edita(nome, telefone, idEdita);
    }
    setNome("");
    setTelefone("");
    setIdEdita(0);
    carregar();
  }
  function editar(agenda) {
    setIdEdita(agenda.id);
    setNome(agenda.nome);
    setTelefone(agenda.telefone);
  }

  function remover(id) {
    excluir(id);
    carregar();
  }
  useEffect(() => {
    carregar();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: "Agenda de contatos" }} />
      <Text>Nome</Text>
      <Input
        value={nome}
        placeholder="insira o nome da pessoa"
        onChangeText={setNome}
      ></Input>
      <Text>Telefone</Text>
      <Input
        value={telefone}
        placeholder="insira o numero da pessoa"
        onChangeText={setTelefone}
      ></Input>
      <Button title="Salvar" color="#020101" onPress={salvarOuEditar} />
      <FlatList
        style={styles.lista}
        data={lista}
        renderItem={({ item }) => (
          <View style={styles.lista}>
            <Text style={styles.item}>
              {item.nome} - {item.telefone}
            </Text>
            <Button title="Excluir" onPress={() => remover(item.id)} />
            <Button title="Editar" onPress={() => editar(item)} />
          </View>
        )}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  retangulos: {
    height: 60,
    backgroundColor: "#68ebf7",
    borderRadius: 10,
    margin: 10,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  lista: {
    flex: 1,
  },
});
