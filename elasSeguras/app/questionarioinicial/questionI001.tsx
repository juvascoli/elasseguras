import { useNavigation } from "@react-navigation/native";
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
  const handlePress = (peso: number) => {
    navigation.navigate("questionarioinicial/questionI002", { peso });
  };
  return (
    <Container
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Titulo>Por que está usando esse aplicativo?</Titulo>
      <View style={{ flex: 1, width: "100%" }}>
        <QuestionButton>
          <ButtonQuestionText onPress={() => handlePress(4)}>
            <IconEmoji>🆘</IconEmoji>Estou em situação de risco
          </ButtonQuestionText>
        </QuestionButton>
        <QuestionButton>
          <ButtonQuestionText onPress={() => handlePress(3)}>
            <IconEmoji>📚</IconEmoji> Quero apoio emocional e orientação
          </ButtonQuestionText>
        </QuestionButton>
        <QuestionButton>
          <ButtonQuestionText onPress={() => handlePress(2)}>
            <IconEmoji>🧠</IconEmoji> Saber sobre meus direitos
          </ButtonQuestionText>
        </QuestionButton>
        <QuestionButton>
          <ButtonQuestionText onPress={() => handlePress(0)}>
           <IconEmoji>👀</IconEmoji> Apenas conhecendo o aplicativo
          </ButtonQuestionText>
        </QuestionButton>
      </View>
    </Container>
  );
}
