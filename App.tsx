// App.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import TaskStartScreen from "./screens/TaskStartScreen";
import TimeTrackingScreen from "./screens/TimeTrackingScreen";
import HistoryScreen from "./screens/HistoryScreen";
import ExportScreen from "./screens/ExportScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TaskStart" component={TaskStartScreen} />
        <Stack.Screen name="TimeTracking" component={TimeTrackingScreen} />
        <Stack.Screen name="History" component={HistoryScreen} />
        <Stack.Screen name="Export" component={ExportScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
