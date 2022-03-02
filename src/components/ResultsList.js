import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ResultCard from "./ResultCard";

const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.header}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <ResultCard result={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ResultsList;
