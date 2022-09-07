import { StyleSheet } from "react-native";
import { Colors, FontSize } from "../index";

export default blue = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000569',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: Colors.lightgrayblue,
    padding: 15,
    borderRadius: 15,
  },
  text: {
    fontSize: FontSize.size20,
    // fontFamily: this.FontStyle.bold,
    color: Colors.white,
  },
  input: {
    backgroundColor: Colors.lightgrey,
    padding: 20,
    borderRadius: 15,
    fontSize: FontSize.size20,
    color: Colors.white
  },
});

export const header = { 
  headerStyle: {
    backgroundColor: Colors.darkgrayblue,
  },
  headerTintColor: Colors.white
}