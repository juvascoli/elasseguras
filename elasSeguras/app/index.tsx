import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import {
  ButtonText,
  Container,
  LinkContainer,
  LinkText,
  Logo,
  MainButton,
  Titulo,
} from "./componentes/ui/style";

export default function Index() {
  const navigation =
    useNavigation();

  return (
    <Container style={{ alignItems: 'center', backgroundColor:'#fff'}}>
      {/* Logo na parte superior */}
      <Logo source={require("@/assets/images/logo.png")} resizeMode="contain" />
      <Titulo>ELAS SEGURAS</Titulo>

      {/* Botão principal no meio/inferior */}
      <MainButton onPress={() => navigation.navigate("conheca")}>
        <ButtonText>Começar</ButtonText>
      </MainButton>

    

      {/* Link na parte inferior */}
      <LinkContainer onPress={() => navigation.navigate("login")}>
        <LinkText>Já tenho uma conta</LinkText>
      </LinkContainer>




    </Container>
  );
}
const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
