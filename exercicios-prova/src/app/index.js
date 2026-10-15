import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  FlatList,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Stack } from "expo-router";

export default function Inicio() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>selecione a atividade</Text>
      <View style={styles.retangulos}>
        <Link href="/agenda" style={styles.link}>
          Agenda de contatos
        </Link>
      </View>
      <View style={styles.retangulos}>
        <Link href="/biblioteca" style={styles.link}>
          Biblioteca
        </Link>
      </View>
      <View style={styles.retangulos}>
        <Link href="/compras" style={styles.link}>
          Lista de compras
        </Link>
      </View>
      <View style={styles.retangulos}>
        <Link href="/agenda" style={styles.link}>
          Agenda de contatos
        </Link>
      </View>
      <StatusBar style="auto" />
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
});
