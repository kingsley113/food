import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    // prices will be "$", "$$", "$$$"
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View style={styles.background}>
      <SearchBar
        text={searchQuery}
        onSearchQueryChange={setSearchQuery}
        onQuerySubmit={() => searchApi(searchQuery)}
      />
      <Text>We have found {results.length} results</Text>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ResultsList title="Cost Effective" results={filterResultsByPrice("$")} />
      <ResultsList title="Bit Pricier" results={filterResultsByPrice("$$")} />
      <ResultsList title="Big Spender" results={filterResultsByPrice("$$$")} />
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
