import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar style="dark"></StatusBar>
      
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='MENU' component={CategoriesScreen}/>
            <Stack.Screen name='Details' component={MealsOverviewScreen}/>

          </Stack.Navigator>
          {/* <CategoriesScreen /> */}
        </NavigationContainer>
      
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
