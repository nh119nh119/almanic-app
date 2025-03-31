// screens/HomeScreen.tsx import React from "react"; import { View, Text, TouchableOpacity, StyleSheet } from "react-native"; import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => { const navigation = useNavigation();

return ( <View style={styles.container}> <Text style={styles.greeting}>Alan，早安！</Text> <Text style={styles.subGreeting}>今天也要一起努力工作唷！</Text>

<View style={styles.buttonRow}>
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate("TaskStart")}
    >
      <Text style={styles.buttonText}>開始計時</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate("History")}
    >
      <Text style={styles.buttonText}>歷史工時</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate("Export")}
    >
      <Text style={styles.buttonText}>匯出報表</Text>
    </TouchableOpacity>
  </View>
</View>

); };

const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: "#F5FCFF", alignItems: "center", justifyContent: "center", }, greeting: { fontSize: 24, fontWeight: "bold", marginBottom: 8, }, subGreeting: { fontSize: 16, marginBottom: 32, }, buttonRow: { flexDirection: "row", justifyContent: "space-between", gap: 16, }, button: { backgroundColor: "#3bb6a2", paddingVertical: 12, paddingHorizontal: 20, borderRadius: 8, elevation: 2, }, buttonText: { color: "#fff", fontSize: 16, }, });

export default HomeScreen;

