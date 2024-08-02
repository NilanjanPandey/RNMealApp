import React from "react";
import { View, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function MealHeaderButton(props) {
  return (
    <Pressable
      onPress={props.onPress}
      style={(pressed) => (pressed ? styles.pressed : null)}
    >
      <Ionicons name={props.icon} size={24} color={props.color} />
    </Pressable>
  );
}

export default MealHeaderButton;
const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
});
