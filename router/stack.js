import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import HomeView from "../view/HomeView/index.js";
import Drawer from './drawer'
import ProfileView from "../view/ProfileView/index.js";
import Constants from '../util/Constants'

const Stack = createNativeStackNavigator();

export default function StackDev() {
  return (
    <Stack.Navigator initialRouteName={"Home"}>
      <Stack.Screen
        name={Constants.Stack.initialRoute} 
        component={Drawer}
        options={{
          title: "Welcome",
          // headerStyle: {
          //   backgroundColor: "red",
          // },
          headerShown: false,
        //   headerTintColor: '#fff',
        //   headerTitleStyle: {
        //     fontWeight: 'bold',
        //   },
        }}
      />
      <Stack.Screen
        name={Constants.Stack.Profile}
        component={ProfileView}
        options={{
          // title: "kek",
          // headerStyle: {
          //   backgroundColor: "red",
          // },
          // headerShown: false,
        //   headerTintColor: '#fff',
        //   headerTitleStyle: {
        //     fontWeight: 'bold',
        //   },
        }}
        />
    </Stack.Navigator>
  );
}
