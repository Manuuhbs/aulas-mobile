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

const db = SQLite.openDatabaseSync("compras.db");
db.execSync(`CREATE TABLE IF NOT EXISTS compras(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    item_lista VARCHAR(255) NOT NULL,
    quantidade INTEGER NOT NULL,
    comprado INTEGER DEFAULT 0);
    `);
function listar() {
  return db.getAllSync("SELECT * FROM compras ORDER BY id desc");
}

function adicionar(itemLista, quantidade) {
  db.runSync("INSERT INTO compras (item_lista, quantidade ) VALUES (?, ?)", [
    itemLista,
    quantidade,
  ]);
}
function excluir(id) {
  db.runSync("DELETE FROM compras WHERE id = ?", [id]);
}
function edita(itemLista, quantidade, id) {
  db.runSync("UPDATE compras SET item_lista = ?, quantidade = ? WHERE id = ?", [
    itemLista,
    quantidade,
    id,
  ]);
}

export default function ListaCompras() {
  const [lista, setLista] = useState([]);
  const [itemLista, setItemLista] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [idEdita, setIdEdita] = useState(0);

  function carregar() {
    setLista(listar());
  }

  function remover(id) {
    excluir(id);
    carregar();
  }
  function salvarOuEditar() {
    if (idEdita == 0) {
      adicionar(itemLista, quantidade);
    } else {
      edita(itemLista, quantidade, idEdita);
    }
    setItemLista("");
    setQuantidade("");
    //setIsComprado(0);
    setIdEdita(0);
    carregar();
  }
  function editar(compras) {
    setIdEdita(compras.id);
    setItemLista(compras.item_lista);
    setQuantidade(String(compras.quantidade));
  }
  function compradoOuNao(comprado, id) {
    let novoValor;
    if (comprado == 0) {
      novoValor = 1;
    } else {
      novoValor = 0;
    }
    db.runSync("UPDATE compras SET comprado = ? WHERE id = ?", [novoValor, id]);
    carregar();
  }
  function deletaCompra() {
    db.runSync("DELETE FROM compras WHERE comprado = 1");
    carregar();
  }
  useEffect(() => {
    carregar();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: "Lista de Compras" }} />
      <Text>Item</Text>
      <Input
        value={itemLista}
        placeholder="insira o item"
        onChangeText={setItemLista}
      ></Input>
      <Text>Quantidade</Text>
      <Input
        value={quantidade}
        placeholder="insira a quantia"
        onChangeText={setQuantidade}
      ></Input>
      <Button title="Salvar" color="#020101" onPress={salvarOuEditar} />
      <Button title="Deleta comprados" onPress={deletaCompra} />
      <FlatList
        style={styles.lista}
        data={lista}
        renderItem={({ item }) => (
          <View style={styles.lista}>
            <Pressable onPress={() => compradoOuNao(item.comprado, item.id)}>
              <Text
                style={[styles.item, item.comprado == 1 && styles.compraRisco]}
              >
                {item.item_lista} - {item.quantidade}
              </Text>
            </Pressable>
            <Button title="Excluir" onPress={() => remover(item.id)} />
            <Button title="Editar" onPress={() => editar(item)} />
          </View>
        )}
      ></FlatList>
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
});
