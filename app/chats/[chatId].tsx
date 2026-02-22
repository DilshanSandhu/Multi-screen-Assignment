import React from "react";
import { View, Text, StyleSheet, Pressable, Image, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";


export default function ChatScreen() {
  const { id } = useLocalSearchParams(); 

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
        </Pressable>

        <Image source={{ uri: `https://i.pravatar.cc/150?img=3` }} style={styles.avatar} />

        <View style={styles.titleBox}>
          <Text style={styles.headerTitle}>Dilshan Singh Sait {id}</Text>
          <Text style={styles.headerSubTitle}>tap here for contact info</Text>
        </View>

        <View style={styles.headerIcons}>
          <MaterialCommunityIcons name="video-outline" size={22} color="black" />
          <MaterialCommunityIcons name="phone-outline" size={22} color="black" />
        </View>
      </View>

      <ScrollView>
      <View style={styles.chatArea}>
        <View style={styles.leftMessage}>
          <Text style={styles.messageText}>Happy birthday</Text>
          <Text style={styles.time}>2:02 AM</Text>
        </View>

        <View style={styles.rightMessage}>
          <Text style={styles.messageText}>Thank you</Text>
          <Text style={styles.time}>2:04 AM</Text>
        </View>
      </View>

      
      </ScrollView>      
      <View style={styles.inputBar}>
        <Pressable>
          <MaterialCommunityIcons name="plus" size={24} color="#9AA3A9" />
        </Pressable>

        <View style={styles.fakeInput}>
          <Text style={styles.placeholder}>Message</Text>
        </View>

        <Pressable style={styles.micButton}>
          <MaterialCommunityIcons name="microphone" size={22} color="black" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECE5DD", 
  },

  header: {
    height: 64,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    gap: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#DDD",
  },

  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },

  titleBox: {
    flex: 1,
  },

  headerTitle: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },

  headerSubTitle: {
    color: "#666",
    fontSize: 12,
    marginTop: 1,
  },

  headerIcons: {
    flexDirection: "row",
    gap: 16,
  },

  chatArea: {
    flex: 1,
    padding: 12,
  },

  leftMessage: {
    backgroundColor: "#FFFFFF",
    alignSelf: "flex-start",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    maxWidth: "70%",
  },

  rightMessage: {
    backgroundColor: "#DCF8C6", 
    alignSelf: "flex-end",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    maxWidth: "70%",
  },

  messageText: {
    color: "#000",
    fontSize: 14,
  },

  time: {
    color: "#666",
    fontSize: 10,
    alignSelf: "flex-end",
    marginTop: 4,
  },

  inputBar: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 0.5,
    borderTopColor: "#DDD",
  },

  fakeInput: {
    flex: 1,
    backgroundColor: "#F0F0F0",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginHorizontal: 8,
  },

  placeholder: {
    color: "#999",
  },

  micButton: {
    backgroundColor: "#25D366",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});