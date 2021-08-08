import React, { useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { db } from "../firebase";

function AddChatScreen({ navigation }) {
  const [input, setInput] = useState("");

  const createChat = async () => {
    await db
      .collection("chats")
      .add({
        chatName: input,
      })
      .then(() => {
        navigation.goBack();
      })
      .catch((error) => alert(error.message));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a new chat",
      headerBackTitle: "Chats",
    });
  }, []);

  return (
    <View style={styles.container}>
      <Input
        value={input}
        onChangeText={(text) => setInput(text)}
        onSubmitEditing={createChat}
        placeholder="Enter a chat name"
        leftIcon={
          <Icon name="wechat" type="AntDesign" size={24} color="black" />
        }
      />
      <Button disabled={!input} onPress={createChat} title="Create new Chat" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 30,
    height: "100%",
  },
});

export default AddChatScreen;
