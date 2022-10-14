import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { View, Text, StyleSheet, Image, Button, ScrollView, Alert } from "react-native"
import { HeaderButtons, Item } from "react-navigation-header-buttons"

import { THEME } from "../theme"
import { HeaderIcon } from "../components/HeaderIcon"
import { removePost, toggleBooked } from "../store/actions/post"

export const PostScreen = ({ navigation: { navigate, setOptions }, route: { params } }) => {
  const { id, date } = params
  const post = useSelector((state) => state.post.allPosts.find((p) => p.id === id))
  const { text, img, booked } = post
  const iconName = booked ? "ios-star" : "ios-star-outline"
  const dispatch = useDispatch()

  const toggleHandler = () => {
    dispatch(toggleBooked(post))
  }

  useEffect(() => {
    setOptions({
      title: `Post from ${new Date(date).toLocaleDateString()}`,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderIcon}>
          <Item
            title="Take photo"
            iconName={iconName}
            onPress={() => toggleHandler()}
          />
        </HeaderButtons>
      )
    })
  }, [toggleHandler])

  const removeHandler = () => {
    Alert.alert(
      "Deleting a post",
      "Are you sure you want to delete the post?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress() {
            navigate("Home")
            dispatch(removePost(id))
          }
        }
      ],
      { cancelable: false }
    )
  }

  return (
    <ScrollView>
      <Image
        source={{ uri: img }}
        style={styles.image}
      />
      <View style={styles.textWrap}>
        <Text style={styles.title}>{text}</Text>
      </View>
      <Button
        title="Delete"
        color={THEME.DANGER_COLOR}
        onPress={removeHandler}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200
  },
  textWrap: {
    padding: 10
  },
  title: {
    fontFamily: "opensans-regular"
  }
})
