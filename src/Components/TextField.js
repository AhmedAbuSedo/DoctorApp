import React from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";

const TextField = ({ title, placeHolder, isSecureTextEntry }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.lable}>{title}</Text>
      <TextInput
        style={styles.txtInput}
        placeholder={placeHolder}
        secureTextEntry={isSecureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    alignSelf: "center",
    backgroundColor: "blue",
  },
  lable: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "red",
  },
  txtInput: {
    backgroundColor: "green",
  },
});
export default TextField;
