import { useEffect } from "react"
import { View, Text, StyleSheet } from "react-native"
import { HeaderButtons, Item } from "react-navigation-header-buttons"

import { HeaderIcon } from "../components/HeaderIcon"

export const AboutScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: "About the app",
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={HeaderIcon}>
          <Item
            title="Toggle Drawer"
            iconName="ios-menu"
            onPress={() => navigation.toggleDrawer()}
          />
        </HeaderButtons>
      )
    })
  }, [])

  return (
    <View style={styles.center}>
      <Text>Application for personal notes</Text>
      <Text>
        Application Version:
        <Text style={styles.version}> 1.0.0</Text>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  version: {
    fontFamily: "opensans-bold"
  }
})
