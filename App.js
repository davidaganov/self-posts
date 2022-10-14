import { Provider } from "react-redux"
import { useEffect, useState, useCallback } from "react"
import { StyleSheet, View } from "react-native"
import * as SplashScreen from "expo-splash-screen"
import * as Font from "expo-font"

import Navigation from "./src/navigation/Navigation"
import store from "./src/store"
import { DB } from "./src/db"

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "opensans-regular": require("./assets/fonts/OpenSans-Regular.ttf"),
          "opensans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
        })
        await DB.init()
        console.log("Database started...")
      } catch (e) {
        console.warn(e)
      } finally {
        setIsReady(true)
      }
    }

    prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync()
    }
  }, [isReady])

  if (!isReady) {
    return null
  }

  return (
    <Provider store={store}>
      <View
        style={styles.wrapper}
        onLayout={onLayoutRootView}
      >
        <Navigation />
      </View>
    </Provider>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  }
})
