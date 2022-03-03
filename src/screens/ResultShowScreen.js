import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image, FlatList } from "react-native";
import yelp from "../api/yelp";

const ResultShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  // console.log(result);

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => getResult(id), []);

  // check to return null if no result object yet
  if (!result) return null;

  return (
    <View>
      <Text style={styles.title}>{result.name}</Text>
      <FlatList
        style={styles.container}
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          console.log(item);
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
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
  container: {
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 5,
    marginLeft: 10,
  },
});

export default ResultShowScreen;
