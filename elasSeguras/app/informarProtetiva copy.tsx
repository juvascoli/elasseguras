import { useNavigation, useRoute } from "@react-navigation/native";
import { View } from "react-native";
import {
  ButtonQuestionText,
  QuestionButton,
  Titulo,
} from "./componentes/ui/style";

export default function Index() {
  const navigation = useNavigation();
  const route = useRoute<any>();

  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Titulo>Faça upload ou digite o código do documento</Titulo>
      
      <QuestionButton>
        <ButtonQuestionText onPress={() => navigation.navigate("informarProtetiva")}>
          ✅ Sim
        </ButtonQuestionText>
      </QuestionButton>
      <QuestionButton>
        <ButtonQuestionText onPress={() => navigation.navigate("questionarioinicial/questionI001")}>
          ❌ Não
        </ButtonQuestionText>
      </QuestionButton>
    </View>
  );
}
