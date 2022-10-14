import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { HomeScreen } from "../screens/HomeScreen"
import { PostScreen } from "../screens/PostScreen"
import { BookedScreen } from "../screens/BookedScreen"
import { AboutScreen } from "../screens/AboutScreen"
import { CreateScreen } from "../screens/CreateScreen"
import { THEME } from "../theme"

const Page = createNativeStackNavigator()

const homeOptions = () => {
  const android = {
    headerTintColor: "#FFF",
    headerStyle: { backgroundColor: THEME.MAIN_COLOR }
  }

  const ios = {
    headerTintColor: THEME.MAIN_COLOR,
    headerStyle: { backgroundColor: "#FFF" }
  }

  const main = {}

  return Platform.OS === "android" ? { ...main, ...android } : { ...main, ...ios }
}

const PageNavigator = ({ children }) => {
  return <Page.Navigator screenOptions={() => homeOptions()}>{children}</Page.Navigator>
}

export const HomeStackScreen = () => {
  return (
    <PageNavigator>
      <Page.Screen
        name="Home"
        component={HomeScreen}
      />
      <Page.Screen
        name="Post"
        component={PostScreen}
      />
    </PageNavigator>
  )
}

export const AboutStackScreen = () => {
  return (
    <PageNavigator>
      <Page.Screen
        name="About"
        component={AboutScreen}
      />
    </PageNavigator>
  )
}

export const CreateStackScreen = () => {
  return (
    <PageNavigator>
      <Page.Screen
        name="Create"
        component={CreateScreen}
      />
    </PageNavigator>
  )
}

export const BookedStackScreen = () => {
  return (
    <PageNavigator>
      <Page.Screen
        name="Booked"
        component={BookedScreen}
      />
      <Page.Screen
        name="BookedPost"
        component={PostScreen}
      />
    </PageNavigator>
  )
}
