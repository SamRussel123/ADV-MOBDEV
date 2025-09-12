import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Stack, useNavigation } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function ProfileScreen() {
  const navigation = useNavigation();

  return (
    <LinearGradient colors={["#1a1a1a", "#000000"]} style={styles.container}>
      <Stack.Screen
        options={{
          title: "Profile",
          headerStyle: { backgroundColor: "#000" },
          headerTintColor: "#fff",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ marginLeft: 15 }}>
              <Ionicons name="menu" size={28} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
      <Image source={require("@/assets/images/profile_placeholder.png")} style={styles.profilePic} />
      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.email}>johndoe@email.com</Text>
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editText}>Edit Profile</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 20 },
  profilePic: { width: 120, height: 120, borderRadius: 60, marginBottom: 20 },
  name: { color: "#fff", fontSize: 22, fontWeight: "bold" },
  email: { color: "#888", fontSize: 16, marginBottom: 20 },
  editButton: { backgroundColor: "#1DB954", paddingVertical: 12, paddingHorizontal: 25, borderRadius: 25 },
  editText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
