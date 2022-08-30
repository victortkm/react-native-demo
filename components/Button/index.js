import { Component } from "react";
import { Shadow } from "react-native-shadow-2";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default class Btn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { shadowProps, buttonProps, buttonStyles, onPress, title, titleStyles } = this.props;

    return (
      <Shadow {...shadowProps} offset={[0, 5]}>
        <TouchableOpacity
          onPress={onPress}
          {...buttonProps}
          style={[styles.button, {...buttonStyles}]}
        >        
          <Text
            style={[styles.text,{...titleStyles}]}
          >
            {title}
            </Text>
        </TouchableOpacity>
        {/* <Button
          {...buttonProps}
          onPress={onPress}
          style={[styles.input, { ...buttonStyles }]}
        /> */}
      </Shadow>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#d6f2ff",
    padding: 20,
    borderRadius: 15,
  },
  text: {
    // fontSize: 30,
    // color: 'white',
    // backgroundColor: 'white'
  }
});
