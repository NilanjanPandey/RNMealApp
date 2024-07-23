import React from "react";
import { View, Pressable, StyleSheet, Text, Platform } from "react-native";

function CategoryGridTile({ title, color }) {
  return (
    <View style={[styles.gridItem]}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.iOSElevation : null,
        ]}
        android_ripple={{ color: "grey" }}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
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
    fontWeight: "bold",
    fontSize: 18,
  },
  innerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    borderRadius: 8,
  },
});
