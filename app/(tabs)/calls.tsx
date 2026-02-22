import React from "react";
import { View, Text, FlatList, StyleSheet, Image, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const calls = [
  { id: "1", name: "Mom", type: "Outgoing", time: "11:00 PM" },
  { id: "2", name: "Papa", type: "Incoming", time: "1:15 AM" },
  { id: "3", name: "Rishav", type: "Missed", time: "1:01 AM" },
  { id: "4", name: "Franklin", type: "Outgoing", time: "Yesterday" },
  { id: "5", name: "Micheal", type: "Incoming", time: "Yesterday" },
  { id: "6", name: "Work", type: "Missed", time: "2 days ago" },
  { id: "7", name: "Bhupinder", type: "Outgoing", time: "2 days ago" },

];

export default function CallsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View>
          <MaterialCommunityIcons name="dots-horizontal" size={22} color="#333" />
        </View>
        

        <Text style={styles.title}>Calls</Text>

        <View style={styles.plusBtn}>
          <MaterialCommunityIcons name="plus" size={20} color="#000" />
        </View>
      </View>

      
      <View style={styles.actionsRow}>
        <View style={styles.actionItem}>
          <View style={styles.actionCircle}>
            <MaterialCommunityIcons name="phone-outline" size={22} color="#075E54"/>
          </View>
          <Text style={styles.actionLabel}>Call</Text>
        </View>

        <View style={styles.actionItem}>
          <View style={styles.actionCircle}>
            <MaterialCommunityIcons name="calendar-outline" size={22} color="#075E54" />
          </View>
          <Text style={styles.actionLabel}>Schedule</Text>
        </View>

        <View style={styles.actionItem}>
          <View style={styles.actionCircle}>
            <MaterialCommunityIcons name="dialpad" size={22} color="#075E54"/>
          </View>
          <Text style={styles.actionLabel}>Keypad</Text>
        </View>

        <View style={styles.actionItem}>
          <View style={styles.actionCircle}>
            <MaterialCommunityIcons name="heart-outline" size={22} color="#075E54"/>
          </View>
          <Text style={styles.actionLabel}>Favourites</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Recent</Text>

      <ScrollView>
      
      <FlatList
        data={calls}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            
            <Image 
            source={require('../../assets/images/a.png')} 
            style={styles.avatar}/>

            <View style={styles.middle}>
              <Text
                style={[
                  styles.name,
                  item.type === "Missed" && styles.missedText,
                ]}
              >
                {item.name}
              </Text>

              <View style={styles.subRow}>
                <MaterialCommunityIcons
                  name={
                    item.type === "Outgoing"
                      ? "arrow-top-right"
                      : item.type === "Incoming"
                      ? "arrow-bottom-left"
                      : "phone-missed"
                  }
                  size={16}
                  color={item.type === "Missed" ? "#ff4d4d" : "#9AA3A9"}
                />
                <Text style={styles.subText}> {item.type}</Text>
              </View>
            </View>

            
            <View style={styles.right}>
              <Text style={styles.time}>{item.time}</Text>
              <MaterialCommunityIcons name="information-outline" size={18} color="#075E54" />
            </View>
          </View>
        )}
        />
        </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: 50,
  },

  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 14,
  },

  title: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },

  plusBtn: {
    backgroundColor: "#25D366",
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },

  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 18,
  },

  actionItem: {
    alignItems: "center",
  },

  actionCircle: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: "#E0F2F1",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 6,
  },

  actionLabel: {
    color: "#333",
    fontSize: 12,
  },

  sectionTitle: {
    color: "#000",
    fontSize: 22,
    fontWeight: "bold",
    paddingHorizontal: 16,
    marginBottom: 10,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#FFF",
    marginBottom: 2,
  },

  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#DDD",
  },

  middle: {
    flex: 1,
    marginLeft: 12,
  },

  name: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
  },

  missedText: {
    color: "#ff4d4d",
  },

  subRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },

  subText: {
    color: "#666",
    fontSize: 13,
  },

  right: {
    alignItems: "flex-end",
  },

  time: {
    color: "#666",
    fontSize: 12,
    marginBottom: 6,
  },
});
