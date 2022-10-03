import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  RefreshControl,
} from "react-native";
import Radio from "../../Components/RadioComponent";
import Question from "../../Components/question";
const Raidioform = () => {
  const [Q1, SetQ1] = useState("");
  const [Q2, SetQ2] = useState("");
  const [Q3, SetQ3] = useState("");
  const [refreshing, setRefresh] = useState(false);
  const onRefresh = () => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    }, 2000);
  };
  return (
    <View style={styles.view}>
      <StatusBar barStyle="auto" />

      <View style={styles.content}>
        <TouchableOpacity
          style={styles.press}
          onPress={() => {
            console.log("press");
          }}
        >
          <Text style={styles.txt}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.txt2}>Form</Text>
      </View>
      <View style={styles.lineSparetor}></View>

      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing} //status of refresh, in the first refresh off(false)
            onRefresh={onRefresh} //on refresh call function
          />
        }
      >
        <KeyboardAvoidingView>
          <>
            <View style={{ marginBottom: 24 }}>
              <Text style={styles.innerTxt}>
                Fill out this symptom form {"\n"}so that the doctor can help you
                faster
              </Text>
            </View>
            <Radio title="Are you the patient?" />
            <Radio title="Do you have a headache?" />
            <Radio title="Do you have a stomachache?" />
            <Radio title="Are you dizzy?" />
            <Question
              title="How old is the patient?"
              value={Q1}
              onChange={(value) => {
                SetQ1(value);
              }}
            />
            <Question
              title="What other symptoms do you have?"
              value={Q2}
              onChange={SetQ2}
            />
            <Question
              title="Do you have any comments?"
              value={Q3}
              onChange={SetQ3}
            />
            <View style={styles.viewbut}>
              <TouchableOpacity
                style={styles.but}
                onPress={() => {
                  console.log(`Q1 : ${Q1}, Q2  : ${Q2}, Q3 : ${Q3}.`);
                }}
              >
                <Text style={styles.textbut}>Check</Text>
              </TouchableOpacity>
            </View>
          </>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    // backgroundColor: "blue",
  },
  content: {
    flexDirection: "row",
    height: 110,
    // backgroundColor: "red",
  },
  txt: {
    // backgroundColor: "yellow",
    color: "#007AFF",
    marginTop: 22,
    marginLeft: 16,
  },
  press: {
    width: 127,
    height: 44,
    marginTop: 60,
    flex: 0.45,
    // backgroundColor: "pink",
  },
  txt2: {
    // backgroundColor: "green",
    marginTop: 82,
    flex: 0.55,
    fontSize: 16,
  },
  lineSparetor: {
    borderWidth: 1,
    borderTopColor: "white",
    borderBottomColor: "#C6C6C6",
  },
  innerTxt: {
    // backgroundColor: "blue",
    fontSize: 16,
    marginLeft: 46,
    marginRight: 48,
    marginTop: 22,
  },
  viewbut: {
    marginTop: 39,
    alignItems: "center",
    marginBottom: 67,
  },
  but: {
    borderWidth: 1,
    borderColor: "#3C67AF",
    borderRadius: 12,
    backgroundColor: "#3C67AF",
    height: 44,
    width: 151,
  },
  textbut: {
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 10,
  },
});
export default Raidioform;
