import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import homePage from "./screens/homePage";
import indexPage from "./screens/indexPage";
import Color from "./screens/Color"

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={homePage}
          options={{
            title: "Menu",

            headerStyle: {
              backgroundColor: "Transparent"
            },
            headerTitleStyle: {
              alignSelf: 'center'
            },
          }}
        />
        <Stack.Screen name="Index" component={indexPage} />
        <Stack.Screen name="Color" component={Color} />
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
