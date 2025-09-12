import { useNavigation } from "@react-navigation/native";
import { Drawer } from "expo-router/drawer";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Animated from "react-native-reanimated";

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
        swipeMinDistance: 20, // gesture sensitivity
        sceneContainerStyle: {
          backgroundColor: "#000",
        },
        drawerType: "slide",
        drawerHideStatusBarOnOpen: true,
        overlayColor: "rgba(0,0,0,0.5)",
        drawerContentStyle: { flex: 1 },
      }}
      // Reanimated scale effect when drawer opens
      drawerContent={(props) => {
        return (
          <Animated.View
            style={{
              flex: 1,
              transform: [
                {
                  scale: props.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 0.9],
                  }),
                },
              ],
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("explore")}>
              <Text style={{ color: "#fff", fontSize: 16, margin: 20 }}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("signup")}>
              <Text style={{ color: "#fff", fontSize: 16, margin: 20 }}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("PlaylistsScreen")}>
              <Text style={{ color: "#fff", fontSize: 16, margin: 20 }}>Playlists</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}>
              <Text style={{ color: "#fff", fontSize: 16, margin: 20 }}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("SettingsScreen")}>
              <Text style={{ color: "#fff", fontSize: 16, margin: 20 }}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("explore")}>
              <Text style={{ color: "#fff", fontSize: 16, margin: 20 }}>Log Out</Text>
            </TouchableOpacity>
          </Animated.View>
        );
      }}
    >
      <Drawer.Screen name="explore" options={{ title: "Login" }} />
      <Drawer.Screen name="signup" options={{ title: "Sign Up" }} />
      <Drawer.Screen name="PlaylistsScreen" options={{ title: "Playlists" }} />
      <Drawer.Screen name="ProfileScreen" options={{ title: "Profile" }} />
      <Drawer.Screen name="SettingsScreen" options={{ title: "Settings" }} />
      <Drawer.Screen name="PlaylistDetailScreen" options={{ title: "Playlist Detail" }} />
    </Drawer>
  );
}
