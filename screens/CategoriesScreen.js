import React from "react";
import { FlatList } from "react-native";
import { CATEGORIES } from "../Mockdata/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";


function CategoriesScreen({ navigation }) {
  function renderCategoryItem({ item }) {
    function pressHandler() {
      navigation.navigate("Details", { categoryID: item.id });
    }
    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPressNavigation={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    ></FlatList>
  );
}

export default CategoriesScreen;
