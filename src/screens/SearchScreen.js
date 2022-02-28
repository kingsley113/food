import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <View style={styles.background}>
      <SearchBar
        text={searchQuery}
        onSearchQueryChange={(newText) => setSearchQuery(newText)}
        onQuerySubmit={() => console.log("query was submitted")}
      />
      <Text>Search Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#fff",
    height: "100%",
  },
});

export default SearchScreen;
