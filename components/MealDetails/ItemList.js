import React from "react";
import { View, Text, StyleSheet } from "react-native";
function ItemList(props) {
  // console.log(props.data)
  return props.data.map((item) => (
    <View style={styles.listItem} key={Math.random()}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  ));
}

export default ItemList;

const styles = StyleSheet.create({
  listItem: {
    padding: 5,
    borderRadius: 6,
    // marginVertical:4,
    // marginHorizontal:12,
  },
  itemText: {
    color: "grey",
    textAlign: "center",
    // backgroundColor: "#efd9d9",
  },
});
