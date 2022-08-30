import { Component } from "react"
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Shadow } from 'react-native-shadow-2';
import { TextInput, Button } from "../../components";

export default class ProfileView extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      number: 'sad'
    }
  }

  onChangeNumber = (val) => {
    this.setState({ number: val })
  }

  onPress = () => {
    console.log(this.state.number)
  }

  render(){
    return(
    <View style={styles.container}>
      <Text>Profile</Text>
      <TextInput
        onChangeText={(val)=>{this.onChangeNumber(val)}}
        value={this.state.number}
        textInputProps={{placeholder: "placeholder", editable: true}}
        textInputStyles={{}}
      />
      <Button
        onPress={this.onPress}
        title="Learn More"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: 'white',
    padding: 60,
    borderRadius: 15,
  }
});