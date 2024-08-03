import React from 'react'
import { StyleSheet,View,FlatList } from 'react-native';
import MealItem from './MealItem';

function MealsList(props) {
    function renderMealDetail({ item }) {
        return (
          <MealItem
            id={item.id}
            title={item.title}
            imageUrl={item.imageUrl}
            duration={item.duration}
            complexity={item.complexity}
            affordability={item.affordability}
          />
        );
      }
      
      return (
        <View style={styles.container}>
          <FlatList
            data={props.displayedMeal}
            keyExtractor={(item) => item.id}
            renderItem={renderMealDetail}
          />
        </View>
      );
}

export default MealsList
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
  });