import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Touchable,
  TouchableOpacity,
} from "react-native";
import TextField from "../../Components/TextField";
import { Feather } from "@expo/vector-icons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [scure, setScure] = useState(true);
  const [validPass, setvalidPass] = useState("");
  const [validEmail, setvalidEmail] = useState("");
  const onPress = () => {
    setScure((prescure) => !prescure);
  };

  const eye = scure ? (
    <Feather name="eye-off" size={24} color="black" onPress={onPress} />
  ) : (
    <Feather name="eye" size={24} color="black" onPress={onPress} />
  );
  const pressScreen = () => {
    Keyboard.dismiss();
  };
  const isEmail = () => {
    let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (email.match(regex)) {
      setvalidEmail("");
      return true;
    } else {
      setvalidEmail("Email not valid");
      return false;
    }
  };
  const isPassword = () => {
    let regex = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9!@#$%./^&*()_+<>,~`"':;]{8,}$/;

    if (password.match(regex)) {
      setvalidPass("");
      return true;
    } else {
      setvalidPass("PassWord not valid");
      return false;
    }
  };
  const validation = () => {
    if (isEmail() && isPassword()) {
      console.log(`validation OKY`);
    } else {
      console.log(`validation Error`);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={pressScreen}>
      <View style={styles.container}>
        <Text Style={styles.head}>Login</Text>
        <TextField
          title={"Email"}
          value={email}
          onChangvalue={(value) => {
            setEmail(value);
          }}
          Type="email-address"
          placeHolder={"janboon@gmail.com"}
          isSecureTextEntry={false}
        />

        <Text style={{ color: "red" }}>{validEmail}</Text>
        <TextField
          title={"Pssword"}
          value={password}
          onChangvalue={(value) => {
            setPassword(value);
          }}
          placeHolder={"******************"}
          isSecureTextEntry={scure}
          eyes={eye}
        />
        <Text style={styles.valid}>{validPass}</Text>
        <TouchableOpacity style={styles.but} onPress={validation}>
          <Text style={styles.txt}>Login</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  head: {
    fontWeight: "bold",
    fontSize: 22,
  },
  but: {
    borderWidth: 1,
    borderColor: "#f0aaaa",
    backgroundColor: "#f0f0f0",
    width: 70,
    height: 44,
    borderRadius: 12,
  },
  txt: {
    textAlign: "center",
    marginTop: 8,
  },
  valid: {
    color: "red",
    marginBottom: 5,
  },
});
export default Login;
