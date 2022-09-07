
import { StyleSheet } from "react-native";
import { Colors, FontSize } from "../index";

export default black = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242424',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: Colors.darkgrey,
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
    backgroundColor: Colors.darkgrey,
  },
  headerTintColor: Colors.white
}