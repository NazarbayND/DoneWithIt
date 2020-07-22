import React from "react";
import { View, Text } from "react-native";

import Card from "../components/Card";

export default function CardScreen() {
  return (
    <View
      style={{
        backgroundColor: "#f8f4f4",
        padding: 20,
        paddingTop: 100,
      }}
    >
      <Card
        title="Red Jacket for sale"
        subTitle="$100"
        image={require("../assets/card1.jpg")}
      />
    </View>
  );
}
