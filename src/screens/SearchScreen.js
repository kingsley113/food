import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  return (
    <View style={styles.background}>
      <SearchBar
        text={searchQuery}
        onSearchQueryChange={setSearchQuery}
        onQuerySubmit={() => searchApi(searchQuery)}
      />
      <Text>We have found {results.length} results</Text>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ResultsList title="Cost Effective" />
      <ResultsList title="Bit Pricier" />
      <ResultsList title="Big Spender" />
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
