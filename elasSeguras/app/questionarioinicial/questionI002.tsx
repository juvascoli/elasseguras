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
  const route = useRoute<any>();
  const { peso } = route.params;

  const navigation = useNavigation();
  const handlePress = (pPeso: number) => {
    navigation.navigate("questionarioinicial/questionI003", {
      peso: peso + pPeso,
    });
  };

  return (
    <Container
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Titulo style={{ flex: 1 }}>Você está segura neste momento?</Titulo>
      <View style={{ flex: 1, width: "100%" }}>
        <QuestionButton>
          <ButtonQuestionText onPress={() => handlePress(1)}>
            <IconEmoji>🙂</IconEmoji> Sim, estou segura.
          </ButtonQuestionText>
        </QuestionButton>
        <QuestionButton>
          <ButtonQuestionText onPress={() => handlePress(3)}>
            <IconEmoji>😭</IconEmoji> Não, o agressor está por perto
          </ButtonQuestionText>
        </QuestionButton>
        <QuestionButton>
          <ButtonQuestionText onPress={() => handlePress(2)}>
            <IconEmoji>😥</IconEmoji> Sim, por enquanto
          </ButtonQuestionText>
        </QuestionButton>
      </View>
    </Container>
  );
}
