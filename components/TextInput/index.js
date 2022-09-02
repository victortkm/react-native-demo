import { Component } from "react"
import { Shadow } from 'react-native-shadow-2';
import { TextInput } from "react-native";
import styles from "./style";

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    
    const { val, shadowProps, textInputProps, textInputStyles, onChangeText } = this.props

    return (
      <Shadow
        {...shadowProps}
        offset={[0, 5]}>
        <TextInput
          {...textInputProps}
          onChangeText={onChangeText}
          style={[styles.input, {...textInputStyles}]}
          value={val}
          keyboardType="numeric"
        />
      </Shadow>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   input: {
//     backgroundColor: "white",
//     padding: 20,
//     borderRadius: 15,
//   },
// });
