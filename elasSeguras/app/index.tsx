import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
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
  const navigation = useNavigation();

  return (
    <Container style={{ alignItems: "center", backgroundColor: "#fff" }}>
      <View style={{ flex: 3 , alignContent:"flex-start"}}>
        <Logo
          source={require("@/assets/images/logo.png")}
          resizeMode="contain"
        />
        <Titulo
          style={{ fontWeight: "800", textAlign: "center", color: "#102B37" }}
        >
          ELAS {"\n"}
          SEGURAS
        </Titulo>
      </View>
      <View style={{ flex: 1 , width:"100%", alignItems:"center"}}>
        <MainButton onPress={() => navigation.navigate("conheca")}>
          <ButtonText>Começar</ButtonText>
        </MainButton>

        <LinkContainer onPress={() => navigation.navigate("login")}>
          <LinkText>Já tenho uma conta</LinkText>
        </LinkContainer>
      </View>
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
