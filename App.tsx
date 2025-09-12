import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { Slot } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  const [initialState, setInitialState] = useState();
  const [isReady, setIsReady] = useState(false);

  // Restore last nav state
  useEffect(() => {
    const restoreState = async () => {
      try {
        const savedState = await AsyncStorage.getItem("NAVIGATION_STATE");
        if (savedState) {
          setInitialState(JSON.parse(savedState));
        }
      } finally {
        setIsReady(true);
      }
    };
    restoreState();
  }, []);

  if (!isReady) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="#1DB954" />
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer
        initialState={initialState}
        onStateChange={async (state) => {
          await AsyncStorage.setItem("NAVIGATION_STATE", JSON.stringify(state));
        }}
      >
        <Slot />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
