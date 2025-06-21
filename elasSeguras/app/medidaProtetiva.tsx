import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Container, Descritivo, Titulo } from "./componentes/ui/style";

export default function medidaProtetiva() {
  const navigation = useNavigation<any>();
  return (
    <Container>
      <Titulo style={{ flex: 1 }}>Você possui medida protetiva?</Titulo>
      <Descritivo style={{flex:1}}>
        Irá permitir que você ative imediatamente a emergência.
      </Descritivo>
      <View style={{ flex: 4 , width:'100%'}}>
        <TouchableOpacity
          style={styles.optionGreen}
          onPress={() => {
            navigation.navigate("uploadMedida");
          }}
        >
          <Text style={styles.optionText}>✅ Sim</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.optionRed}
          onPress={() => navigation.navigate("cadastro1")}
        >
          <Text style={styles.optionText}>❌ Não</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  optionGreen: {
    padding: 14,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 10,
  },
  optionRed: {
    padding: 14,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  optionText: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
