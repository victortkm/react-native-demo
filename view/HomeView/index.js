import { Component } from "react"
import { Button, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar'

export default class HomeView extends Component{
  
  constructor(props){
    console.log(props)
    super(props);
    this.state = {

    }
  }

  onClick = () => {
    this.props.navigation.navigate('Profile')
  }

  render(){
    return(
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! lmao ok</Text>
      <StatusBar style="auto" />
      <Button title="Hi" onPress={() => this.onClick()}/>
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
});