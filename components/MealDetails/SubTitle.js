import React from "react";
import { Text, View, StyleSheet } from "react-native";

function SubTitle(props) {
  return (
    <View style={styles.subTileContainer}>
      <Text style={styles.subTitle}>{props.children}</Text>
    </View>
  );
}

export default SubTitle;

const styles = StyleSheet.create({
  subTitle: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
    padding: 6,
  },
  subTileContainer: {
    marginHorizontal: 6,
    // marginVertical: 16,
    padding: 6,
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },
});
