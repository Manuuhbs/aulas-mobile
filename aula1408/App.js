import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.secaoUm}>
        <View style={styles.circulo}></View>
        <View style={styles.secaoTextos}>
          <Text style={{ fontWeight: "bold" }}>Olá estudante!</Text>
          <Text>Bem vindo</Text>
        </View>
      </View>
      <Text style={{ fontWeight: "bold", paddingLeft: 25 }}>Menu</Text>
      <View style={styles.botoes}>
        <Button title="Notas" />
        <Button title="Aulas" color="rgba(6, 75, 0, 0.33)" />
        <Button title="Avisos" color="rgba(51, 0, 75, 0.33)" />
      </View>
      <View style={styles.menuAtividadesCaixa}>
        <Text style={{ paddingLeft: 20 }}>Próximas Atividades</Text>
        <View style={styles.menuAtividades}>
          <View style={styles.caixa}>
            <View style={styles.textos}>
              <Text style={{ fontWeight: "bold" }}>Trabalho de Matemática</Text>
              <Text style={{ color: "#4a4949" }}>Entrega:20/08</Text>
            </View>
          </View>
          <View style={styles.caixa}>
            <View style={styles.textos}>
              <Text style={{ fontWeight: "bold" }}>
                Prova de Física(Importante)
              </Text>
              <Text style={{ color: "#4a4949" }}>Entrega:22/08</Text>
            </View>
          </View>
          <View style={styles.caixa}>
            <View style={styles.textos}>
              <Text style={{ fontWeight: "bold" }}>Leitura de História</Text>
              <Text style={{ color: "#4a4949" }}>Cap. 3 e 4</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.menuChamada}>
        <Text>Chamada para ação</Text>
        <View style={styles.novoCurso}>
          <View style={styles.subSecao}>
            <Text>Adquira um novo curso e continue aprendendo!</Text>
            <Button title="Comprar curso" color="#4810c9" />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  texto: {
    color: "#00300c",
  },
  circulo: {
    width: 50,
    height: 50,
    borderRadius: 90,
    backgroundColor: "#aaa8a8",
  },
  secaoUm: {
    paddingTop: 50,
    flexDirection: "row",
    margin: 10,
  },
  secaoTextos: {
    flexDirection: "column",
  },
  botoes: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  menuAtividades: {
    flexDirection: "column",
  },
  menuAtividadesCaixa: {
    flexDirection: "column",
  },
  caixa: {
    height: 80,
    backgroundColor: "#dddddd",
    borderRadius: 10,
    margin: 5,
    paddingTop: 10,
  },
  textos: {
    flexDirection: "column",
    gap: 5,
  },
  menuChamada: {
    margin: 15,
  },
  novoCurso: {
    flexDirection: "row",
    backgroundColor: "#e8edea",
    height: 80,
    paddingLeft: 10,
  },
  subSecao: {
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    flexDirection: "column",
  },
});
