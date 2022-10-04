import React from "react";
import {
  StyleSheet,
  View,
  Button,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import TextField from "../../Components/TextField";
import { Formik } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("InValid Email").required("Require"),
  password: Yup.string()
    .matches(/\w*[a-z]\w*/, "Password must have a small letter")
    .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
    .matches(/\d/, "Password must have a number")
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      "Password must have a special character"
    )
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
});
const onPressKeyboard = () => {
  Keyboard.dismiss();
};
const LoginForm = () => {
  return (
    <TouchableWithoutFeedback onPress={onPressKeyboard}>
      {/* onPressKeyboard referunce to the function onPress it run the function */}
      <View style={styles.container}>
        <Formik
          initialValues={{ email: "", password: "" }} //different field of form and initial value for this
          onSubmit={(values, { ...rest }) => {
            setTimeout(() => {
              rest.setSubmitting(false);
              rest.resetForm();
            }, 2000);
            console.log(values);
          }} //run on submit form =>values represent to the different value in side the different filed
          validationSchema={SignupSchema}
        >
          {(
            {
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              isSubmitting,
            } //function return some jsx code the function props provide automatically by formik
          ) => (
            <View>
              <TextField
                isSecureTextEntry={false}
                title={"Email"}
                placeHolder="Ahmed@hotmail.com"
                onChangval={handleChange("email")}
                value={values.email}
                onblur={handleBlur("email")}
              />
              {errors.email && touched.email && (
                <Text
                  style={{
                    color: "red",
                    marginLeft: 18,
                    marginBottom: 10,
                    marginTop: -10,
                  }}
                >
                  {errors.email}
                </Text>
              )}
              <TextField
                isSecureTextEntry={true}
                title={"Password"}
                placeHolder="*************"
                onChangval={handleChange("password")}
                value={values.password}
                onblur={handleBlur("password")}
              />
              {errors.password && touched.password && (
                <Text
                  style={{
                    color: "red",
                    marginLeft: 18,
                    marginBottom: 10,
                    marginTop: -10,
                  }}
                >
                  {errors.password}
                </Text>
              )}
              <Button
                title="Submit"
                onPress={handleSubmit}
                disabled={isSubmitting}
              />
              {/* handlesubmit run code in onsubmit */}
            </View>
          )}
        </Formik>
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
});
export default LoginForm;
