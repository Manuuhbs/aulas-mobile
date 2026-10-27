import { useState, useEffect } from "react";
import { Button, Image, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

export default function Cachorro() {
  const [imagem, setImagem] = useState("");
  const [erro, setErro] = useState("");

  async function buscar() {
    try {
      const resposta = await fetch("https://dog.ceo/api/breeds/image/random");

      const dados = await resposta.json();

      setImagem(dados.message);
      setErro("");
    } catch (e) {
      setErro("Erro ao buscar cachorro.");
    }
  }

  useEffect(() => {
    buscar();
  }, []);

  return (
    <SafeAreaView style={styles.tela} edges={["bottom"]}>
      <Stack.Screen options={{ title: "Buscar Cachorros" }} />

      {imagem !== "" && (
        <Image
          source={{ uri: imagem }}
          style={{ width: "100%", height: 320 }}
          resizeMode="contain"
        />
      )}

      <Button title="Outro cachorro" onPress={buscar} />

      <Text style={styles.erro}>{erro}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 16,
    gap: 12,
  },

  erro: {
    marginTop: 10,
    color: "#B91C1C",
  },
});
