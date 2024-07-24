import React from "react";
import { View, Pressable, StyleSheet, Text, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function CategoryGridTile({ id,title, color,onPressNavigation }) {
  return (
    <View style={[styles.gridItem]}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.iOSElevation : null,
        ]}
        android_ripple={{ color: "grey" }}
        onPress={onPressNavigation}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          {/* <Ionicons name="menu-sharp" size={24} color="black" /> */}
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 10,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    // padding:15,
    // borderWidth:1,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    backgroundColor: "white",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  iOSElevation: {
    opacity: 0.5,
  },
  button: {
    flex: 1,
  },
  title: {
    // fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
  innerContainer: {
    flex: 1,
    // alignItems: "baseline",
    justifyContent: "flex-end",
    padding: 16,
    borderRadius: 8,
  },
});
