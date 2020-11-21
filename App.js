import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Icon } from "react-native-elements";

import index from "./screens/index";
import vision from "./screens/vision";
import sense from "./screens/sense";
import hear from "./screens/hear";
import calculation from "./screens/calculation";

import Color from "./screens/game/color";
import Greater from "./screens/game/greater";
import GreaterP from "./screens/game/greaterP";
import Sounds from "./screens/game/sound";
import Maths from "./screens/game/math";
import Vibration from "./screens/game/vibration";

const Stack = createStackNavigator();

function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="index"
          component={index}
          options={{
            title: "React Reaction Time",

            headerStyle: {
              backgroundColor: "Transparent",
            },
            headerTitleStyle: {
              alignSelf: "center",
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => alert("This is a button!")}>
                <Icon name="list" />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="Vision"
          component={vision}
          options={{
            title: "การมองเห็น",

            headerStyle: {
              backgroundColor: "Transparent",
            },
            headerTitleStyle: {
              alignSelf: "center",
            },
          }}
        />
        <Stack.Screen
          name="Sense"
          component={sense}
          options={{
            title: "การสัมผัส",

            headerStyle: {
              backgroundColor: "Transparent",
            },
            headerTitleStyle: {
              alignSelf: "center",
            },
          }}
        />

        <Stack.Screen
          name="Hear"
          component={hear}
          options={{
            title: "การได้ยิน",

            headerStyle: {
              backgroundColor: "Transparent",
            },
            headerTitleStyle: {
              alignSelf: "center",
            },
          }}
        />

        <Stack.Screen
          name="Calculation"
          component={calculation}
          options={{
            title: "การคำนวณ",

            headerStyle: {
              backgroundColor: "Transparent",
            },
            headerTitleStyle: {
              alignSelf: "center",
            },
          }}
        />

        <Stack.Screen
          name="Color"
          component={Color}
          options={({ navigation }) => ({
            title: "Color",

            headerStyle: {
              backgroundColor: "Transparent",
            },
            headerTitleStyle: {
              alignSelf: "center",
            },
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("index")}>
                <Icon name="list" />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="Greater"
          component={Greater}
          options={({ navigation }) => ({
            title: "Greater",

            headerStyle: {
              backgroundColor: "Transparent",
            },
            headerTitleStyle: {
              alignSelf: "center",
            },
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("index")}>
                <Icon name="list" />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="GreaterP"
          component={GreaterP}
          options={({ navigation }) => ({
            title: "GreaterP",

            headerStyle: {
              backgroundColor: "Transparent",
            },
            headerTitleStyle: {
              alignSelf: "center",
            },
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("index")}>
                <Icon name="list" />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="Maths"
          component={Maths}
          options={({ navigation }) => ({
            title: "Maths",

            headerStyle: {
              backgroundColor: "Transparent",
            },
            headerTitleStyle: {
              alignSelf: "center",
            },
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("index")}>
                <Icon name="list" />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="Sounds"
          component={Sounds}
          options={({ navigation }) => ({
            title: "Sounds",

            headerStyle: {
              backgroundColor: "Transparent",
            },
            headerTitleStyle: {
              alignSelf: "center",
            },
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("index")}>
                <Icon name="list" />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="Vibration"
          component={Vibration}
          options={({ navigation }) => ({
            title: "Vibration",

            headerStyle: {
              backgroundColor: "Transparent",
            },
            headerTitleStyle: {
              alignSelf: "center",
            },
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("index")}>
                <Icon name="list" />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
