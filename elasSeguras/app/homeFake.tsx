import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "expo-router";
import React from "react";
import {
  Image,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Container } from "./componentes/ui/style";

export default function HomeFake() {
  const navigation = useNavigation();
  const pizzaImage01 = require("@/assets/images/pizza01.jpg");
  const pizzaImage02 = require("@/assets/images/pizza02.jpg");
  const pizzaImage03 = require("@/assets/images/pizza03.jpg");
  const pizzaImage04 = require("@/assets/images/pizza04.jpg");
  const DATA = [
    {
      title: "Pratos principais",
      data: [[
        {
          id: "1",
          name: "Pizza de lombinho",
          price: "R$ 59,99",
          img: pizzaImage01,
        },
        { id: "2", name: "Pizza de 1/2", price: "R$ 59,99", img: pizzaImage02 },]
      ],
    },
    {
      title: "Pizzas veganas",
      data: [
       [ {
          id: "3",
          name: "Pizza de calabresa",
          price: "R$ 49,99",
          img: pizzaImage03,
        },
        {
          id: "4",
          name: "Pizza de portuguesa",
          price: "R$ 59,99",
          img: pizzaImage04,
        }],
      ],
    },
  ];
  const renderItem = ({ item }) => (
    <View style={styles.row}>
      {item.map((pizza) => (
        <View key={pizza.id} style={styles.card}>
          <Image source={pizza.img} style={styles.image} />
          <Text style={styles.cardText}>{pizza.name}</Text>
          <Text style={styles.cardPrice}>{pizza.price}</Text>
        </View>
      ))}
    </View>
  );
  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={styles.sectionTitle}>{title}</Text>
  );
  return (
    <Container>
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
          </View>
        </View>
      </LinearGradient>

      <Text style={styles.menuTitle}>Veja nosso cardápio</Text>

      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </Container>
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
  image: { width: 100, height: 100, borderRadius: 8, marginBottom: 5 },
    row: { flexDirection: 'row', justifyContent: 'space-between' },
      cardPrice: { fontSize: 12, color: '#333' }


});
