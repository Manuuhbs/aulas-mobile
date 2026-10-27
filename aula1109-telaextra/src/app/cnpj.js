import { useState } from "react";
import { Button, StyleSheet, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

export default function Cnpj() {
  const [cnpj, setCnpj] = useState("");
  // Começa vazio: endereco.bairro é undefined e o texto não aparece.
  const [guardaDados, setGuardaDados] = useState({});
  const [erro, setErro] = useState("");
  async function buscar() {
    try {
      const resposta = await fetch(
        `https://www.receitaws.com.br/v1/cnpj/${cnpj}`,
      );
      const dados = await resposta.json();
      if (dados.status == "ERROR") {
        setErro(dados.message);
        setGuardaDados({});
      } else {
        setErro("");
        setGuardaDados(dados);
      }
    } catch (error) {
      console.log("Erro na busca:", error);
      setErro("Não foi possível consultar o CNPJ.");
      setGuardaDados({});
    }
  }

  return (
    <SafeAreaView style={styles.tela} edges={["bottom"]}>
      <Stack.Screen options={{ title: "Buscar CNPJ" }} />

      <TextInput
        style={styles.campo}
        value={cnpj}
        onChangeText={setCnpj}
        placeholder="Digite o Cnpj, só números"
        keyboardType="numeric"
      />
      <Button title="Buscar" onPress={buscar} />

      <Text style={styles.erro}>{erro}</Text>
      <Text style={styles.titulo}>{guardaDados.nome}</Text>
      <Text>{guardaDados.fantasia}</Text>
      <Text>{guardaDados.municipio}</Text>
      <Text>{guardaDados.uf}</Text>
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
});
