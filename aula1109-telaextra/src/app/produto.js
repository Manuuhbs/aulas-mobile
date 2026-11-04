import { useState, useEffect, Alert } from "react";
import { Button, StyleSheet, Text, TextInput, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

export default function Cnpj() {
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("");
  const [preco, setPreco] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [descricao, setDescricao] = useState("");
  const [guardaDados, setGuardaDados] = useState({});
  const [erro, setErro] = useState("");
  // cria um objeto chamado API, que irá guardar o link da API, para facilitar na requisição
  const API = "https://6aeb6b94ee39618d7bf84d81.mockapi.io/Produto";
  //função buscar, onde puxa deste objeto e guarda tudo na variavel guardaDados
  async function buscar() {
    const resposta = await fetch(API);
    const dados = await resposta.json();
    setGuardaDados(dados);
  }

  //função para salvar um produto novo, com devidas conversões quando contém números
  async function salvar() {
    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nome: nome.trim(),
        tipo: tipo.trim(),
        preco: Number(preco),
        quantidade: parseInt(quantidade),
        descricao: descricao.trim(),
      }),
    });
    if () {
      
    }
    //limpa os campos e busca de novo os produtos novos
    setNome("");
    setTipo("");
    setPreco("");
    setQuantidade("");
    setDescricao("");
    buscar();
  }
  useEffect(() => {
    buscar();
  }, []);
  return (
    <SafeAreaView style={styles.tela} edges={["bottom"]}>
      <Stack.Screen options={{ title: "Produtos" }} />
      <TextInput
        style={styles.campo}
        value={nome}
        onChangeText={setNome}
        placeholder="insira o nome do produto"
      />
      <TextInput
        style={styles.campo}
        value={tipo}
        onChangeText={setTipo}
        placeholder="insira o tipo do produto"
      />
      <TextInput
        style={styles.campo}
        value={preco}
        onChangeText={setPreco}
        placeholder="insira o preco do produto"
      />
      <TextInput
        style={styles.campo}
        value={quantidade}
        onChangeText={setQuantidade}
        placeholder="insira a quantidade do produto"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.campo}
        value={descricao}
        onChangeText={setDescricao}
        placeholder="insira a descricao do produto"
      />
      <Button title="Salvar na API" onPress={salvar} />
      <FlatList
        style={styles.lista}
        data={guardaDados}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.id} - {item.nome} - {item.tipo} - {item.preco} -
            {item.quantidade} - {item.descricao}
          </Text>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 16,
    gap: 6,
  },

  campo: {
    borderWidth: 1,
    borderColor: "#D9DDE3",
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    marginBottom: 6,
  },

  erro: {
    marginTop: 16,
    color: "#B91C1C",
  },

  titulo: {
    fontSize: 16,
    fontWeight: "600",
  },
  lista: {
    flex: 1,
    marginTop: 16,
  },
  item: {
    backgroundColor: "#F1F3F6",
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    fontSize: 15,
    color: "#111827",
  },
});
