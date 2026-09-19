import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Pressable, FlatList, TextInput } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Stack } from "expo-router";
export default function Inicio() {
    let [contador, setContador]  = useState(0);
   return (
       
      <SafeAreaView style={styles.container}>
        <Stack.Screen options={{ title: "Contador" }} />
        <View style={styles.contar}>
            <View style={styles.contadorItens}>
                <View style={styles.botoes}>
            <Button title="-" onPress={() => {
                setContador(contador - 1);
            }}/>
            </View>
            <Text style={{fontSize:30}}>{contador}</Text>
             <View style={styles.botoes}>
            <Button title="+" onPress={() => {
                setContador(contador +1);
            }}/>
            </View>
            </View> 
        </View>
        <StatusBar style="auto" />
    </SafeAreaView>
   );
}
const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contar: {
    alignItems:"center",
  },
  contadorItens:{
    flexDirection:"row",
    gap:20,
  },
  botoes: {
    height:100,
    width:50,
}
});
