import { useEffect } from "react"
import { View, StyleSheet, ActivityIndicator } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { HeaderButtons, Item } from "react-navigation-header-buttons"

import { HeaderIcon } from "../components/HeaderIcon"
import { PostList } from "../components/PostList"
import { loadPosts } from "../store/actions/post"
import { THEME } from "../theme"

export const HomeScreen = ({ navigation: { navigate, setOptions, toggleDrawer } }) => {
  useEffect(() => {
    setOptions({
      headerTitle: "My Blog",
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={HeaderIcon}>
          <Item
            title="Toggle Drawer"
            iconName="ios-menu"
            onPress={() => toggleDrawer()}
          />
        </HeaderButtons>
      ),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderIcon}>
          <Item
            title="Take photo"
            iconName="ios-camera"
            onPress={() => navigate("CreatePage")}
          />
        </HeaderButtons>
      )
    })
  }, [])

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadPosts())
  }, [dispatch])

  const posts = useSelector((state) => state.post.allPosts)
  const loading = useSelector((state) => state.post.loading)

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator color={THEME.MAIN_COLOR} />
      </View>
    )
  }

  openPost = ({ id, date }) => navigate("Post", { id, date })

  return (
    <PostList
      data={posts}
      openPost={openPost}
    />
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})
