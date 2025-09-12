import { LinearGradient } from "expo-linear-gradient";
import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function PlaylistDetailScreen() {
  const { playlist } = useLocalSearchParams<{ playlist: any }>();

  return (
    <LinearGradient colors={["#1a1a1a", "#000000"]} style={styles.container}>
      <Stack.Screen
        options={{
          title: playlist?.title || "Playlist",
          headerStyle: { backgroundColor: "#000" },
          headerTintColor: "#fff",
        }}
      />
      {playlist && (
        <View style={styles.content}>
          <Image source={playlist.cover} style={styles.cover} />
          <Text style={styles.title}>{playlist.title}</Text>
        </View>
      )}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  content: { alignItems: "center" },
  cover: { width: 150, height: 150, borderRadius: 10, marginBottom: 20 },
  title: { color: "#fff", fontSize: 24, fontWeight: "bold" },
});
