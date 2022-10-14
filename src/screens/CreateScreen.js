import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native"
import { HeaderButtons, Item } from "react-navigation-header-buttons"

import { HeaderIcon } from "../components/HeaderIcon"
import { addPost } from "../store/actions/post"
import { THEME } from "../theme"
import { PhotoPicker } from "../components/PhotoPicker"

export const CreateScreen = ({ navigation: { setOptions, navigate, toggleDrawer } }) => {
  useEffect(() => {
    setOptions({
      headerTitle: "Create post",
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

  const [text, setText] = useState("")
  const [img, setImage] = useState("")
  const dispatch = useDispatch()

  const saveHandler = () => {
    const post = {
      date: new Date().toJSON(),
      img,
      text,
      booked: false
    }
    dispatch(addPost(post))
    navigate("Home")
  }

  const photoPickHandler = (uri) => {
    setImage(uri)
  }

  return (
    <ScrollView style={styles.wrapper}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View>
          <Text style={styles.title}>Create a new post</Text>
          <TextInput
            placeholder="Enter the text of the post"
            style={styles.textarea}
            value={text}
            multiline
            onChangeText={setText}
          />
          <PhotoPicker onPick={photoPickHandler} />
          <Button
            title="Create post"
            color={THEME.MAIN_COLOR}
            onPress={saveHandler}
            disabled={!text || !img}
          />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "opensans-regular",
    marginVertical: 10
  },
  textarea: {
    padding: 10,
    marginBottom: 10
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 15
  }
})
