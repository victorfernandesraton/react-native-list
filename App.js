import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Index from './src/screen/index'
const Tabs = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Home" component={Index}></Tabs.Screen>
        <Tabs.Screen name="Another" component={Index}></Tabs.Screen>
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
