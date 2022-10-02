import React, { useState } from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";

const TextField = ({
  title,
  placeHolder,
  isSecureTextEntry,
  eyes,
  value,
  onChangvalue,
  Type,
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.lable}>{title}</Text>
      <View style={styles.txtView}>
        <TextInput
          style={styles.txtInput}
          value={value}
          keyboardType={Type || "default"}
          onChangeText={onChangvalue}
          placeholder={placeHolder}
          secureTextEntry={isSecureTextEntry}
        />
        {eyes}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "90%",
    marginHorizontal: 18,
    marginBottom: 20,
  },
  lable: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 4,
  },
  txtView: {
    paddingHorizontal: 11,
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 11,
    height: 44,
    width: 339,
    justifyContent: "space-between",
    alignItems: "center",
  },
  txtInput: {
    width: 250,
    height: 24,
  },
});
export default TextField;
