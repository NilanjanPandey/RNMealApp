import { useContext } from "react";
import { useLayoutEffect } from "react";
import MealHeaderButton from "../components/MealHeaderButton";
import Details from "../components/Details";
import { FavouriteContext } from "../Store/context/favourite-context";
import { useSelector, useDispatch } from "react-redux";
import { addFavouriteAction, removeFavouriteAction } from "../Store/redux/favourite";

function MealDetailsScreen({ route, navigation }) {
  // const favMealCtx = useContext(FavouriteContext);
  const favMealIds = useSelector((state) => state.favouriteMeals._id);
  const dispatch = useDispatch();
  const mealId = route.params.mealId;

  // const isMealAlreadyFavourite = favMealCtx._id.includes(mealId);
  const isMealAlreadyFavourite = favMealIds.includes(mealId);
  function changeFavouriteStatusHandler() {
    if (isMealAlreadyFavourite) {
      // favMealCtx._removeFavourite(mealId);
      dispatch(removeFavouriteAction({id:mealId}));
    } else {
      // favMealCtx._addFavourite(mealId);
      dispatch(addFavouriteAction({id:mealId}));
    }
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <MealHeaderButton
            icon={isMealAlreadyFavourite ? "star" : "star-outline"}
            color="white"
            onPress={changeFavouriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavouriteStatusHandler]);
  return <Details mealId={mealId} />;
}

export default MealDetailsScreen;
