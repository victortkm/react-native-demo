import { StyleSheet } from "react-native";
import styles, { FontSize, Colors } from "../../styles";

const style = StyleSheet.create({
  button: {
    backgroundColor: Colors.lightblue,
    padding: 20,
    borderRadius: 15,
  },
  text: {
    fontSize: 30,
    // fontFamily: this.FontStyle.bold,
    color: Colors.white,
  }
});

export default style;
