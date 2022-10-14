import { Platform } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"

import { HomeStackScreen, BookedStackScreen } from "./Pages"
import { THEME } from "../theme"

const bookedOptions = (route) => {
  return {
    headerShown: false,
    tabBarInactiveTintColor: "gray",
    tabBarLabel: route.name === "Posts" ? "All" : "Favorite",
    tabBarActiveTintColor: THEME.MAIN_COLOR,
    tabBarIcon: ({ focused, color }) => {
      const size = Platform.OS === "android" ? 20 : 25
      let iconName

      switch (route.name) {
        case "Posts":
          iconName = focused ? "ios-albums" : "ios-albums-outline"
          break
        case "Bookeds":
          iconName = focused ? "ios-star" : "ios-star-outline"
          break
      }

      return (
        <Ionicons
          name={iconName}
          size={size}
          color={color}
        />
      )
    }
  }
}

const tabStyles = {
  shifting: true,
  barStyle: { backgroundColor: THEME.MAIN_COLOR },
  tabBarActiveTintColor: THEME.MAIN_COLOR
}

const Tab =
  Platform.OS === "android" ? createMaterialBottomTabNavigator() : createBottomTabNavigator()

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      {...tabStyles}
      screenOptions={({ route }) => bookedOptions(route)}
    >
      <Tab.Screen
        name="Posts"
        component={HomeStackScreen}
      />
      <Tab.Screen
        name="Bookeds"
        component={BookedStackScreen}
      />
    </Tab.Navigator>
  )
}
