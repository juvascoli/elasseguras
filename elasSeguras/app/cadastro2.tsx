import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import {
  ButtonText,
  Container,
  MainButton,
  Titulo,
} from "./componentes/ui/style";

export default function Cadastro2() {
  const navigation = useNavigation<any>();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <Container>
      <Titulo style={{ flex: 1 }}>
        Preencha seus dados para realizar o cadastro.
      </Titulo>
      <View style={{ flex: 1, width:'100%' }}>
        <TextInput
          placeholder="Nome"
          style={styles.input}
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          placeholder="E-mail"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Telefone"
          style={styles.input}
          value={telefone}
          onChangeText={setTelefone}
        />
        <TextInput
          placeholder="Senha"
          style={styles.input}
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />
      </View>
      <MainButton onPress={() => navigation.navigate("contatoConfiavel")}>
        <ButtonText>Prosseguir</ButtonText>
      </MainButton>
    </Container>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    width: "100%",
  },
});
