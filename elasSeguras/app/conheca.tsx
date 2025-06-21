import { useNavigation } from "@react-navigation/native";
import {
  ButtonText,
  Container,
  Descritivo,
  MainButton,
  Titulo,
} from "./componentes/ui/style";

export default function Index() {
  const navigation = useNavigation();
  return (
    <Container
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Titulo>Conhecendo o aplicativo</Titulo>
      <Descritivo>
        Aqui, você pode conversar com sigilo, buscar orientação sobre seus
        direitos, receber apoio emocional ou pedir ajuda de forma silenciosa.
        Para garantir sua segurança e personalizar o atendimento, vamos precisar
        de algumas informações.
      </Descritivo>
      <MainButton
        onPress={() => navigation.navigate("questionarioinicial/questionI001")}
      >
        <ButtonText>Prosseguir</ButtonText>
      </MainButton>
    </Container>
  );
}
