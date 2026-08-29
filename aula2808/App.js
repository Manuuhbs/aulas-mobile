import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.secaoUm}>
        <Text>Lajeado, RS</Text>
        <Text>Ter 28/08</Text>
      </View>
      <View style={styles.secaoDois}>
        <View style={styles.temperatura}>
        <Text style={{fontSize:50, color:'#14522f',}}>18°</Text>
        <Text>Chuvoso</Text>
        <View style={styles.maximaMinima}>
          <Text style={styles.fonte}>Max 20º</Text>
          <Text style={styles.fonte}>Min 16º</Text>
        </View>
        </View>
      </View>
      <View style={styles.caixaSemana}>
        <View style={styles.textoDias}>
        <Text>Próximos dias</Text>
        </View>
        <View style={styles.semana}>
          <View style={styles.dias}>
            <Text style={styles.fonte}>Qua</Text>
            <View style={styles.caixinha}></View>
            <Text style={styles.fonte}>22º</Text>
          </View>
          <View style={styles.dias}>
            <Text style={styles.fonte}>Qui</Text>
            <View style={styles.caixinha}></View>
             <Text style={styles.fonte}>19º</Text>
          </View>
          <View style={styles.dias}>
            <Text style={styles.fonte}>Sex</Text>
            <View style={styles.caixinha}></View>
             <Text style={styles.fonte}>20º</Text>
          </View>
          <View style={styles.dias}>
            <Text style={styles.fonte}>Sab</Text>
            <View style={styles.caixinha}></View>
             <Text style={styles.fonte}>27º</Text>
          </View>
          <View style={styles.dias}>
            <Text style={styles.fonte}>Dom</Text>
            <View style={styles.caixinha}></View>
             <Text style={styles.fonte}>18º</Text>
          </View>
        </View>
      </View>
      <View style={styles.caixaAlerta}>
        <View style={styles.caixaAlertaTexto}>
          <Text style={{color:'#459690', fontWeight:'bold',}}>Alerta</Text>
          <Text style={{color:'#459690',}}>Possibilidade de chuva forte após as 18h.</Text>
        </View>

      </View>
      <View style={styles.invisivel}></View>
       <Button
        title="VER SEMANA COMPLETA"
        color="#001d45"
        />
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
    marginTop:50,
    margin:10,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  secaoDois:{
  height:200,
  width:365,
  backgroundColor:'#c5fccd',
  borderRadius:30,
  margin:10,
  alignItems:'center',
  justifyContent:'center',
},
  temperatura:{
  height:150,
  width:150,
  borderRadius:20,
  alignItems:'center',
  paddingTop:10,
  },
  maximaMinima:{
    paddingTop:10,
    flexDirection:'row',
    gap:5,
  },
  caixaSemana:{
  height:150,
  },
  textoDias:{
    paddingTop:10,
    paddingLeft:10,
  },
  semana:{
    height:100,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    gap:10,
  },
  dias:{
  flexDirection:'column',
  height:70,
  width:50,
  marginLeft:10,
  alignItems:'center',
  },
  fonte:{
  fontSize:12,
  },
  caixinha:{
    height:25,
    width:25,
    backgroundColor:'#befac0',
    borderRadius:5,
  },
  caixaAlerta:{
    height:70,
    width:370,
    backgroundColor:'#befac0',
    borderRadius:10,
    marginLeft:7,
    flexDirection:'row',
  },
  caixaAlertaTexto:{
    flexDirection:'column',
    margin:10,
  },
  semanaCompleta:{
    height:30,
    width:370,
    marginLeft:5,
    backgroundColor:'#001d45',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
  },
  invisivel:{
    flex:1,
  }
});
