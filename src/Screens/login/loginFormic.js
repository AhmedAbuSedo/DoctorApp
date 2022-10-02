import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("InValid Email").required("Require"),
});
const LoginForm = () => {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={SignupSchema}
      >
        {({ handerChange, handleBlur, handleSubmit, values }) => <View></View>}
      </Formik>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default LoginForm;
