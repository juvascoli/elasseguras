import { useNavigation } from "@react-navigation/native";
import {
  ButtonText,
  Container,
  Descritivo,
  MainButton,
  Titulo,
} from "./componentes/ui/style";

export default function Cadastro() {
  const navigation = useNavigation<any>();
  return (
    <Container>
      <Titulo style={{flex:1}}>Agora precisaremos de suas informações.</Titulo>
      <Descritivo style={{flex:1}}>
        As informações servem apenas para sua segurança e para que possamos
        oferecer o melhor suporte.
        {"\n\n"}Você pode sair do app a qualquer momento com um gesto de
        segurança.
      </Descritivo>
      <MainButton onPress={() => navigation.navigate("cadastro2")}>
        <ButtonText>Fazer cadastro</ButtonText>
      </MainButton>
    </Container>
  );
}
