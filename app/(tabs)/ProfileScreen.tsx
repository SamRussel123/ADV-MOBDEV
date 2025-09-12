import { Ionicons } from "@expo/vector-icons";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Define a DrawerNav type so openDrawer() is recognized
type DrawerNav = DrawerNavigationProp<any>;

export default function ProfileScreen() {
  const navigation = useNavigation<DrawerNav>();

  return (
    <LinearGradient colors={["#1a1a1a", "#000000"]} style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.menuButton}>
          <Ionicons name="menu" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <View style={{ width: 40 }} /> {/* spacer */}
      </View>

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
  container: { flex: 1, paddingHorizontal: 20, paddingTop: 40, alignItems: "center" },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  menuButton: { marginLeft: 5 },
  headerTitle: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  profilePic: { width: 120, height: 120, borderRadius: 60, marginBottom: 20 },
  name: { color: "#fff", fontSize: 22, fontWeight: "bold" },
  email: { color: "#888", fontSize: 16, marginBottom: 20 },
  editButton: {
    backgroundColor: "#1DB954",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
  editText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
