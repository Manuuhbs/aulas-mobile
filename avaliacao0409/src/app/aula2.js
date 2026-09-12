import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, FlatList, TextInput } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>batata</Text>
      <Button
      title='saiba mais'
      color="FD3DB5"
      accessibilityLabel='saiba mais sobre este botão'
      ></Button>
      <Pressable><Text>ai doi</Text></Pressable>
    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
