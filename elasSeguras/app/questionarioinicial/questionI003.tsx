import { useNavigation, useRoute } from "@react-navigation/native";
import { View } from "react-native";
import {
  ButtonQuestionText,
  Container,
  IconEmoji,
  QuestionButton,
  Titulo,
} from "../componentes/ui/style";

export default function Index() {
  const navigation = useNavigation();
  const route = useRoute<any>();
  const { peso } = route.params;
  const handlePress = (pPeso: number) => {
    const pesoFinal = pPeso + peso;
    console.log("Peso final", pesoFinal);
    if (pesoFinal > 3) {
      navigation.navigate("medidaProtetiva");
    } else {
      navigation.navigate("cadastro1");
    }
  };
  return (
    <Container
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Titulo>O que está acontecendo?</Titulo>
      <View style={{ flex: 1, width: "100%" }}>
        <QuestionButton>
          <ButtonQuestionText onPress={() => handlePress(1)}>
            <IconEmoji>😨</IconEmoji> Estou sendo perseguida
          </ButtonQuestionText>
        </QuestionButton>
        <QuestionButton>
          <ButtonQuestionText onPress={() => handlePress(3)}>
            <IconEmoji>🤕</IconEmoji> Fui agredida fisicamente
          </ButtonQuestionText>
        </QuestionButton>
        <QuestionButton>
          <ButtonQuestionText onPress={() => handlePress(2)}>
            <IconEmoji>😟</IconEmoji> O agressor está por perto
          </ButtonQuestionText>
        </QuestionButton>
        <QuestionButton>
          <ButtonQuestionText onPress={() => handlePress(2)}>
            <IconEmoji>❓</IconEmoji> Não sei explicar
          </ButtonQuestionText>
        </QuestionButton>
      </View>
    </Container>
  );
}
