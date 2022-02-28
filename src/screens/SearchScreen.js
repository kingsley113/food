import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async () => {
    try {
      const response = await yelp.get("/search", {
        params: { term: searchQuery, limit: 50, location: "seattle" },
      });
      setResults(response.data.businesses);
    } catch (err) {
      // console.log(err);
      setErrorMessage("Whoops, something went wrong...");
    }
  };

  return (
    <View style={styles.background}>
      <SearchBar
        text={searchQuery}
        onSearchQueryChange={setSearchQuery}
        onQuerySubmit={searchApi}
      />
      <Text>Search Screen</Text>
      <Text>We have found {results.length} results</Text>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
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
