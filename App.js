import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavouriteScreen from "./screens/FavouriteScreen";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#212121" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#cfdaf3" },
        drawerContentStyle: { backgroundColor: "#cfdaf3" },
        drawerInactiveTintColor: "#6285d6",
        drawerActiveTintColor: "#0000db",
        drawerActiveBackgroundColor: "#95ace3",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon:({color,size})=>(<Ionicons color={color} size={size} name="list"/>)
        }}
      />
      <Drawer.Screen name="Favourite" component={FavouriteScreen} 
      options={{
        title: "Favourite",
        drawerIcon:({color,size})=>(<Ionicons color={color} size={size} name="star"/>)
      }}/>
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light"></StatusBar>

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#212121" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#f1ebeb" },
          }}
        >
          <Stack.Screen
            name="MENU"
            component={DrawerNavigator}
            options={{
              // title: "All Category",
              headerShown: false,
            }}
          />
          <Stack.Screen name="Details" component={MealsOverviewScreen} />
          <Stack.Screen
            name="mealDetails"
            component={MealDetailsScreen}
            // options={{
            //   headerRight:()=>{return <Button title="Save" onPress={()=>(console.log('Pressed'))}/>}
            // }}
          />
        </Stack.Navigator>
        {/* <CategoriesScreen /> */}
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
