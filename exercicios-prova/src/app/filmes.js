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

const db = SQLite.openDatabaseSync("filmes.db");
db.execSync(`CREATE TABLE IF NOT EXISTS filmes(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo VARCHAR(255) NOT NULL,
    nota NUMERIC NOT NULL);
    `);

function listar() {
  return db.getAllSync("SELECT * FROM filmes ORDER BY id desc");
}

function adicionar(titulo, nota) {
  db.runSync("INSERT INTO filmes (titulo, nota ) VALUES (?, ?)", [
    titulo,
    nota,
  ]);
}
function excluir(id) {
  db.runSync("DELETE FROM filmes WHERE id = ?", [id]);
}
function edita(titulo, nota, id) {
  db.runSync("UPDATE filmes SET titulo = ?, nota = ? WHERE id = ?", [
    titulo,
    nota,
    id,
  ]);
}

export default function Listafilmes() {
  const [lista, setLista] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [nota, setNota] = useState("");
  const [idEdita, setIdEdita] = useState(0);
 const [erro, setErro] = useState("");
  function carregar() {
    setLista(listar());
  }

  function remover(id) {
    excluir(id);
    carregar();
  }
  function salvarOuEditar() {
    if (idEdita == 0) {
      adicionar(titulo, nota);
    } else {
      edita(titulo, nota, idEdita);
    }
    setTitulo("");
    setNota("");
    carregar();
  }
  function editar(filmes) {
    setIdEdita(filmes.id);
    setTitulo(filmes.titulo);
    setNota(String(filmes.nota));
    carregar();
  }
  function calculaMaiorQueSete(nota) {
    return nota >= 7 ? styles.notaVerde : styles.notaVermelha;
  }
  useEffect(() => {
    carregar();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: "Lista de filmes" }} />
      <Text>Titulo</Text>
      <Input
        value={titulo}
        placeholder="insira o titulo"
        onChangeText={setTitulo}
      ></Input>
      <Text>nota</Text>
      <Input
        value={nota}
        placeholder="insira a nota"
        onChangeText={setNota}
      ></Input>
      <Button title="Salvar" color="#020101" onPress={salvarOuEditar} />
      <FlatList
        style={styles.lista}
        data={lista}
        renderItem={({ item }) => (
          <View style={styles.lista}>
            <Text style={calculaMaiorQueSete(item.nota)}
               >
                {item.titulo} - {item.nota}
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
  compraRisco: {
    textDecorationLine: "line-through",
  },
  notaVerde:{
    backgroundColor: "green",
  },
  notaVermelha:{
    textDecorationLine:"underline",
    backgroundColor: "red"
  }
});
