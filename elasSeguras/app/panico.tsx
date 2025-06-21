import { useNavigation } from "@react-navigation/native";
import { useRef } from "react";
import { Alert, Pressable, StyleSheet, Text } from "react-native";
import { Container, Descritivo, Titulo } from "./componentes/ui/style";

export default function Panico() {
  const navigation = useNavigation<any>();
  const pressTimer = useRef(null);

  const handlePressIn = () => {
    // Quando pressionado, inicia o temporizador de 3 segundos
    pressTimer.current = setTimeout(() => {
      console.log("Chamada acionada!");
      Alert.alert("Alerta", "Chamada acionada!");
    }, 3000);
  };

  const handlePressOut = () => {
    // Se soltar antes de 3 segundos, cancela a ação
    if (pressTimer.current) {
      clearTimeout(pressTimer.current);
      pressTimer.current = null;
      console.log("Pressão cancelada");
    }
  };
  return (
    <Container style={{alignItems: "center"}}>
      <Titulo style={{ flex: 1 }}>
        Acionar Emergência
      </Titulo>
      <Pressable
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>!</Text>
      </Pressable>
      <Descritivo>Segure o botão para enviar um alerta</Descritivo>
    </Container>
  );
}
const styles = StyleSheet.create({
  button: {
    width: 250,
    height: 250,
    borderRadius: 120, // circular
    backgroundColor: "#f44336", // vermelho
    justifyContent: "center",
    alignItems: "center",
    elevation: 5, // sombra no Android
    shadowColor: "#000", // sombra no iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    fontSize: 80,
    color: "#fff",
    fontWeight: "bold",
  },
});
