import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { HeaderButtons, Item } from "react-navigation-header-buttons"

import { HeaderIcon } from "../components/HeaderIcon"
import { PostList } from "../components/PostList"
import { loadPosts } from "../store/actions/post"

export const BookedScreen = ({ navigation: { navigate, setOptions, toggleDrawer } }) => {
  useEffect(() => {
    setOptions({
      headerTitle: "Favorite",
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={HeaderIcon}>
          <Item
            title="Toggle Drawer"
            iconName="ios-menu"
            onPress={() => toggleDrawer()}
          />
        </HeaderButtons>
      )
    })
  }, [])

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadPosts())
  }, [dispatch])

  const posts = useSelector((state) => state.post.bookedPosts)

  openPost = ({ id, date }) => navigate("Post", { id, date })

  return (
    <PostList
      data={posts}
      openPost={openPost}
    />
  )
}
