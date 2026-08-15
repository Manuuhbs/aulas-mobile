import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    
    <View style={styles.container}>
      <View style= {styles.secaoUm}>   
          <View style={styles.circulo}>
        </View>
        <View style= {styles.secaoTextos}>
        <Text style={{ fontWeight: 'bold', }}>Olá estudante!</Text>
        <Text >Bem vindo</Text>
        </View>
      </View>
      <Text style= {{fontWeight:"bold"}}>Menu</Text>
      <View style= {styles.botoes}>
        
        <Button
          title='Notas'
        />
         <Button
          title='Aulas'
          color="rgba(6, 75, 0, 0.33)"
        />
        <Button
          title='Aulas'
          color="rgba(51, 0, 75, 0.33)"
        />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4252aa',
  },
  texto: {
    color: "#00300c"
  },
  circulo:{
    width: 50,
    height: 50,
    borderRadius: 90,
    backgroundColor: "#ffffff",
  },
  secaoUm:{
    paddingTop: 50,
    flexDirection: "row",
  },
  secaoTextos:{
    flexDirection:'column',
  },
  botoes:{
    flexDirection:"row",
    width:100,
    gap: 50,
  },
});
