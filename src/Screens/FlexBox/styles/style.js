import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
  },
  block1: {
    flex: 0.1,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  innerOneBlock1: {
    flex: 0.6,
  },
  innerTowBlock1: {
    flex: 1,
  },
  block1Txt: {
    color: "#007AFF",
  },
  block2: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  block3: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 22,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  block4: {
    flex: 1,
  },
  // itemsBetween: {
  //   flexDirection: "column",
  //   justifyContent: "space-around",
  // },
  block5: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  listtxt: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#F0F0F0",
    backgroundColor: "#F0F0F0",
    color: "#007AFF",
    textAlign: "center",
  },
  title: {
    fontSize: 22,
    fontFamily: "Roboto",
    fontWeight: "Medium",
  },
  block6: {
    flexDirection: "row",
    backgroundColor: "black",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default styles;
