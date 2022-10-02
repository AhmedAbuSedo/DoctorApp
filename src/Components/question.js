import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

const Question = ({ title, value, onChange }) => {
  return (
    <View style={styles.contianer}>
      <Text>{title}</Text>
      <TextInput style={styles.input} value={value} onChangeText={onChange} />
    </View>
  );
};
const styles = StyleSheet.create({
  contianer: {
    marginBottom: 21,
    marginLeft: 46,
    marginRight: 47,
  },
  input: {
    marginTop: 15,
    borderWidth: 1,
    borderColor: "#C6C6C6",
    height: 50,
    borderRadius: 12,
    paddingLeft: 5,
  },
});
export default Question;
