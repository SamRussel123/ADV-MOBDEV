import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Stack } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const navigation = useNavigation();

  return (
    <LinearGradient colors={["#1a1a1a", "#000000"]} style={styles.container}>
      <Stack.Screen
        options={{
          title: "Settings",
          headerStyle: { backgroundColor: "#000" },
          headerTintColor: "#fff",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ marginLeft: 15 }}>
              <Ionicons name="menu" size={28} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />

      <Text style={styles.title}>Settings</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Notifications</Text>
        <Switch value={notifications} onValueChange={setNotifications} trackColor={{ false: "#444", true: "#1DB954" }} thumbColor="#fff" />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Dark Mode</Text>
        <Switch value={darkMode} onValueChange={setDarkMode} trackColor={{ false: "#444", true: "#1DB954" }} thumbColor="#fff" />
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate("explore")}>
        <Ionicons name="log-out-outline" size={20} color="#fff" />
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { color: "#fff", fontSize: 24, fontWeight: "bold", marginBottom: 30 },
  row: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20 },
  label: { color: "#fff", fontSize: 16 },
  logoutButton: {
    marginTop: 40,
    backgroundColor: "#1DB954",
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
  },
  logoutText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
