// screens/TaskStartScreen.tsx
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const TaskStartScreen = () => {
  const navigation = useNavigation();
  const [client, setClient] = useState("");
  const [order, setOrder] = useState("");
  const [product, setProduct] = useState("");
  const [item, setItem] = useState("");
  const [process, setProcess] = useState("");

  const handleStart = () => {
    if (client && product && item && process) {
      navigation.navigate("Tracking", {
        client,
        order,
        product,
        item,
        process,
      });
    } else {
      alert("請填寫所有必要欄位");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>開始任務</Text>

      <TextInput style={styles.input} placeholder="客戶（必填）" value={client} onChangeText={setClient} />
      <TextInput style={styles.input} placeholder="訂單編號（選填）" value={order} onChangeText={setOrder} />
      <TextInput style={styles.input} placeholder="產品編碼（必填）" value={product} onChangeText={setProduct} />
      <TextInput style={styles.input} placeholder="項目名稱（必填）" value={item} onChangeText={setItem} />
      <TextInput style={styles.input} placeholder="製程（必填）" value={process} onChangeText={setProcess} />

      <TouchableOpacity style={styles.button} onPress={handleStart}>
        <Text style={styles.buttonText}>開始計時</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#fff",
    flexGrow: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 12,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#3bb6a2",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default TaskStartScreen;
