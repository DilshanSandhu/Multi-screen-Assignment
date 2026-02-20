import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* TOP ICONS */}
        <View style={styles.topBar}>
          <CircleIcon name="search" />
          <CircleIcon name="qr-code-outline" />
        </View>

        {/* AVATAR + NAME */}
        <View style={styles.profileArea}>
          <View style={styles.statusBubble}>
            <Text style={{ color: "#fff" }}>Busy</Text>
          </View>

          <Image
            source={require("../../assets/images/react-logo.png")}
            style={styles.avatar}
          />

          <Text style={styles.name}>UserName</Text>
        </View>

        {/* FIRST CARD */}
        <Card>
          <Row icon="person-circle-outline" label="Avatar" />
          <Row icon="list-outline" label="Lists" />
          <Row icon="megaphone-outline" label="Broadcast messages" />
          <Row icon="star-outline" label="Starred" />
          <Row icon="laptop-outline" label="Linked devices" />
        </Card>

        {/* SECOND CARD */}
        <Card>
          <Row icon="key-outline" label="Account" />
          <Row icon="lock-closed-outline" label="Privacy" />
          <Row icon="chatbubble-outline" label="Chats" badge="1" />
          <Row icon="notifications-outline" label="Notifications" />
        </Card>

      </ScrollView>
    </View>
  );
}

//////////////////////////////////////////////////////
// COMPONENTS
//////////////////////////////////////////////////////

function CircleIcon({ name }: { name: any }) {
  return (
    <View style={styles.circle}>
      <Ionicons name={name} size={20} color="#cfcfcf" />
    </View>
  );
}

function Card({ children }: any) {
  return <View style={styles.card}>{children}</View>;
}

function Row({
  icon,
  label,
  badge,
}: {
  icon: any;
  label: string;
  badge?: string;
}) {
  return (
    <TouchableOpacity style={styles.row}>
      <Ionicons name={icon} size={22} color="#cfcfcf" />
      <Text style={styles.rowText}>{label}</Text>

      <View style={{ flex: 1 }} />

      {badge ? (
        <View style={styles.badge}>
          <Text style={{ color: "#fff", fontSize: 12 }}>{badge}</Text>
        </View>
      ) : (
        <Feather name="chevron-right" size={18} color="#6e6e6e" />
      )}
    </TouchableOpacity>
  );
}

//////////////////////////////////////////////////////
// STYLES
//////////////////////////////////////////////////////

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B141A",
    paddingTop: 50,
  },

  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    marginBottom: 20,
  },

  circle: {
    height: 38,
    width: 38,
    borderRadius: 20,
    backgroundColor: "#111B21",
    alignItems: "center",
    justifyContent: "center",
  },

  profileArea: {
    alignItems: "center",
    marginBottom: 25,
  },

  statusBubble: {
    backgroundColor: "#2A2F32",
    paddingHorizontal: 18,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: -15,
    zIndex: 10,
  },

  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    marginTop: 8,
  },

  name: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "600",
    marginTop: 12,
  },

  card: {
    backgroundColor: "#111B21",
    marginHorizontal: 14,
    borderRadius: 16,
    marginBottom: 18,
    paddingVertical: 6,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
  },

  rowText: {
    color: "#fff",
    marginLeft: 14,
    fontSize: 16,
  },

  badge: {
    backgroundColor: "#5a5a5a",
    height: 22,
    width: 22,
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
  },
});