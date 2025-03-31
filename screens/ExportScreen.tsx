// screens/ExportScreen.tsx
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";

const ExportScreen = () => {
  const [reportType, setReportType] = useState<"default" | "custom" | null>(null);

  const handleExport = () => {
    if (!reportType) {
      Alert.alert("請選擇報表類型");
      return;
    }
    Alert.alert("匯出成功", `報表類型：${reportType === "default" ? "預設報表" : "個人報表"}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>匯出報表</Text>

      <TouchableOpacity
        style={[styles.option, reportType === "default" && styles.selected]}
        onPress={() => setReportType("default")}
      >
        <Text style={styles.optionText}>使用預設報表</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.option, reportType === "custom" && styles.selected]}
        onPress={() => setReportType("custom")}
      >
        <Text style={styles.optionText}>使用個人報表（拍照／PDF）</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.exportButton} onPress={handleExport}>
        <Text style={styles.exportText}>匯出</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
  },
  option: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 14,
    borderRadius: 8,
    marginBottom: 16,
  },
  selected: {
    borderColor: "#3bb6a2",
    backgroundColor: "#e5f7f3",
  },
  optionText: {
    fontSize: 16,
    textAlign: "center",
  },
  exportButton: {
    marginTop: 24,
    backgroundColor: "#3bb6a2",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  exportText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default ExportScreen;
