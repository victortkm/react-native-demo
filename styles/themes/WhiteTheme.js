
import { StyleSheet } from "react-native";
import { Colors, FontSize } from "../index";

export default white = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: Colors.lightgrey,
    padding: 15,
    borderRadius: 15,
  },
  text: {
    fontSize: FontSize.size20,
    // fontFamily: this.FontStyle.bold,
    color: Colors.black,
  },
  input: {
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 15,
    fontSize: FontSize.size20,
  },
});


export const header = {
  headerStyle: {
    backgroundColor: '#ededed',
  },
  headerTintColor: Colors.black
}