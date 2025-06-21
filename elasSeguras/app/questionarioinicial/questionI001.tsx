import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";

import {
  ButtonQuestionText,
  Container,
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
      <View style={{ flex: 1,width:'100%' }}>
        <QuestionButton>
          <ButtonQuestionText onPress={() => handlePress(4)}>
            🆘 Estou em situação de risco
          </ButtonQuestionText>
        </QuestionButton>
        <QuestionButton>
          <ButtonQuestionText onPress={() => handlePress(3)}>
            📚 Quero apoio emocional e orientação
          </ButtonQuestionText>
        </QuestionButton>
        <QuestionButton>
          <ButtonQuestionText onPress={() => handlePress(2)}>
            🧠 Saber sobre meus direitos
          </ButtonQuestionText>
        </QuestionButton>
        <QuestionButton>
          <ButtonQuestionText onPress={() => handlePress(0)}>
            👀 Apenas conhecendo o aplicativo
          </ButtonQuestionText>
        </QuestionButton>
      </View>
    </Container>
  );
}
