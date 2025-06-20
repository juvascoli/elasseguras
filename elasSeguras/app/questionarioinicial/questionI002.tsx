import { useNavigation, useRoute } from "@react-navigation/native";
import { View } from "react-native";
import {
  ButtonQuestionText,
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
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Titulo>Você está segura </Titulo>
      <Titulo>neste momento?</Titulo>
      <QuestionButton>
        <ButtonQuestionText onPress={() => handlePress(1)}>
          🙂 Sim, estou segura.
        </ButtonQuestionText>
      </QuestionButton>
      <QuestionButton>
        <ButtonQuestionText onPress={() => handlePress(3)}>
          😭 Não, o agressor está por perto
        </ButtonQuestionText>
      </QuestionButton>
      <QuestionButton>
        <ButtonQuestionText onPress={() => handlePress(2)}>
          😥 Sim, por enquanto
        </ButtonQuestionText>
      </QuestionButton>
    </View>
  );
}
