import { useNavigation, useRoute } from "@react-navigation/native";
import { Image, StyleSheet, Text } from "react-native";
import { ButtonText, Container, MainButton, Titulo } from "./componentes/ui/style";

export default function TelaContatoResumo() {
  const navigation = useNavigation<any>();
  const route = useRoute();
  const params =
    (route.params as {
      nome?: string;
      email?: string;
      telefone?: string;
      parentesco?: string;
      foto?: string;
    }) || {};

  const { nome, email, telefone, parentesco, foto } = params;

  return (
    <Container style={styles.container}>
      <Titulo>Contato confiável</Titulo>

      {foto && <Image source={{ uri: foto }} style={styles.foto} />}
      {nome && parentesco && (
        <Text style={styles.texto}>
          {nome} ({parentesco})
        </Text>
      )}
      {email && <Text style={styles.texto}>{email}</Text>}
      {telefone && <Text style={styles.texto}>{telefone}</Text>}

      <MainButton
        onPress={() => {
          navigation.navigate("home");
        }}
      >
        <ButtonText>Prosseguir</ButtonText>
      </MainButton>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  texto: {
    fontSize: 16,
    marginVertical: 5,
  },
  foto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  botao: {
    marginTop: 30,
    backgroundColor: "#A146F3",
    padding: 14,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  botaoTexto: {
    color: "#fff",
    fontWeight: "bold",
  },
});
