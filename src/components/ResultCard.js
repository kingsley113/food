import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultCard = ({ result }) => {
  const { name, image_url, rating, review_count } = result;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image_url }} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.details}>
        {rating} Stars, {review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 120,
    borderRadius: 5,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
    // fontSize: 16
  },
  details: {
    color: "rgb(150,150,150)",
  },
  container: {
    marginLeft: 10,
  },
});

export default ResultCard;
