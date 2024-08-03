import { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../Mockdata/dummy-data";
import MealsList from "../components/MealsList/MealsList";

function MealsOverviewScreen({ navigation, route }) {
  // const route = useRoute(); An alternative approach if you are not interested in props.

  const catID = route.params.categoryID;
  const displayedMeal = MEALS.filter((item) => {
    return item.categoryIds.indexOf(catID) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((title) => title.id === catID).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catID, navigation]);

  return <MealsList displayedMeal={displayedMeal} />;
}

export default MealsOverviewScreen;
