import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeView from "../view/HomeView/index.js";
import ProfileView from "../view/ProfileView/index.js";
import SettingsView from '../view/SettingsView/index.js'
import Constants from '../util/Constants'

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={Constants.Drawer.initialRoute}
      >
      <Drawer.Screen name={Constants.Drawer.initialRoute} component={HomeView}/>
      <Drawer.Screen name={Constants.Drawer.Profile} component={ProfileView} />
      <Drawer.Screen name={Constants.Drawer.Settings} component={SettingsView} />
    </Drawer.Navigator>
  );
}
