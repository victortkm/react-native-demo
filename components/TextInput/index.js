import { Component } from "react";
import { Shadow } from "react-native-shadow-2";
import { TextInput } from "react-native";
import styles from "./style";
import { connect } from "react-redux";
import { themes } from "../../styles/themes";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { val, shadowProps, textInputProps, textInputStyles, onChangeText } =
      this.props;

    return (
      <Shadow {...shadowProps} offset={[0, 5]}>
        <TextInput
          {...textInputProps}
          onChangeText={onChangeText}
          style={[
            styles.input,
            { ...themes[this.props.theme].input },
            { ...textInputStyles },
          ]}
          value={val}
        />
      </Shadow>
    );
  }
}

function mapStateToProps(state) {
  const { settings } = state;
  return {
    theme: settings.mode,
  };
}

export default connect(mapStateToProps, null)(Input);
