import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeperator from "../components/ListItemSeperator";
import LIstItemDeleteAction from "../components/LIstItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/nurs.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/nurs.jpg"),
  },
];

export default function MessagesScreen() {
  const [messages, SetMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    SetMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <LIstItemDeleteAction onPress={() => handleDelete(item)} />
            )}
            refreshing={refreshing}
            onRefresh={() => {
              setMessages([
                {
                  id: 2,
                  title: "T2",
                  description: "D2",
                  image: require("../assets/nurs.jpg"),
                },
              ]);
            }}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({});
