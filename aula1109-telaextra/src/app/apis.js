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
export default function Inicio() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Stack.Screen options={{ title: "Aulas" }} />
        <View style={styles.retangulos}>
          <Link href="/cep" style={styles.link}>
            cep
          </Link>
        </View>
        <View style={styles.retangulos}>
          <Link href="/cachorro" style={styles.link}>
           cachorro
          </Link>
        </View>
        <View style={styles.retangulos}>
          <Link href="/cachorro" style={styles.link}>
           cnpj
          </Link>
        </View>
        <View style={styles.retangulos}>
          <Link href="/aula1408" style={styles.link}>
            pokemon
          </Link>
        </View>
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b3fcc8",
  },
  circulo: {
    width: 50,
    height: 50,
    borderRadius: 90,
    backgroundColor: "#0c7678",
  },
  secaoUm: {
    paddingTop: 50,
    flexDirection: "row",
    margin: 10,
    gap: 10,
  },
  secaoTextos: {
    flexDirection: "column",
  },
  batatasMacias: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#36b3b5",
    flexDirection: "column",
    height: 70,
    borderRadius: 10,
    margin: 10,
  },
  invisivel: {
    height: "40%",
  },
  botao: {
    marginTop: 10,
    alignItems: "center",
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
  imagem: {
    height: 100,
    width: 100,
  },
  imagens: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
  },
});
