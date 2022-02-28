import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.background}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput placeholder="Search Restaurants" style={styles.textInput} />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#F0EEEE",
    height: 45,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    marginTop: 15,
  },
  textInput: {
    color: "#000",
    // borderColor: "black",
    // borderWidth: 1,
    flex: 1,
    fontSize: 20,
  },
  iconStyle: {
    marginHorizontal: 5,
    fontSize: 35,
    alignSelf: "center",
  },
});

export default SearchBar;
