import { Component } from "react"
import { Text, View } from 'react-native';
import { Button, TextInput } from "../../components";
import { StatusBar } from 'expo-status-bar'
import { connect } from 'react-redux'
import { increment, decrement, incrementByAmount, changeTheme } from '../../redux/settings'
import { themes } from "../../styles/themes";
import Constants from "../../util/Constants";

class HomeView extends Component{
  
  constructor(props){
    console.log(props)
    super(props);
    this.state = {
      textinput: ''
    }
  }

  componentDidUpdate = () => {
    // const { theme } = this.props;

    // console.log(theme, 'hihihi')
  }

  onClick = () => {
    this.props.navigation.navigate(Constants.Stack.Profile)
  }

  onLog = () => {
    this.props.increment();
  }

  onChangeTheme = () => {
    // console.log(this.props.mode)

    if(this.props.mode == 'white'){
      this.props.changeTheme('black');
    } else if(this.props.mode == 'black'){
      this.props.changeTheme('blue');
    } else {
      this.props.changeTheme('white');
    }
  }

  onChangeInput = (val) => {
    this.setState({ textinput: val })
  }

  render(){
    return(
    <View style={themes[this.props.mode].container}>
      <Text>{ this.props.homeVal }</Text>
      <StatusBar style="auto" />
      <Button
        onPress={this.onChangeTheme}
        title="Change Theme!"
        accessibilityLabel="Learn more about this purple button"
      />
      <Button title="Log" onPress={() => this.onLog()}/>
      <Button title="To Profile" onPress={() => this.onClick()}/>
      <TextInput
        onChangeText={(val)=>{this.onChangeInput(val)}}
        value={this.state.number}
        textInputProps={{placeholder: "placeholder", editable: true}}
        textInputStyles={{}}
      />
    </View>
    )
  }
}

function mapStateToProps(state) {
  const { settings } = state
  // console.log(settings, settings.value)
  return { 
    homeVal: settings.value,
    mode: settings.mode
  }
}

const mapDispatchToProps = {
  increment,
  decrement,
  incrementByAmount,
  changeTheme
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);