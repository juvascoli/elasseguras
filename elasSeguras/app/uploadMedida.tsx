import { useNavigation } from "@react-navigation/native";
import type { DocumentPickerAsset } from "expo-document-picker";
import * as DocumentPicker from "expo-document-picker";
import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { CheckBox } from "react-native-web";
import {
  ButtonText,
  Container,
  MainButton,
  Titulo,
} from "./componentes/ui/style";

export default function App() {
  const [documento, setDocumento] = useState<DocumentPickerAsset | null>(null);
  const navigation = useNavigation<any>();
  const [step, setStep] = useState(1);
  const [cpf, setCpf] = useState("");
  const [processo, setProcesso] = useState("");
  const [verificarSMS, setVerificarSMS] = useState(true);
  const [verificarEmail, setVerificarEmail] = useState(true);
  const [codigo, setCodigo] = useState(["", "", "", "", "", ""]);

  const handleDocumento = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: "application/pdf",
    });
    if (result.assets && result.assets.length > 0) {
      setDocumento(result.assets[0]);
    }
  };

  const renderStep1 = () => (
    <Container>
      <Titulo>Faça upload ou digite o código do documento</Titulo>
      <View style={{ width: "100%", flex: 1 }}>
        <TextInput
          style={styles.input}
          placeholder="Seu CPF"
          value={cpf}
          onChangeText={setCpf}
        />
        <TextInput
          style={styles.input}
          placeholder="Número do processo"
          value={processo}
          onChangeText={setProcesso}
        />

        <TouchableOpacity style={styles.uploadButton} onPress={handleDocumento}>
          <Text style={styles.uploadText}>📄 Fazer upload do documento</Text>
        </TouchableOpacity>
      </View>
      {documento && <Text style={styles.pdfName}>{documento.name}</Text>}

      <MainButton onPress={() => setStep(2)}>
        <ButtonText>Confirmar</ButtonText>
      </MainButton>
    </Container>
  );

  const renderStep2 = () => (
    <Container>
      <Titulo>Falta pouco. Valide o e-mail ou número registrado.</Titulo>
      <View style={{ width: "100%", flex: 1 }}>
        <View style={styles.checkboxRow}>
          <CheckBox value={verificarSMS} onValueChange={setVerificarSMS} />
          <Text style={styles.checkboxLabel}>Verificar por sms</Text>
        </View>
        <View style={styles.checkboxRow}>
          <CheckBox value={verificarEmail} onValueChange={setVerificarEmail} />
          <Text style={styles.checkboxLabel}>Verificar por e-mail</Text>
        </View>
      </View>
      <MainButton onPress={() => setStep(3)}>
        <ButtonText>Confirmar</ButtonText>
      </MainButton>
    </Container>
  );

  const renderStep3 = () => (
    <Container>
      <Titulo>Código de validação</Titulo>
      <View style={{ width: "100%", flex: 1 }}>
        {/* <Text style={styles.smsCode}>SMS: Os números do código são 456183</Text> */}

        <View style={styles.codeRow}>
          {codigo.map((char, index) => (
            <TextInput
              key={index}
              style={styles.codeInput}
              maxLength={1}
              keyboardType="numeric"
              onChangeText={(text) => {
                const newCodigo = [...codigo];
                newCodigo[index] = text;
                setCodigo(newCodigo);
              }}
              value={char}
            />
          ))}
        </View>

        <Text style={styles.link}>Reenviar código (10s)</Text>
      </View>
      <MainButton onPress={() => setStep(4)}>
        <ButtonText>Confirmar</ButtonText>
      </MainButton>
    </Container>
  );

  const renderStep4 = () => (
    <Container>
      <Titulo>Perfeito! Você pode usar livremente o aplicativo.</Titulo>
      <Image
        source={require("../assets/images/fimCadastro.png")}
        style={styles.successImage}
        resizeMode="contain"
      />
      <MainButton onPress={() => navigation.navigate("home")}>
        <ButtonText>Confirmar</ButtonText>
      </MainButton>
    </Container>
  );

  return (
    <>
      {step === 1 && renderStep1()}
      {step === 2 && renderStep2()}
      {step === 3 && renderStep3()}
      {step === 4 && renderStep4()}
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    width: "100%",
  },
  uploadButton: {
    borderWidth: 1,
    borderColor: "#aaa",
    borderStyle: "dashed",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
    width: "100%",
  },
  uploadText: {
    color: "#7a00ff",
  },
  pdfName: {
    color: "#555",
    marginBottom: 10,
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  checkboxLabel: { marginLeft: 8 },
  smsCode: {
    marginBottom: 10,
    backgroundColor: "#eee",
    padding: 10,
  },
  codeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  codeInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: 40,
    height: 40,
    textAlign: "center",
    fontSize: 18,
    borderRadius: 6,
  },
  link: {
    color: "#7a00ff",
    textAlign: "center",
    marginBottom: 20,
  },
  successImage: {
    width: "100%",
    height: 200,
    marginVertical: 20,
  },
});
