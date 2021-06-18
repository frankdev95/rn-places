import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../constants/Colors";
import NewPlaceScreen from "../screens/NewPlaceScreen";
import PlaceDetailScreen from "../screens/PlaceDetailScreen";
import PlacesListScreen from "../screens/PlacesListScreen";
import MapScreen from "../screens/MapScreen";

const screenOptions = {
  headerTitleAlign: "center",
  headerStyle: {
    backgroundColor: Colors.primary,
  },
};

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen
          name="PlacesList"
          component={PlacesListScreen}
          options={{
            title: "All Places",
          }}
        />
        <Stack.Screen
          name="NewPlace"
          component={NewPlaceScreen}
          options={{ title: "New Place" }}
        />
        <Stack.Screen
          name="PlaceDetail"
          component={PlaceDetailScreen}
          options={({ route }) => ({ title: route.params.title })}
        />
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
