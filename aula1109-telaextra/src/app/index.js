import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Stack } from "expo-router";
export default function Inicio() {
  return (
    <SafeAreaView style={styles.container}>
       <Stack.Screen options={{ title: "Painel" }} />
                <Link href="/aula1" style={styles.link}>Aula 1
                </Link>
                <Link href="/aula2" style={styles.link}>Aula 2
                </Link>
                <Link href="/aula1408" style={styles.link}>Aula 3
                </Link>
                <Link href="/aula2108pt1" style={styles.link}>Aula 4
                 </Link>
                <Link href="/aula2808" style={styles.link}>Aula 5 parte 1
                </Link>
                <Link href="/aula2808ex2" style={styles.link}>Aula 5 parte 2
                </Link>
                <Link href="/avaliacao0409" style={styles.link}>Aula 6
                </Link>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b3fcc8',
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
    gap:10,
  },
  secaoTextos: {
    flexDirection: "column",
  },
  batatasMacias:{
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#36b3b5",
    flexDirection:"column",
    height:70,
    borderRadius:10,
    margin:10,
  },
  invisivel:{
    height:"40%",
  },
  botao:{
    marginTop:10,
    alignItems:"center",
  },
});
