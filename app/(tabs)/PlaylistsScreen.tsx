import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Stack, useNavigation } from "expo-router";
import React from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity } from "react-native";

const playlists = [
  { id: "1", title: "DRIFT MIX", cover: require("@/assets/images/playlist1.jpg") },
  { id: "2", title: "GYM SESH", cover: require("@/assets/images/playlist2.jpg") },
  { id: "3", title: "VIBE", cover: require("@/assets/images/playlist3.jpg") },
  { id: "4", title: "KPOP & JPOP", cover: require("@/assets/images/playlist4.jpg") },
];

export default function PlaylistsScreen() {
  const navigation = useNavigation();

  return (
    <LinearGradient colors={["#1a1a1a", "#000000"]} style={styles.container}>
      <Stack.Screen
        options={{
          title: "Playlists",
          headerStyle: { backgroundColor: "#000" },
          headerTintColor: "#fff",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ marginLeft: 15 }}>
              <Ionicons name="menu" size={28} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
      <FlatList
        data={playlists}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("PlaylistDetailScreen", { playlist: item })}
          >
            <Image source={item.cover} style={styles.cover} />
            <Text style={styles.playlistTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1E1E1E",
    borderRadius: 15,
    padding: 10,
    marginBottom: 15,
  },
  cover: { width: 60, height: 60, borderRadius: 10, marginRight: 15 },
  playlistTitle: { color: "#fff", fontSize: 18, fontWeight: "600" },
});
