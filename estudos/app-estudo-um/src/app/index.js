import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Stack } from "expo-router";
import { Input } from "../../components/input";
export default function Inicio() {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Stack.Screen options={{ title: "Painel" }} />
        <View style={styles.imagemPrincipal}>
          <Text style={{ fontWeight: "bold" }}>
            Seja bem vindo! Oreo e Frisk te recepcionam!
          </Text>
          <Image
            source={require("../../assets/oreo e frisk.jpg")}
            style={styles.imagem}
          />
        </View>
        <View style={styles.login}>
          <Text style={styles.titulo}>Entrar</Text>
          <Text style={styles.subtitulo}>
            Acesse sua conta com email e senha.
          </Text>
          <Input placeholder="E-mail" keyboardType="email-address" />

          <Input placeholder="Senha" secureTextEntry />
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  imagem: {
    height: 300,
    width: 300,
  },
  imagemPrincipal: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
  },
  subtitulo: {
    fontSize: 16,
  },
  login: {
    marginTop: 20,
    alignItems: "center",
  },
  credenciais: {},
});
