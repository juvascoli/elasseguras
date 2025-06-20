import { HeaderShownContext, HeaderTitle } from "@react-navigation/elements";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false}} />
      <Stack.Screen name="conheca" options={{ title: "About" }} />
      <Stack.Screen name="camuflagem" options={{headerTitle: ''}} />
      <Stack.Screen name="querCamuflar" options={{headerTitle: ''}} />
      <Stack.Screen name="calculadora" options={{headerTitle: ''}} />
      <Stack.Screen name="cadastro1" options={{headerTitle: ''}} />
      <Stack.Screen name="cadastro2" options={{headerTitle: ''}} />
      <Stack.Screen name="contatoConfiavel" options={{headerTitle: ''}} />
      <Stack.Screen name="medidaProtetiva" options={{headerTitle: ''}} />
      <Stack.Screen name="telaContatoResumo" options={{headerTitle: ''}} />
      <Stack.Screen name="uploadMedida" options={{headerTitle: ''}} />

    </Stack>
  );
}
