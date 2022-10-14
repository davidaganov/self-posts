import { View, Text, StyleSheet, FlatList } from "react-native"
import { Post } from "./Post"

export const PostList = ({ data, openPost }) => {
  if (!data.length) {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.noItems}>There are no posts :(</Text>
      </View>
    )
  }

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={data}
        keyExtractor={(post) => post.id.toString()}
        renderItem={({ item }) => (
          <Post
            post={item}
            onOpen={openPost}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  },
  noItems: {
    fontFamily: "opensans-regular",
    textAlign: "center",
    marginVertical: 10,
    fontSize: 18
  }
})
