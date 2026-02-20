import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const chats = [
  {
    id: "1",
    name: "Me India",
    message: "cpsy_200_final_project_2024.docx",
    time: "2025-11-20",
    unread: 0,
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: "2",
    name: "+1 (825) 882-6885",
    message: "📷 Photo",
    time: "Yesterday",
    unread: 0,
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: "3",
    name: "Dilshan Singh Sait",
    message: "New folder.zip",
    time: "12:45 PM",
    unread: 0,
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: "4",
    name: "Mom",
    message: "Mera sohana put",
    time: "10:16 AM",
    unread: 4,
    image: "https://i.pravatar.cc/150?img=4",
  },
];

export default function ChatsScreen() {
  const renderItem = ({ item }: any) => (
    <TouchableOpacity style={styles.chatItem}>
      <Image source={{ uri: item.image }} style={styles.avatar} />

      <View style={styles.chatContent}>
        <View style={styles.topRow}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>

        <View style={styles.bottomRow}>
          <Text style={styles.message}>{item.message}</Text>

          {item.unread > 0 && (
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadText}>{item.unread}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Chats</Text>

      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  header: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },

  chatItem: {
    flexDirection: "row",
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: "#222",
  },

  avatar: {
    width: 55,
    height: 55,
    borderRadius: 30,
    marginRight: 12,
  },

  chatContent: {
    flex: 1,
    justifyContent: "center",
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },

  name: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  time: {
    color: "#aaa",
    fontSize: 12,
  },

  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  message: {
    color: "#aaa",
    fontSize: 14,
    flex: 1,
  },

  unreadBadge: {
    backgroundColor: "#25D366",
    borderRadius: 12,
    paddingHorizontal: 6,
    paddingVertical: 2,
    minWidth: 22,
    alignItems: "center",
  },

  unreadText: {
    color: "#000",
    fontSize: 12,
    fontWeight: "bold",
  },
});