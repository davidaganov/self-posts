import "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer"

import { AboutStackScreen, CreateStackScreen } from "./Pages"
import { BottomTabNavigator } from "./BottomTab"
import { THEME } from "../theme"

const options = (route) => {
  let title

  switch (route.name) {
    case "HomePage":
      title = "Home"
      break
    case "AboutPage":
      title = "About"
      break
    case "CreatePage":
      title = "Create post"
      break
  }

  return {
    headerShown: false,
    drawerActiveTintColor: THEME.MAIN_COLOR,
    drawerLabel: title,
    drawerLabelStyle: {
      fontFamily: "opensans-regular"
    }
  }
}

const Drawer = createDrawerNavigator()

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={({ route }) => options(route)}>
        <Drawer.Screen
          name="HomePage"
          component={BottomTabNavigator}
        />
        <Drawer.Screen
          name="AboutPage"
          component={AboutStackScreen}
        />
        <Drawer.Screen
          name="CreatePage"
          component={CreateStackScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
