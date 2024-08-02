import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function MealMetaData({ duration, complexity, affordability }) {
  // console.log(duration, complexity, affordability);
  return (
    // <View>
    //     <Text>{duration}</Text>
    //     <Text>{affordability}</Text>
    //     <Text>{complexity}</Text>
    // </View>
    <View style={styles.metaData}>
      <View style={styles.subMetaData}>
        <Ionicons name="time" size={24} color="black" />
        <Text>{duration} mins</Text>
      </View>
      <View style={styles.subMetaData}>
        <Ionicons name="information-circle" size={24} color="black" />
        <Text>{complexity.toUpperCase()}</Text>
      </View>
      <View style={styles.subMetaData}>
        <Ionicons name="pricetag" size={24} color="black" />
        <Text>{affordability.toUpperCase()}</Text>
      </View>
    </View>
  );
}

export default MealMetaData;
const styles = StyleSheet.create({
  metaData: {
    // flex: 1,
    flexDirection: "row",
    alignContent: "center",
    padding: 16,
    justifyContent: "center",
  },
  subMetaData: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 5,
  },
});
