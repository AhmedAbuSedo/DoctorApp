import React, { useState } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { RadioButton } from "react-native-paper";

const Radio = ({ title }) => {
  const [cheak, setCheak] = useState(true);
  const [cheak2, setCheak2] = useState(false);
  const onPress = () => {
    if (cheak2 === true) {
      setCheak2((preCheak2) => !preCheak2);
      setCheak((preCheak) => !preCheak);
    }
  };
  const onPress2 = () => {
    if (cheak === true) {
      setCheak((preCheak) => !preCheak);
      setCheak2((preCheak2) => !preCheak2);
    }
  };
  return (
    <View style={styles.View}>
      <Text style={styles.txt}>{title}</Text>
      <View style={styles.container}>
        <Pressable style={{ flexDirection: "row" }} onPress={onPress}>
          <RadioButton
            value={false}
            color="green"
            status={cheak === true ? "checked" : "unchecked"}
            onPress={onPress}
          />
          <Text style={styles.innerTxt}>Yes</Text>
        </Pressable>
        <Pressable style={{ flexDirection: "row" }} onPress={onPress2}>
          <RadioButton
            value={false}
            color="red"
            status={cheak2 === true ? "checked" : "unchecked"}
            onPress={onPress2}
          />

          <Text style={styles.innerTxt2}>No</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  View: {
    marginLeft: 46,
    marginRight: 60.7,
    marginBottom: 20.4,
  },
  txt: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 15,
  },
  container: {
    flexDirection: "row",
  },

  innerTxt: {
    marginRight: 60.4,
    marginTop: 6,

    marginLeft: 10.7,
  },
  innerTxt2: {
    marginLeft: 10,
    marginTop: 6,
  },
});
export default Radio;
