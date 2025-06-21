import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header Roxo */}
      <LinearGradient colors={["#a64bf4", "#a64bf4"]} style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.iconCircle}>
            <Text style={styles.iconText}>😊</Text>
          </View>
          <View>
            <Text style={styles.welcomeText}>Bem vindo de volta,</Text>
            <Text style={styles.nameText}>Clécia</Text>
          </View>
          <View style={styles.headerIcons}>
            <TouchableOpacity onPress={() => navigation.navigate("homeFake")}>
              <Text style={styles.headerIcon}>↕️</Text>
            </TouchableOpacity>
            <Text style={styles.headerIcon}>⚙️</Text>
          </View>
        </View>
      </LinearGradient>

      {/* Conteúdo */}
      <Text style={styles.questionText}>O que você precisa?</Text>

      {/* Opções */}
      <TouchableOpacity onPress={() => navigation.navigate('relatarIncidente')} style={styles.option}>
        <Text style={styles.optionIcon}>📝</Text>
        <Text style={styles.optionText}>Relatar Incidente</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionIcon}>📍</Text>
        <Text style={styles.optionText}>Mapas de locais seguros</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionIcon}>💬</Text>
        <Text style={styles.optionText}>Chat de apoio</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionIcon}>ℹ️</Text>
        <Text style={styles.optionText}>Centro de recursos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionIcon}>📄</Text>
        <Text style={styles.optionText}>Meus relatos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  header: {
    height: 100,
    borderRadius: 8,
    marginBottom: 20,
    justifyContent: "center",
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  iconText: { fontSize: 24 },
  welcomeText: { color: "#fff", fontSize: 12 },
  nameText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  headerIcons: { flexDirection: "row", gap: 10 },
  headerIcon: { fontSize: 18, color: "#fff", marginLeft: 10 },
  questionText: { fontSize: 16, marginBottom: 10 },
  option: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 1,
  },
  optionIcon: { fontSize: 20, marginRight: 10 },
  optionText: { fontSize: 16 },
});
