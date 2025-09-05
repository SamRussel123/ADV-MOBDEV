import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Stack, useNavigation } from "expo-router";
import React from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

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
            <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")} style={{ marginLeft: 15 }}>
              <Image
                source={require("@/assets/images/profile_placeholder.png")}
                style={{ width: 32, height: 32, borderRadius: 16 }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("SettingsScreen")} style={{ marginRight: 15 }}>
              <Ionicons name="settings-outline" size={24} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
      <FlatList
        data={playlists}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.cover} style={styles.cover} />
            <Text style={styles.playlistTitle}>{item.title}</Text>
          </View>
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
