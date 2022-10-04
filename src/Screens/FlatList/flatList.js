import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  FlatList,
  Modal,
  ScrollView,
  Alert,
  useWindowDimensions,
  Platform,
} from "react-native";
// import { Modal } from "react-native-modal";
export default function Flat() {
  const { height, width } = useWindowDimensions();
  const mocklist = [
    { id: 1, title: "Ahmed" },
    { id: 2, title: "Ahmed" },
    { id: 3, title: "Ahmed" },
    { id: 4, title: "Ali" },
    { id: 5, title: "Ahmed" },
    { id: 6, title: "Ahmed" },
    { id: 7, title: "Ahmed" },
    { id: 8, title: "Ahmed" },
    { id: 9, title: "Ahmed" },
    { id: 10, title: "Ahmed" },
    { id: 11, title: "Ahmed" },
    { id: 12, title: "Ahmed" },
    { id: 13, title: "Ahmed" },
    { id: 14, title: "Ahmed" },
    { id: 15, title: "Ahmed" },
    { id: 16, title: "Ahmed" },
    { id: 17, title: "Ahmed" },
    { id: 18, title: "Ahmed" },
    { id: 19, title: "Ahmed" },
    { id: 20, title: "Ahmed" },
  ];
  const [modalOpen, setModalOpen] = useState(false);
  const [notfication, setnotfication] = useState(false);
  const ScrollHeader = () => {
    return (
      <ScrollView>
        <StatusBar style="auto" />
        <Modal
          visible={notfication}
          animationType="fade"
          transparent={true}
          onRequestClose={() => {
            Alert.alert("Modal Close...");
            setnotfication(!notfication);
          }}
        >
          <View
            style={[
              styles.modalViewNotofication,
              {
                width: 150,
                height: 150,
                justifyContent: "center",
                alignSelf: "center",
                marginTop: 250,
              },
            ]}
          >
            <TouchableOpacity
              onPress={() => {
                setnotfication(false);
              }}
            >
              <Text
                style={[
                  styles.modaltxt,
                  { width: width * 0.18, height: height * 0.06 },
                ]}
              >
                Close
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Modal
          visible={modalOpen}
          animationType="slide"
          transparent={true}
          onRequestClose={() => {
            Alert.alert("Modal Close...");
            setModalOpen(!modalOpen);
          }}
        >
          <View
            style={[
              styles.modalView,
              {
                width: 150,
                height: 150,
                justifyContent: "center",
                alignSelf: "center",
                marginTop: 250,
              },
            ]}
          >
            <TouchableOpacity
              onPress={() => {
                setModalOpen(false);
              }}
            >
              <Text
                style={[
                  styles.modaltxt,
                  { width: width * 0.18, height: height * 0.06 },
                ]}
              >
                Done
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <View style={[styles.cont, width, height]}>
          <Image
            style={styles.img}
            source={require("../../../assets/back.jpg")}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: width * 0.75,
              marginTop: 20,
              marginLeft: 10,
            }}
          >
            <Text style={styles.txt}>Hi, Jan !</Text>
            <TouchableOpacity
              onPress={() => {
                setnotfication(true);
              }}
            >
              <Image
                style={styles.iconStyle}
                source={require("../../../assets/Group.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.innercontainer}>
          <Text style={styles.innertxt}>Let's start</Text>
          <Text style={styles.inner}>CONSULTATION</Text>
          <TouchableOpacity onPress={() => {}} style={styles.but}>
            <Text style={styles.buttxt}>Start</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.styledoc}>
          <Text style={styles.textStyle}>Last Documents</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.view}>View all</Text>
            <Image
              style={styles.iconviewStyle}
              source={require("../../../assets/1486348813-music-forward-front-next-arrow-blue_80474.png")}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  };
  return (
    <View style={{ width, height }}>
      <FlatList
        // numColumns={2}
        onEndReached={() => {
          mocklist.push({ id: 1, title: "alaa" });
        }}
        ListHeaderComponent={<ScrollHeader />}
        style={styles.flatliststyle}
        ListFooterComponent={
          <View>
            <Text style={styles.footertxt}>Thank You</Text>
          </View>
        }
        data={mocklist}
        keyExtractor={(item) => {
          item.id;
        }}
        renderItem={({ item }) => {
          return (
            item.title !== "Ali" && (
              <TouchableOpacity
                style={[styles.viewlist, { width: width * 0.9 }]}
                onPress={() => {
                  setModalOpen(true);
                }}
              >
                <Image
                  style={styles.iconlistleft}
                  source={require("../../../assets/document.png")}
                />
                <Text>{item.title}</Text>
                <Image
                  style={styles.iconlist}
                  source={require("../../../assets/download.png")}
                />
              </TouchableOpacity>
            )
          );
        }}
      />

      <View
        style={[
          styles.footerveiw,
          {
            height: height * 0.11,
            marginBottom: -35,
            justifyContent: "space-around",
          },
        ]}
      >
        <TouchableOpacity>
          <Image
            style={styles.footericon}
            source={require("../../../assets/Group45.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.footericon}
            source={require("../../../assets/Group165.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.footericon}
            source={require("../../../assets/fluent_document-text-24-filled.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.footericon}
            source={require("../../../assets/Group166.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  innercontainer: {
    marginTop: 35,
    flexDirection: "column",
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
    width: 350,
    marginLeft: 22,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 20,
  },
  footertxt: {
    textAlign: "center",
    margin: 25,
  },
  modalView: {
    backgroundColor: "#a8dadc",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  modalViewNotofication: {
    backgroundColor: "#a8dadc",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  flatliststyle: {
    height: 720,
  },
  modaltxt: {
    borderWidth: 1,
    borderRadius: 22,
    textAlign: "center",

    backgroundColor: "#22577a59",
  },
  footericon: {
    width: 35,
    height: 35,
    // margin: 20,
    // marginHorizontal: 30,
    marginVertical: 20,
  },
  footerveiw: {
    backgroundColor: "black",
    flexDirection: "row",
  },
  viewlist: {
    alignItems: "center",
    justifyContent: "center",
    // flex: 1,
    marginTop: 12,
    marginLeft: 20,
    borderWidth: 1,
    borderRadius: 20,

    height: 50,
    textAlign: "center",
    flexDirection: "row",
  },
  view: {
    fontSize: 20,
    fontFamily: "Roboto",
    marginTop: 5,
    marginLeft: 65,
  },
  textStyle: {
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Roboto",
    marginLeft: 10,
  },
  styledoc: {
    flexDirection: "row",
    marginTop: 40,
    justifyContent: "space-between",
  },
  txt: {
    // marginTop: 25,
    // marginLeft: 15,
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
  buttxt: {
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Roboto",
    margin: 10,
    textAlign: "center",
  },
  inner: {
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Roboto",
    textAlign: "center",
  },
  innertxt: {
    marginTop: 15,
    marginLeft: 15,
    fontSize: 25,
    // fontWeight: "bold",
    fontFamily: "Roboto",
  },
  cont: {
    flexDirection: "row",
    marginTop: 65,
  },
  img: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderRadius: 50,
    marginTop: 15,
    marginLeft: 15,
  },
  iconStyle: {
    width: 35,
    height: 35,
    // marginLeft: 140,
    // marginTop: 15,
  },
  iconviewStyle: {
    width: 35,
    height: 35,
    marginLeft: 140,
    marginTop: -30,
  },
  iconlist: {
    width: 25,
    height: 25,
    marginLeft: 160,
  },
  iconlistleft: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
  but: {
    marginTop: 20,
    marginBottom: 10,
    justifyContent: "center",
    backgroundColor: "#22577a",
    borderWidth: 1,
    borderRadius: 20,
    width: 200,
  },
});
