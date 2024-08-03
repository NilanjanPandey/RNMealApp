import React from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import MealMetaData from "../MealMetaData";
function MealItem(props) {
  const navigation = useNavigation();
  function pressHandler() {
    navigation.navigate("mealDetails", { mealId: props.id });
  }

  // console.log(props)
  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.iOSElevation : null)}
        onPress={pressHandler}
      >
        <View style={styles.wrapper}>
          <View>
            <Image style={styles.image} source={{ uri: props.imageUrl }} />
            <Text style={styles.title}>{props.title}</Text>
          </View>
          <MealMetaData
            duration={props.duration}
            complexity={props.complexity.toUpperCase()}
            affordability={props.affordability.toUpperCase()}
          />
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 8,
    overflow: "hidden",
  },
  container: {
    flex: 1,
    margin: 10,
    // height: 150,
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
  image: {
    width: "100%",
    height: 100,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  iOSElevation: {
    opacity: 0.5,
  },
});
