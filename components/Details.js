import React from "react";
import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../Mockdata/dummy-data";
import MealMetaData from "./MealMetaData";
import SubTitle from "./MealDetails/SubTitle";
import ItemList from "./MealDetails/ItemList";

function Details({ mealId }) {
  const selectedMeal = MEALS.find((item) => item.id === mealId);
  // console.log("selectedMeal: ",selectedMeal.duration);
  return (
    <ScrollView style={styles.mainContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>

      <MealMetaData
        complexity={selectedMeal.complexity}
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
      />
      <View style={styles.outerContainer}>
        <SubTitle>Ingredients</SubTitle>
        <ItemList data={selectedMeal.ingredients} />
        {/* {selectedMeal.ingredients.map((ing) => (
        <Text key={ing}>{ing}</Text>
      ))} */}
        <SubTitle>Steps to Cook</SubTitle>
        <ItemList data={selectedMeal.steps} />
        {/* {selectedMeal.steps.map((step) => (
        <Text key={step}>{step}</Text>
      ))} */}
      </View>
    </ScrollView>
  );
}

export default Details;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 16,
    marginBottom: 18,
    // alignItems:'center',
    // justifyContent:'center',
    borderRadius: 8,
    // backgroundColor:'#ffffff'
  },
  image: {
    width: "100%",
    height: 350,
  },
  container: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  subTitle: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
    padding: 6,
  },
  subTileContainer: {
    marginHorizontal: 6,
    marginVertical: 16,
    padding: 6,
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },
  outerContainer: {
    flex: 1,
    padding: 6,
    margin: 8,
    // paddingBottom:16
  },
});
