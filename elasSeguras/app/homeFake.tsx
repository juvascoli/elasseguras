import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const mainDishes = [
  {
    id: "1",
    name: "Pizza de mussarela",
    price: "R$ 24,00",
    img: "@/assets/images/pizza01.jpg",
  },
  {
    id: "2",
    name: "Pizza de mussarela",
    price: "R$ 24,00",
    img: "@/assets/images/pizza02.jpg",
  },
];

const veganDishes = [
  {
    id: "3",
    name: "Pizza de mussarela",
    price: "R$ 24,00",
    img: "@/assets/images/pizza03.jpg",
  },
  {
    id: "4",
    name: "Pizza de mussarela",
    price: "R$ 24,00",
    img: "@/assets/images/pizza04.jpg",
  },
];

export default function HomeFake() {
  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.img} style={styles.image} />
      <Text style={styles.cardText}>{item.name}</Text>
      <Text style={styles.cardPrice}>{item.price}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <LinearGradient colors={["#f78c1f", "#f78c1f"]} style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.iconCircle}>
            <Text style={styles.iconText}>🍕</Text>
          </View>
          <View>
            <Text style={styles.welcomeText}>Bem vindo à</Text>
            <Text style={styles.nameText}>Pizzaria</Text>
          </View>
          <View style={styles.headerIcons}>
            <TouchableOpacity onPress={() => navigation.navigate("home")}>
              <Text style={styles.headerIcon}>↕️</Text>
            </TouchableOpacity>
            <Text style={styles.headerIcon}>⚙️</Text>
          </View>
        </View>
      </LinearGradient>

      <ScrollView>
        <Text style={styles.menuTitle}>Veja nosso cardápio</Text>

        <Text style={styles.sectionTitle}>Pratos principais</Text>
        <FlatList
          data={mainDishes}
          horizontal={false}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />

        <Text style={styles.sectionTitle}>Pizzas veganas</Text>
        <FlatList
          data={veganDishes}
          horizontal={false}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </ScrollView>
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
  headerIcons: { flexDirection: "row" },
  headerIcon: { fontSize: 18, color: "#fff", marginLeft: 10 },
  questionText: { fontSize: 16, marginBottom: 10 },
  card: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 15,
    margin: 5,
    borderRadius: 8,
    alignItems: "center",
  },
  cardText: { fontSize: 14 },
  menuTitle: { fontSize: 16, fontWeight: "bold", marginVertical: 10 },
  sectionTitle: { fontSize: 14, fontWeight: "bold", marginVertical: 5 },
});
