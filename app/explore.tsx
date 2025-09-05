import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";

export default function ExploreScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LinearGradient colors={["#1a1a1a", "#000000"]} style={styles.container}>
      {/* Logo */}
      <Image source={require("@/assets/images/spotifylogo.webp")} style={styles.logo} />

      <Text style={styles.title}>Spotify</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#666"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#666"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.signInButton} onPress={() => navigation.navigate("(tabs)")}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.signupText}>
        Don’t have an account?{" "}
        <Text style={styles.signupLink} onPress={() => navigation.navigate("signup")}>
          Sign Up
        </Text>
      </Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 25 },
  logo: { width: 90, height: 90, marginBottom: 10, resizeMode: "contain" },
  title: { fontSize: 32, color: "#fff", fontWeight: "bold", marginBottom: 40 },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#1E1E1E",
    borderRadius: 30,
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#fff",
    marginBottom: 15,
  },
  signInButton: {
    width: "100%",
    height: 55,
    backgroundColor: "#1DB954",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },
  signInText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  signupText: { color: "#888" },
  signupLink: { color: "#1DB954", fontWeight: "bold" },
});
