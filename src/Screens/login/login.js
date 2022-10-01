import React from "react";
import { View, StyleSheet, Text } from "react-native";
import TextField from "../../Components/TextField";

const Login = () => {
  return (
    <View style={styles.container}>
      <TextField
        title={"Email"}
        placeHolder={"janboon@gmail.com"}
        isSecureTextEntry={false}
      />
      <TextField
        title={"Pssword"}
        placeHolder={"******************"}
        isSecureTextEntry={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Login;
