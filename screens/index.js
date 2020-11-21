import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { DATA } from "../data/data";

const TypeItem = ({ id, title, onSelect }) => (
  <TouchableOpacity style={styles.gridItem} onPress={() => onSelect()}>
    <View style={styles.containy}>
      <Text>
        {title}
      </Text>
    </View>
  </TouchableOpacity>
);

function index({ navigation }) {
  const renderItem = ({ item }) => (
    <TypeItem
      id={item.id}
      title={item.title}
      onSelect={() => {
        navigation.navigate(item.path);
      }}
    />
  );
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/bg-manu.jpg")}
        style={styles.image}
      >
        <FlatList data={DATA} renderItem={renderItem} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  containy: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  image: {
    flex: 1,
    resizeMode: "stretch",
  },
  gridItem: {
    flex: 1,
    margin: 10,
    marginLeft:30,
    marginRight:30,
    height: 150,
  },
});

export default index;
