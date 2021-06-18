import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  View,
  ScrollView,
  TextInput,
  Button,
  Text,
  StyleSheet,
  Alert,
} from "react-native";
import { addPlace } from "../store/actions/places";

const NewPlaceScreen = ({ navigation, route }) => {
  const [titleText, setTitleText] = useState("");
  const dispatch = useDispatch();

  const submitFormHandler = () => {
    if (titleText.trim().length === 0)
      return Alert.alert("Invalid Entry", "A place must not be empty.", [
        {
          text: "Ok",
        },
      ]);
    dispatch(addPlace(titleText.trim()));
    navigation.goBack();
  };
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.formContainer}>
        <Text>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={setTitleText}
          value={titleText}
        />
        <View style={styles.btnContainer}>
          <Button title="Save Place" onPress={submitFormHandler} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  formContainer: {
    padding: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#393E46",
    marginBottom: 15,
  },
  btnContainer: {
    alignItems: "center",
  },
});

export default NewPlaceScreen;
