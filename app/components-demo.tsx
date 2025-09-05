import React, { useState } from "react";
import {
  Alert,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

export default function ComponentsDemoScreen() {
  const colorScheme = useColorScheme(); 
  const [showExtraImage, setShowExtraImage] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text
      
        style={[
          styles.title,
          { color: colorScheme === "dark" ? "#fff" : "#000" },
        ]}
      >
        ACTIVITY 2
      </Text>

      {/* Button with Alert + image toggle */}
      <Button
        title="Click Me"
        onPress={() => {
          Alert.alert("Hello!", "OUCH U PRESSED ME 🎉");
          setShowExtraImage(true); 
        }}
      />

      
      <Image
        source={require("../assets/images/cat.jpeg")}
        style={styles.image}
        resizeMode="contain"
      />

      
      {showExtraImage && (
        <View style={{ marginTop: 20 }}>
          <Image
            source={require("../assets/images/dog.jpeg")} 
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      )}

      {/* Scrollable Text */}
      <Text
        style={[
          styles.paragraph,
          { color: colorScheme === "dark" ? "#eee" : "#111" },
        ]}
      >
        The Fitness Test you are about to take is the Progressive Aerobic
        Cardiovascular Endurance Run, also called the PACER test. The PACER test
        is a multistage aerobic capacity test that gets more difficult as it
        continues. The running speed starts out slow, but every minute, you must
        run faster. Line up at the start line. When you hear the signal, run
        across the 20-meter distance before the beep. At the sound of the beep,
        turn around and run back to the starting line. The second time you hear
        the sound, you must run again, making sure to reach the line before the
        next beep. Continue running in this way until you can no longer keep up
        with the pace. Remember, the test will begin slowly, but after about one
        minute, the beeps will get closer together. Each level you complete will
        be announced, so you will know how far you’ve gone. Get ready to start.
        The test will begin with the first beep. Run as long as you can. Ready?
        Go.
      </Text>

      <Text
        style={[
          styles.paragraph,
          { color: colorScheme === "dark" ? "#eee" : "#111" },
        ]}
      >
        Wake up your day the right way. Freshly roasted beans, brewed to
        perfection, and a smile in every cup. At Sunrise Coffee, we don’t just
        serve coffee—we serve happiness. Come taste the difference today.
      </Text>

      <Text
        style={[
          styles.paragraph,
          { color: colorScheme === "dark" ? "#eee" : "#111" },
        ]}
      >
        Tired of skipping workouts? With FitTrack, your personal trainer is
        always in your pocket. Track progress, crush your goals, and stay
        motivated with daily challenges. Download FitTrack now—your future self
        will thank you.
      </Text>

      <Text
        style={[
          styles.paragraph,
          { color: colorScheme === "dark" ? "#eee" : "#111" },
        ]}
      >
        What if your phone wasn’t just smart, but genius? The Nova X1 isn’t just
        faster—it’s built for the way you live. Crisp photos, endless battery,
        and power that never quits. Nova X1. Smarter than smart.
      </Text>

      <Text
        style={[
          styles.paragraph,
          { color: colorScheme === "dark" ? "#eee" : "#111" },
        ]}
      >
        Hungry? Don’t wait. Tap, order, and enjoy your favorite meals delivered
        straight to your door in minutes. QuickBite—because cravings can’t wait.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: "bold",
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "justify",
  },
});
