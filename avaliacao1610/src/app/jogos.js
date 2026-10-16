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
const db = SQLite.openDatabaseSync("jogos.db");

db.execSync(`CREATE TABLE IF NOT EXISTS jogos(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR(255) NOT NULL,
    plataforma VARCHAR(255),
    horas NUMERIC);
    `);

function listar() {
  return db.getAllSync("SELECT * FROM jogos ORDER BY id desc");
}

function adicionar(nome, plataforma, horas) {
  db.runSync("INSERT INTO jogos (nome, plataforma, horas ) VALUES (?, ?, ?)", [
    nome,
    plataforma,
    horas,
  ]);
}
function excluir(id) {
  db.runSync("DELETE FROM jogos WHERE id = ?", [id]);
}
function edita(nome, plataforma, horas, id) {
  db.runSync("UPDATE jogos SET nome = ?, plataforma = ?, horas = ? WHERE id = ?", [
    nome,
    plataforma,
    horas,
    id,
  ]);
}

export default function Listajogos() {
  const [lista, setLista] = useState([]);
  const [nome, setNome] = useState("");
  const [plataforma, setPlataforma] = useState("");
  const [horas, setHoras] = useState("");
  const [idEdita, setIdEdita] = useState(0);
  
  function carregar() {
    setLista(listar());
  }

  function remover(id) {
    excluir(id);
    carregar();
  }
  function salvarOuEditar() {
     if (!nome) {
      return;
    }
    if (idEdita == 0) {
      adicionar(nome, plataforma, horas);
    } else {
      edita(nome, plataforma, horas, idEdita);
    }
    setNome("");
    setPlataforma("");
    setHoras("");
    carregar();
   
  }
  function editar(jogos) {
    setIdEdita(jogos.id);
    setNome(jogos.nome);
    setPlataforma(jogos.plataforma);
    setHoras(String(jogos.horas));
    carregar();
  }
  useEffect(() => {
    carregar();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: "Lista de jogos" }} />
      <Text style={styles.textos}>Nome</Text>
      <Input
        value={nome}
        placeholder="insira o nome"
        onChangeText={setNome}
      ></Input>
      <Text style={styles.textos}>Plataforma</Text>
      <Input
        value={plataforma}
        placeholder="insira a plataforma"
        onChangeText={setPlataforma}
      ></Input>
            <Text style={styles.textos}>Horas</Text>
      <Input
        value={horas}
        placeholder="insira as horas"
        onChangeText={setHoras}
      ></Input>
      <Button title="Salvar" color="#07545a" onPress={salvarOuEditar} />
      <FlatList
        style={styles.lista}
        data={lista}
        renderItem={({ item }) => (
          <View style={styles.lista}>
            <Text style={item.plataforma}
               > {item.nome} - {item.plataforma} - {item.horas}
              </Text>
            <Button title="Excluir" onPress={() => remover(item.id)}  color="#78ffc4"/>
            <Button title="Editar" onPress={() => editar(item)} color="#78d9ff" />
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
  textos:{
    paddingLeft:10,
  }
});
