import React from "react";
import { FlatList } from "react-native";
import { CATEGORIES } from "../Mockdata/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
// function renderCategoryItems(item) {}

function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <CategoryGridTile title={item.title} color={item.color} />
      )}
      numColumns={2}
    ></FlatList>
  );
}

export default CategoriesScreen;
