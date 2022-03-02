import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultCard = ({ result }) => {
  const { name } = result;
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultCard;
