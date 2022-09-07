import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import HomeView from "../view/HomeView/index.js";
import Drawer from './drawer'
import ProfileView from "../view/ProfileView/index.js";
import Constants from '../util/Constants'
import { useSelector } from 'react-redux'
import { headerThemes } from '../styles/themes/HeaderIndex'

const Stack = createNativeStackNavigator();

export default function StackDev() {
  const themeColor = useSelector((state) => state.settings.mode)
  console.log(themeColor, headerThemes[themeColor])
  return (
    <Stack.Navigator
      initialRouteName={"Home"}
      screenOptions={
      //   {
      //   headerStyle: {
      //     backgroundColor: "#ededed",
      //   },
      //   headerTintColor: 'red'
      // }
      headerThemes[themeColor]
    }
      >
      <Stack.Screen
        name={Constants.Stack.initialRoute} 
        component={Drawer}
        options={{title: "Welcome"}}
      />
      <Stack.Screen
        name={Constants.Stack.Profile}
        component={ProfileView}
        options={{title: "Profile"}}
        />
    </Stack.Navigator>
  );
}
