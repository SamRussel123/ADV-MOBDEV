// app/_layout.tsx
import { useNavigation } from "@react-navigation/native";
import { Drawer } from "expo-router/drawer";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default function RootLayout() {
  const navigation = useNavigation();

  return (
    <Drawer
      screenOptions={{
        headerStyle: { backgroundColor: "#000" },
        headerTintColor: "#fff",
        drawerActiveTintColor: "#1DB954",
        drawerInactiveTintColor: "#fff",
        drawerStyle: { backgroundColor: "#121212" },
        drawerPosition: "left",
        swipeEnabled: true,
        swipeEdgeWidth: 100,
        swipeMinDistance: 20,
      }}
    >
      {/* Each file in /app becomes a route automatically */}
      <Drawer.Screen name="home" options={{ drawerLabel: "Login", title: "Login" }} />
      <Drawer.Screen name="signup" options={{ drawerLabel: "Sign Up", title: "Sign Up" }} />
      <Drawer.Screen name="playlistsScreen" options={{ drawerLabel: "Playlists", title: "Playlists" }} />
      <Drawer.Screen name="profileScreen" options={{ drawerLabel: "Profile", title: "Profile" }} />
      <Drawer.Screen name="settingsScreen" options={{ drawerLabel: "Settings", title: "Settings" }} />

      {/* Log Out shortcut */}
      <Drawer.Screen
        name="logout"
        options={{
          drawerLabel: () => (
            <TouchableOpacity onPress={() => navigation.navigate("home" as never)}>
              <Text style={{ color: "#fff", fontSize: 16 }}>Log Out</Text>
            </TouchableOpacity>
          ),
          title: "Log Out",
          drawerItemStyle: { height: 0 },
        }}
      />
    </Drawer>
  );
}
