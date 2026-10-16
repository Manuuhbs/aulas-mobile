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
        <Stack.Screen options={{ title: "Prova 2" }} />
      <Text style={{ paddingLeft: 10}}>Coleção de jogos</Text>
      <View style={styles.retangulos}>
        <Link href="/jogos" style={styles.link}>
          Coleção de jogos
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
