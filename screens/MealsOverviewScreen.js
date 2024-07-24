import React from "react";
import { MEALS } from "../Mockdata/dummy-data";
import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "../components/MealItem";
// import { useRoute } from "@react-navigation/native";

function MealsOverviewScreen({ navigation, route }) {
  // const route = useRoute(); An alternative approach if you are not interested in props.

  const catID = route.params.categoryID;
  const displayedMeal = MEALS.filter((item) => {
    return item.categoryIds.indexOf(catID) >= 0;
  });

  function renderMealDetail({item}){
    return <MealItem title={item.title}/>
  }
  // console.log(displayedMeal)
  return (
    <View style={styles.container}>
      <FlatList data={displayedMeal} keyExtractor={(item)=>item.id} renderItem={renderMealDetail}/>
    </View>
  );
}

export default MealsOverviewScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
