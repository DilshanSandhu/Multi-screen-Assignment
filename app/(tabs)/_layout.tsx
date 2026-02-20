import { Tabs } from "expo-router";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#111B21",
          borderTopColor: "#1F2C34",
          height: 70,
          paddingBottom: 10,
        },
        tabBarActiveTintColor: "#25D366",
        tabBarInactiveTintColor: "#8E8E8E",
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 4,
        },
      }}
    >

      {/* UPDATES TAB */}
      <Tabs.Screen
        name="updates"
        options={{
          title: "Updates",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="sync-outline" size={size} color={color} />
          ),
        }}
      />

      {/* CALLS TAB */}
      <Tabs.Screen
        name="calls"
        options={{
          title: "Calls",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="call-outline" size={size} color={color} />
          ),
        }}
      />

      {/* COMMUNITIES TAB */}
      <Tabs.Screen
        name="communities"
        options={{
          title: "Communities",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people-outline" size={size} color={color} />
          ),
        }}
      />

      {/* CHATS TAB (DEFAULT HOME) */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Chats",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubble-outline" size={size} color={color} />
          ),
        }}
      />

      {/* PROFILE TAB */}
      <Tabs.Screen
        name="profile"
        options={{
          title: "You",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
        }}
      />
      
    </Tabs>
  );
}