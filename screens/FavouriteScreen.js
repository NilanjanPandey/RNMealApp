import { useContext } from "react";
import MealsList from "../components/MealsList/MealsList";

import { FavouriteContext } from "../Store/context/favourite-context";
import { MEALS } from "../Mockdata/dummy-data";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

function FavouriteScreen() {
  // const favouritesCtx = useContext(FavouriteContext);
  // const favouriteMeals = MEALS.filter((meal) =>
  //   favouritesCtx._id.includes(meal.id)
  // );
  const favMealIds = useSelector(state=>state.favouriteMeals._id)
  const favouriteMeals = MEALS.filter((meal) =>
    favMealIds.includes(meal.id)
  );

  if (favouriteMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Sorry, No Favourites Yet !!!</Text>
      </View>
    );
  } else {
    return <MealsList displayedMeal={favouriteMeals} />;
  }
}

export default FavouriteScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // padding:16,

  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color:'black'
    
  },
});
