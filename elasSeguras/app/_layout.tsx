import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="conheca" options={{ title: "Bem vinda" }} />
      <Stack.Screen name="questionarioinicial/questionI001" options={{ headerShown: false }} />
      <Stack.Screen name="questionarioinicial/questionI002" options={{ headerShown: false }} />
      <Stack.Screen name="questionarioinicial/questionI003" options={{ headerShown: false }} />
      <Stack.Screen name="cadastroProtetiva" options={{ headerShown: false }} />
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen name="homeFake" options={{ headerShown: false }} />


    </Stack>
  );
}
