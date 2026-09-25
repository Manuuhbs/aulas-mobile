import { TextInput, StyleSheet } from "react-native";
export function Input({ ...rest }) {
  return <TextInput style={styles.input} {...rest} />;
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: "90%",
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#DCDCDC",
    fontSize: 12,
  },
});
