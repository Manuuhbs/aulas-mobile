import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
            <View style={styles.secaoUm}>
              <View style={styles.circulo}></View>
              <View style={styles.secaoTextos}>
                <Text style={{ fontWeight: "bold", fontSize:18}}>React Native</Text>
                <Text>Avaliação dia 04/09</Text>
                </View>
                </View>
                <View style={styles.invisivel}>
                </View>
                <View style={styles.batatasMacias}>
                  <View style={styles.batatas}>
                    <Text>Batatas são macias.</Text>
                  </View>
                </View>
                <View style={styles.botao}>
                <Button  title="Enviar" color="#043803"/>
                </View>
      <StatusBar style="auto" />
    </View>
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
