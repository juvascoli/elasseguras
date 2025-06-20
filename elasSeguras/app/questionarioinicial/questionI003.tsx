import { useNavigation, useRoute } from "@react-navigation/native";
import { View } from "react-native";
import {
  ButtonQuestionText,
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
    if (pesoFinal > 2) {
      navigation.navigate("cadastroProtetiva");
    } else {
      navigation.navigate("preCadastro");
    }
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Titulo>O que está </Titulo>
      <Titulo>acontecendo?</Titulo>
      <QuestionButton>
        <ButtonQuestionText onPress={() => handlePress(1)}>
          😨 Estou sendo perseguida
        </ButtonQuestionText>
      </QuestionButton>
      <QuestionButton>
        <ButtonQuestionText onPress={() => handlePress(3)}>
          🤕 Fui agredida fisicamente
        </ButtonQuestionText>
      </QuestionButton>
      <QuestionButton>
        <ButtonQuestionText onPress={() => handlePress(2)}>
          😟 O agressor está por perto
        </ButtonQuestionText>
      </QuestionButton>
      <QuestionButton>
        <ButtonQuestionText onPress={() => handlePress(2)}>
          ❓ Não sei explicar
        </ButtonQuestionText>
      </QuestionButton>
    </View>
  );
}
