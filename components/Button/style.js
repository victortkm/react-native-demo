import { StyleSheet } from "react-native";
import styles, { FontSize, Colors } from "../../styles";

const style = StyleSheet.create({
  button: {
    backgroundColor: Colors.grey2,
    padding: 15,
    borderRadius: 15,
  },
  text: {
    fontSize: FontSize.size20,
    // fontFamily: this.FontStyle.bold,
    color: Colors.black,
  }
});

export default style;
