import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { AntDesignHeaderButtons } from "../components/UI/HeaderButtons";
import { Item } from "react-navigation-header-buttons";
import PlaceItem from "../components/App/PlaceItem";

const PlacesListScreen = ({ navigation, route }) => {
  const placesList = useSelector((state) => state.places.places);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <AntDesignHeaderButtons>
          <Item
            title="Add"
            iconName="plussquareo"
            color="#393E46"
            onPress={() => navigation.navigate("NewPlace")}
          />
        </AntDesignHeaderButtons>
      ),
    });
  }, [navigation]);

  const renderPlaceItem = ({ item }) => (
    <PlaceItem
      title={item.title}
      onSelect={() =>
        navigation.navigate("PlaceDetail", {
          title: item.title,
        })
      }
    />
  );

  return (
    <View style={styles.screen}>
      <View style={styles.listContainer}>
        <FlatList
          data={placesList}
          keyExtractor={(item) => item.id}
          renderItem={renderPlaceItem}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  listContainer: {
    alignItems: "center",
    padding: 10,
    marginTop: 20,
  },
});

export default PlacesListScreen;
