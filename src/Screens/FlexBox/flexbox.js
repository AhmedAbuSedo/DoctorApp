import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  FlatList,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import styles from "./styles/style";

export default function FlexBox() {
  const consult = [
    {
      key: 1,
      title: "Concultation 05/11/2021",
    },
    {
      key: 2,
      title: "Concultation 20/2/2022",
    },
    {
      key: 3,
      title: "Concultation 05/11/2022",
    },
    {
      key: 4,
      title: "Concultation 05/11/2022",
    },
    {
      key: 5,
      title: "Concultation 05/11/2022",
    },
    {
      key: 6,
      title: "Concultation 05/11/2022",
    },
  ];
  const { height, width } = useWindowDimensions();
  const screenonPress = () => {
    return Keyboard.dismiss();
  };
  const ListBut = () => {
    return (
      <View
        style={[
          styles.block5,
          { paddingBottom: height * 0.03, paddingTop: 0.01 * height },
        ]}
      >
        <TouchableOpacity onPress={() => {}}>
          <Text
            style={[
              styles.listtxt,
              {
                width: width * 0.25,
                height: height * 0.06,
                paddingTop: height * 0.015,
              },
            ]}
          >
            Open
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Text
            style={[
              styles.listtxt,
              {
                width: width * 0.25,
                height: height * 0.06,
                paddingTop: height * 0.015,
              },
            ]}
          >
            Edit
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Text
            style={[
              styles.listtxt,
              {
                width: width * 0.25,
                height: height * 0.06,
                paddingTop: height * 0.015,
              },
            ]}
          >
            Download
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <TouchableWithoutFeedback onPress={screenonPress}>
      <View style={[styles.container, { height, width }]}>
        <StatusBar style="auto" />
        <View
          style={[
            styles.block1,
            { marginBottom: width * 0.04, marginTop: width * 0.04 },
          ]}
        >
          <View style={[styles.innerOneBlock1, { marginLeft: width * 0.05 }]}>
            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.block1Txt}>Back</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.innerTowBlock1}>
            <Text>Documents</Text>
          </View>
        </View>
        <View style={[styles.block2, { width }]}></View>
        <View
          style={[
            styles.block3,
            {
              marginTop: width * 0.05,
              width: width * 0.95,
              height: height * 0.07,
            },
          ]}
        >
          <TouchableOpacity onPress={() => {}}>
            <Image
              style={{ width: 25, height: 25 }}
              source={require("../../../assets/bx_search.png")}
            />
          </TouchableOpacity>
          <TextInput style={{ width: width * 0.7 }} />
          <TouchableOpacity>
            <Image
              style={{ width: 25, height: 25 }}
              source={require("../../../assets/filter.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.block4}>
          <FlatList
            data={consult}
            keyExtractor={(item) => {
              item.key;
            }}
            renderItem={({ item }) => {
              return (
                <View>
                  <Text
                    style={[
                      styles.title,
                      { marginTop: width * 0.06, marginBottom: width * 0.06 },
                    ]}
                  >
                    {item.title}
                  </Text>
                  <View style={styles.itemsBetween}>
                    <View>
                      <Text>Consclusion</Text>
                      <ListBut />
                    </View>
                    <View>
                      <Text>Certificate of illness</Text>
                      <ListBut />
                    </View>
                    <View>
                      <Text>Medication prescripation</Text>
                      <ListBut />
                    </View>
                  </View>
                  <View
                    style={[
                      styles.block2,
                      { width: width * 0.9, marginTop: 0.06 * width },
                    ]}
                  ></View>
                </View>
              );
            }}
          />
        </View>
        <View style={[styles.block6, { width: width, height: height * 0.1 }]}>
          <TouchableOpacity onPress={() => {}}>
            <Image
              style={{ width: width * 0.08, height: height * 0.04 }}
              source={require("../../../assets/Group164.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Image
              style={{ width: width * 0.08, height: height * 0.04 }}
              source={require("../../../assets/Group47.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <Image
              style={{ width: width * 0.08, height: height * 0.04 }}
              source={require("../../../assets/fluent_document-text-24-filled.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Image
              style={{ width: width * 0.08, height: height * 0.04 }}
              source={require("../../../assets/Group43.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
