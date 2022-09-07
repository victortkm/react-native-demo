import { Component } from "react";
import { Shadow } from "react-native-shadow-2";
import { TouchableOpacity, Text } from "react-native";
import styles from "./style";
import { connect } from "react-redux";
import { themes } from "../../styles/themes";

class Btn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      shadowProps,
      buttonProps,
      buttonStyles,
      onPress,
      title,
      titleStyles,
    } = this.props;

    return (
      <Shadow {...shadowProps} offset={[0, 5]}>
        <TouchableOpacity
          onPress={onPress}
          {...buttonProps}
          style={[
            styles.button,
            { ...themes[this.props.theme].button },
            { ...buttonStyles },
          ]}
        >
          <Text
            style={[
              styles.text,
              { ...themes[this.props.theme].text },
              { ...titleStyles },
            ]}
          >
            {title}
          </Text>
        </TouchableOpacity>
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

export default connect(mapStateToProps, null)(Btn);
