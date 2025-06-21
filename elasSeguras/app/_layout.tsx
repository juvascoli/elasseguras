import { Stack, useNavigation } from "expo-router";
import { Text, TouchableOpacity } from "react-native";

export default function RootLayout() {
    const navigation = useNavigation();
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#E5E5E5", // Cor de fundo do header
        },
        headerTintColor: "#fff", // Cor dos ícones e texto do header
        headerTitleStyle: {
          fontWeight: "bold", // Negrito no título
          fontSize: 22,
        },
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate("homeFake")}>
            <Text style={{ fontSize: 18, color: "#fff", marginLeft: 10 }}>↕️</Text>
          </TouchableOpacity>
        ),
        headerTitleAlign: "center", // Alinhamento centralizado
      }}
    >
      <Stack.Screen name="index" options={{ headerTitle: "",headerShown: false }} />
      <Stack.Screen name="conheca" options={{ headerTitle: "",headerShown: true }} />
      <Stack.Screen
        name="questionarioinicial/questionI001"
        options={{ headerTitle: "",headerShown: true }}
      />
      <Stack.Screen
        name="questionarioinicial/questionI002"
        options={{ headerTitle: "",headerShown: true }}
      />
      <Stack.Screen
        name="questionarioinicial/questionI003"
        options={{ headerTitle: "",headerShown: true }}
      />
      <Stack.Screen name="cadastroProtetiva" options={{ headerTitle: "",headerShown: true }} />
      <Stack.Screen
        name="camuflagem"
        options={{ headerTitle: "", headerShown: true }}
      />
      <Stack.Screen
        name="querCamuflar"
        options={{ headerTitle: "", headerShown: true }}
      />
      <Stack.Screen
        name="calculadora"
        options={{ headerTitle: "", headerShown: true }}
      />
      <Stack.Screen
        name="cadastro1"
        options={{ headerTitle: "", headerShown: true }}
      />
      <Stack.Screen
        name="cadastro2"
        options={{ headerTitle: "", headerShown: true }}
      />
      <Stack.Screen
        name="contatoConfiavel"
        options={{ headerTitle: "", headerShown: true }}
      />
      <Stack.Screen
        name="medidaProtetiva"
        options={{ headerTitle: "", headerShown: true }}
      />
      <Stack.Screen
        name="telaContatoResumo"
        options={{ headerTitle: "", headerShown: true }}
      />
      <Stack.Screen
        name="uploadMedida"
        options={{ headerTitle: "", headerShown: true }}
      />
      <Stack.Screen name="home" options={{ headerShown: true }} />
      <Stack.Screen name="homeFake" options={{ headerShown: true }} />
      <Stack.Screen name="login" options={{ headerTitle: "" }} />
      <Stack.Screen name="relatarIncidente" options={{ headerTitle: "" }} />
      <Stack.Screen name="panico" options={{ headerTitle: "" }} />
    </Stack>
  );
}
