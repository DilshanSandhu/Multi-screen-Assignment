import {Tabs} from "expo-router";
import { MaterialCommunityIcons, Entypo, Feather } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="status"
        options={{
          tabBarLabel: "Status",
          tabBarIcon: () => (
            <Entypo name="circle" size={24} color="black" />),
        }}
      />
      <Tabs.Screen
        name="calls"
        options={{
          tabBarLabel: "Calls",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="phone" size={24} color="black" />),
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          tabBarLabel: "Community",
          tabBarIcon: () => (
            <Entypo name="users" size={24} color="black" />),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          tabBarLabel: "Chat",
          tabBarIcon: () => (
            <Entypo name="chat" size={24} color="black" />),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: () => (
            <Feather name="settings" size={24} color="black" />
          ),
        }}
      />

    </Tabs>
  );
}