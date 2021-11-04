import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import userFormScreen from "./screens/userFormScreen";
const Stack = createNativeStackNavigator();
const app = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={({navigation})=>({ headerStyle: { backgroundColor: "#222d3e" }, headerTitleStyle: { color: "#ffffff" }, headerRight:()=>(<TouchableOpacity onPress={() => navigation.navigate('userFormScreen')}><Text>news</Text></TouchableOpacity>)})}/>
        <Stack.Screen name="userFormScreen" component={userFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default app;
