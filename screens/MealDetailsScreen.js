import React from "react";
import { useLayoutEffect } from "react";
import MealHeaderButton from "../components/MealHeaderButton";
import Details from "../components/Details";

function MealDetailsScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  function onPressHandler() {
    console.log("first");
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <MealHeaderButton
            icon={"star-outline"}
            color={"white"}
            onPress={onPressHandler}
          />
        );
      },
    });
  }, [navigation, onPressHandler]);
  return <Details mealId={mealId} />;
}

export default MealDetailsScreen;
