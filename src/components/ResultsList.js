import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.header}>{title}</Text>
      <Text>{results.length}</Text>
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
