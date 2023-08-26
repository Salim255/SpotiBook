import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import BookItem from "../../components/BookItem";
import Book from "../../models/book";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
const Stack = createStackNavigator();
function renderBookItem(itemData) {
  return <BookItem name={itemData.item.name} />;
}
const BOOKS = [
  new Book(
    "1",
    "title",
    "author",
    "cover",
    "originalTitle",
    "translator",
    "country",
    "language",
    "genre"
  ),
  new Book(
    "2",
    "title",
    "author",
    "cover",
    "originalTitle",
    "translator",
    "country",
    "language",
    "genre"
  ),
  new Book(
    "3",
    "title",
    "author",
    "cover",
    "originalTitle",
    "translator",
    "country",
    "language",
    "genre"
  ),
  new Book(
    "4",
    "title",
    "author",
    "cover",
    "originalTitle",
    "translator",
    "country",
    "language",
    "genre"
  ),
  new Book(
    "5",
    "title",
    "author",
    "cover",
    "originalTitle",
    "translator",
    "country",
    "language",
    "genre"
  ),
  new Book(
    "6",
    "title",
    "author",
    "cover",
    "originalTitle",
    "translator",
    "country",
    "language",
    "genre"
  ),
  new Book(
    "7",
    "title",
    "author",
    "cover",
    "originalTitle",
    "translator",
    "country",
    "language",
    "genre"
  ),
];
const MyRewards = () => (
  <LinearGradient
    colors={["#041e22", "#0b4e58", "#14899b", "#51bccd", "#0bd3f1"]}
    style={styles.rootScreen}
  >
    <ImageBackground
      source={require("../../assets/images/back.jpg")}
      resizeMode="cover"
      style={styles.rootScreen}
      imageStyle={styles.backgroundIage}
    >
      <FlatList
        data={BOOKS}
        keyExtractor={(item) => item.id}
        renderItem={renderBookItem}
        numColumns={2}
        style={styles.list}
      />
    </ImageBackground>
  </LinearGradient>
);

const MyRewardsStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="MyRewards"
        options={{ headerTransparent: true }}
        component={MyRewards}
      />
    </Stack.Navigator>
  );
};

export default MyRewardsStackNavigator;
const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundIage: {
    opacity: 0.7,
  },

  bookItem: {},
  list: {
    marginTop: 150,
  },
});
