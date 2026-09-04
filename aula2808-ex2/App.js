import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.secaoUm}>
        <View style={styles.circulo}></View>
        <View style={styles.secaoTextos}>
          <Text style={{ fontWeight: "bold" }}>Olá estudante!</Text>
          <Text>Sua trilha do dia</Text>
        </View>
      </View>
      <Text style={{ fontWeight: "bold", paddingLeft: 25 }}>Menu</Text>
      <View style={styles.botoes}>
        <Button title="Playlists" color="#19de0b" />
        <Button title="Artistas" color="rgb(4, 62, 170)" />
        <Button title="Rádio" color="rgb(255, 0, 0)" />
      </View>
      <Text style={{ fontWeight: "bold", paddingLeft: 25, paddingTop: 10 }}>
        Tocadas recentemente
      </Text>
      <ScrollView style={styles.lista}>
        <View style={styles.musica}>
          <View>
            <Text>Shut Up and Dance</Text>
            <Text>WALK THE MOON - tocando agora</Text>
          </View>
          <Text>3:19</Text>
        </View>
        <View style={styles.musica}>
          <View>
            <Text>Legendary Lovers</Text>
            <Text>Katy Perry</Text>
          </View>
          <Text>3:44</Text>
        </View>
        <View style={styles.musica}>
          <View>
            <Text>Made In Japan</Text>
            <Text> Buck Owens</Text>
          </View>
          <Text>2:45</Text>
        </View>
        <View style={styles.musica}>
          <View>
            <Text>WHERE IS MY HUSBAND!</Text>
            <Text>RAYE</Text>
          </View>
          <Text>3:17</Text>
        </View>
        <View style={styles.musica}>
          <View>
            <Text>Totalmente Seu</Text>
            <Text>Marisa Monte</Text>
          </View>
          <Text>4:19</Text>
        </View>
        <View style={styles.musica}>
          <View>
            <Text>Boulevard of Broken Dreams</Text>
            <Text>Green Day</Text>
          </View>
          <Text>4:22</Text>
        </View>
        <View style={styles.musica}>
          <View>
            <Text>Dress</Text>
            <Text>Taylor Swift</Text>
          </View>
          <Text>3:50</Text>
        </View>
        <View style={styles.musica}>
          <View>
            <Text>The First Time</Text>
            <Text>Damiano David</Text>
          </View>
          <Text>3:38</Text>
        </View>
        <View style={styles.musica}>
          <View>
            <Text>Mais Ninguém</Text>
            <Text>Banda do Mar</Text>
          </View>
          <Text>4:52</Text>
        </View>
        <View style={styles.musica}>
          <View>
            <Text>Minha Felicidade</Text>
            <Text>Roberta Campos</Text>
          </View>
          <Text>3:49</Text>
        </View>
      </ScrollView>
      <View style={styles.assinarPremium}>
        <View style={styles.premium}>
          <Text>Assine o Premium e ouça sem anúncios!</Text>
          <View style={styles.botaoPremium}>
            <Button title="Assinar agora" color="#045401" />
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
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
  botoes: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  lista: {
    width: "98%",
    marginTop: 10,
  },
  musica: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 80,
    borderRadius: 12,
    backgroundColor: "#f0f2f5",
    marginLeft: 8,
    padding: 10,
  },
  assinarPremium: {
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  premium: {
    borderWidth: 1,
    alignItems: "center",
    borderColor: "#ccc9c9",
    borderRadius: 12,
    padding: 20,
    width: "90%",
  },
  botaoPremium: {
    width: 150,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
