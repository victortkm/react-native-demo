import { Component } from "react";
import { Shadow } from "react-native-shadow-2";
import { TouchableOpacity, Text } from "react-native";
import styles from "./style";

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
      </Shadow>
    );
  }
}
