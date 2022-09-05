import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeView from "../view/HomeView/index.js";
import ProfileView from "../view/ProfileView/index.js";
import Constants from '../util/Constants'

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name={Constants.Drawer.initialRoute} component={HomeView} options={{
          headerStyle: {
            backgroundColor: "#ededed",
          }}}/>
      <Drawer.Screen name={Constants.Drawer.Profile} component={ProfileView} />
    </Drawer.Navigator>
  );
}
