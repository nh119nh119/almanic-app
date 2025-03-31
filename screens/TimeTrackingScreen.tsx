// screens/TimeTrackingScreen.tsx
import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

const TimeTrackingScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { client, order, product, item, process } = route.params || {};

  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPaused) {
        setElapsedSeconds((prev) => prev + 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, "0")}:${m
      .toString()
      .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  const handleFinish = () => {
    navigation.navigate("History", {
      client,
      order,
      product,
      item,
      process,
      duration: elapsedSeconds,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>工作項目：{item}（{process}）</Text>
      <Text style={styles.label}>日期：{new Date().toLocaleDateString()}</Text>
      <Text style={styles.timer}>{formatTime(elapsedSeconds)}</Text>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={handlePause}>
          <Text style={styles.buttonText}>{isPaused ? "繼續" : "暫停"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleFinish}>
          <Text style={styles.buttonText}>結束</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: "center",
  },
  timer: {
    fontSize: 48,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 32,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    backgroundColor: "#3bb6a2",
    padding: 16,
    borderRadius: 8,
    minWidth: 100,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default TimeTrackingScreen;
