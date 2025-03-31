// screens/HistoryScreen.tsx
import React, { useState } from "react";
import { View, Text, TextInput, FlatList, StyleSheet } from "react-native";

const mockData = [
  {
    id: "1",
    date: "2025/03/30",
    client: "SHT",
    product: "ID07152",
    item: "檔塊滑輪組",
    process: "鉚合",
    quantity: 60,
    duration: "01:00:00",
  },
  {
    id: "2",
    date: "2025/03/29",
    client: "SHT",
    product: "ID07142",
    item: "支架零件",
    process: "整修",
    quantity: 40,
    duration: "00:40:00",
  },
];

const HistoryScreen = () => {
  const [keyword, setKeyword] = useState("");

  const filtered = mockData.filter((record) =>
    record.product.includes(keyword) || record.item.includes(keyword)
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>歷史工時紀錄</Text>
      <TextInput
        style={styles.input}
        placeholder="搜尋產品編號或項目名稱"
        value={keyword}
        onChangeText={setKeyword}
      />
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.itemText}>
              {item.date}｜{item.client}｜{item.product}｜{item.item}
            </Text>
            <Text style={styles.itemText}>
              製程：{item.process}｜數量：{item.quantity}｜用時：{item.duration}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 12,
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#f2f2f2",
    padding: 12,
    borderRadius: 6,
    marginBottom: 12,
  },
  itemText: {
    fontSize: 14,
  },
});

export default HistoryScreen;
