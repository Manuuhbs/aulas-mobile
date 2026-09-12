import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Stack } from "expo-router";
export default function Inicio() {
  return (
    <View style={styles.container}>
      <View style={styles.secaoUm}>
        <View style={styles.quadrado}>
        </View>
        {/* aqui faltaria uma view para os texts */}
      </View>
      {/*não possui, view para as 3 views e flex direction row*/}
      <View style={styles.secaoDois}>

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  secaoUm:{
    paddingTop: 50,
  flexDirection: 'row',
  margin:10,
  },
  quadrado:{
  backgroundColor: 'blue',
  width:50,
  height:50,
  },
  secaoDois:{

  }
});
{/**/}