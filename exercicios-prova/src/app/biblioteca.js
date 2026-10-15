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

export default function Biblioteca() {
  const [lista, setLista] = useState("");
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [paginas, setPaginas] = useState(0);
  const [idEdita, setIdEdita] = useState("");

  const db = SQLite.openDatabaseSync("biblioteca.db");
  db.execSync(`CREATE TABLE IF NOT EXISTS biblioteca(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo VARCHAR(255) NOT NULL,
    autor VARCHAR (255) NOT NULL, 
    paginas INTEGER NOT NULL);`);

  function salvar(titulo, autor, paginas) {
    db.runSync(
      "INSERT INTO biblioteca (titulo, autor, paginas), VALUES (?, ?, ?)",
      [titulo, autor, paginas],
    );
  }
  function excluir(id) {
    db.runSync("DELETE FROM biblioteca WHERE id = ?", [id]);
  }
  function edita(titulo, autor, paginas, id) {
    db.runSync(
      "UPDATE biblioteca SET titulo = ? , autor = ?, paginas = ? WHERE id = ?",
      [titulo, autor, paginas, id],
    );
  }
  function listar() {
    return db.getAllSync("SELECT * from biblioteca ORDER BY id DESC");
  }
  function carregar() {
    setLista(listar());
  }
  function remover(id) {
    excluir(id);
    carregar();
  }
  function salvarOuEditar() {
    if (idEdita == 0) {
      adicionar(titulo, autor, paginas);
    } else {
      edita(titulo, autor, paginas, idEdita);
    }
    setTitulo("");
    setAutor("");
    setPaginas(0);
    setIdEdita(0);
    carregar();
  }
  function editar(biblioteca) {
    setIdEdita(biblioteca.id);
    setTitulo(biblioteca.titulo);
    setAutor(biblioteca.autor);
    setPaginas(biblioteca.paginas);
  }
  useEffect(() => {
    carregar();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: "Biblioteca" }} />
      <Text>Titulo</Text>
      <Input placeholder="insira o titulo" onChangeText={setTitulo}></Input>
      <Text>Autor</Text>
      <Input placeholder="insira o autor"></Input>
      <Text>Páginas</Text>
      <Input placeholder="insira as paginas " onChangeText={setPaginas}></Input>
      <Button title="Salvar" color="#020101" />
      <FlatList
        style={styles.lista}
        data={lista}
        renderItem={({ item }) => (
          <View style={styles.lista}>
            <Text styles={styles.item}>
              {item.titulo} - {item.autor} - {item.paginas}
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
