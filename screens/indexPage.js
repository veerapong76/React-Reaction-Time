import React, { Component } from "react";
import { View, Text, Button, AppRegistry, StyleSheet } from "react-native";
import Swiper from "react-native-swiper/src";

function indexPage({ navigation }) {
  return (
    <View style={{ flex: 1,alignItems:"center" }}>
      <Text>Home Screen</Text>
      <View style={{ width: "80%",height: "50%" }}>
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
      </View>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Color")}
      />
    </View>
  );
}
AppRegistry.registerComponent("myproject", () => SwiperComponent);

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});
export default indexPage;
