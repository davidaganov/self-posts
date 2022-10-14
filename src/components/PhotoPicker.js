import { useState } from "react"
import { View, StyleSheet, Image, Button, Alert } from "react-native"
import * as ImagePicker from "expo-image-picker"

export const PhotoPicker = ({ onPick }) => {
  const [image, setImage] = useState(null)

  const takePhoto = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: false,
        aspect: [16, 9],
        quality: 0.7
      })

      // const result = await ImagePicker.launchCameraAsync({
      //   quality: 0.7,
      //   allowsEditing: false,
      //   aspect: [16, 9]
      // })

      if (!result.cancelled) {
        setImage(result.uri)
        onPick(result.uri)
      }
    } catch (error) {
      Alert.alert("Error", "You didn't give access to the media")
    }
  }

  return (
    <View style={styles.wrapper}>
      <Button
        title="Take a photo"
        onPress={takePhoto}
      />
      {image && (
        <Image
          style={styles.image}
          source={{ uri: image }}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10
  },
  image: {
    width: "100%",
    height: 200,
    marginTop: 10
  }
})
