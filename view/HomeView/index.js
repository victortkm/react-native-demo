import { Component } from "react"
import { Button, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar'
import { connect, bindActionCreators  } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../../redux/settings'
class HomeView extends Component{
  
  constructor(props){
    console.log(props)
    super(props);
    this.state = {
    }
  }

  componentDidUpdate = () => {
  }

  onClick = () => {
    this.props.navigation.navigate('Profile')
  }

  onLog = () => {
    this.props.increment();
  }

  render(){
    return(
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!{ this.props.homeVal }</Text>
      <StatusBar style="auto" />
      <Button title="Log" onPress={() => this.onLog()}/>
      <Button title="Hi" onPress={() => this.onClick()}/>
    </View>
    )
  }
}

function mapStateToProps(state) {
  const { settings } = state
  console.log(settings, settings.value)
  return { homeVal: settings.value }
}

const mapDispatchToProps = {
  increment,
  decrement,
  incrementByAmount
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});