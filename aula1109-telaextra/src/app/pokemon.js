import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

export default function Cnpj() {
  const [nome, setNome] = useState("");
  const [guardaDados, setGuardaDados] = useState({});
  const [erro, setErro] = useState("");

  async function buscar() {
    try {
      const resposta = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${nome.trim().toLowerCase()}`,
      );

      if (!resposta.ok) {
        setErro("Pokémon não encontrado.");
        setGuardaDados({});
        return;
      }
      const dados = await resposta.json();
      setErro("");
      setGuardaDados(dados);
    } catch (error) {
      console.log("erro na busca:", error);
      setErro("não foi possível consultar o Pokémon");
      setGuardaDados({});
    }
  }

  return (
    <SafeAreaView style={styles.tela} edges={["bottom"]}>
      <Stack.Screen options={{ title: "Buscar Pokemon" }} />

      <TextInput
        style={styles.campo}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite o pokemon"
      />
      <Button title="Buscar" onPress={buscar} />

      <Text style={styles.erro}>{erro}</Text>
      {guardaDados.sprites?.front_default && (
        <Image
          style={styles.foto}
          source={{ uri: guardaDados.sprites.front_default }}
        />
      )}
      <Text style={styles.titulo}>{guardaDados.name}</Text>
      <Text>{guardaDados.height}</Text>
      <Text>{guardaDados.weight}</Text>
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
  foto: {
    width: 120,
    height: 120,
  },
});
