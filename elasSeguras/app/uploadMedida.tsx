import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import type { DocumentPickerAsset } from 'expo-document-picker';
import * as DocumentPicker from 'expo-document-picker';
import { useState } from 'react';
import { Image } from 'react-native';

import {
  StyleSheet, Text, TextInput, TouchableOpacity, View
} from 'react-native';

export default function App() {
  const [documento, setDocumento] = useState<DocumentPickerAsset | null>(null);
  const navigation = useNavigation<any>();
  const [step, setStep] = useState(1);
  const [cpf, setCpf] = useState('');
  const [processo, setProcesso] = useState('');
  const [verificarSMS, setVerificarSMS] = useState(true);
  const [verificarEmail, setVerificarEmail] = useState(true);
  const [codigo, setCodigo] = useState(['', '', '', '', '', '']);

  const handleDocumento = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: 'application/pdf',
    });
    if (result.assets && result.assets.length > 0) {
      setDocumento(result.assets[0]);
    }
  };

  const renderStep1 = () => (
    <View style={styles.container}>
      <Text style={styles.title}>Faça upload ou digite o código do documento</Text>
      <TextInput style={styles.input} placeholder="Seu CPF" value={cpf} onChangeText={setCpf} />
      <TextInput style={styles.input} placeholder="Número do processo" value={processo} onChangeText={setProcesso} />
      
      <TouchableOpacity style={styles.uploadButton} onPress={handleDocumento}>
        <Text style={styles.uploadText}>📄 Fazer upload do documento</Text>
      </TouchableOpacity>

      {documento && <Text style={styles.pdfName}>{documento.name}</Text>}

      <TouchableOpacity style={styles.confirmButton} onPress={() => setStep(2)}>
        <Text style={styles.confirmText}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );

  const renderStep2 = () => (
    <View style={styles.container}>
      <Text style={styles.title}>Falta pouco. Valide o e-mail ou número registrado.</Text>

      <View style={styles.checkboxRow}>
        <CheckBox value={verificarSMS} onValueChange={setVerificarSMS} />
        <Text style={styles.checkboxLabel}>Verificar por sms</Text>
      </View>
      <View style={styles.checkboxRow}>
        <CheckBox value={verificarEmail} onValueChange={setVerificarEmail} />
        <Text style={styles.checkboxLabel}>Verificar por e-mail</Text>
      </View>

      <TouchableOpacity style={styles.confirmButton} onPress={() => setStep(3)}>
        <Text style={styles.confirmText}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );

  const renderStep3 = () => (
    <View style={styles.container}>
      <Text style={styles.title}>Código de validação</Text>
      <Text style={styles.smsCode}>SMS: Os números do código são 456183</Text>

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

      <TouchableOpacity style={styles.confirmButton} onPress={() => setStep(4)}>
        <Text style={styles.confirmText}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );

  const renderStep4 = () => (
    <View style={styles.container}>
      <Text style={styles.title}>Perfeito! Você pode usar livremente o aplicativo.</Text>
    <Image
      source={require('../assets/images/fimCadastro.png')} 
      style={styles.successImage}
      resizeMode="contain"
    />
      <TouchableOpacity style={styles.confirmButton} onPress={() => navigation.navigate('home')}>
        <Text style={styles.confirmText}>Confirmar</Text>
      </TouchableOpacity>
    </View>
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
  container: {
    flex: 1, 
    padding: 20, 
    justifyContent: 'center',
  },
  title: {
    fontSize: 20, 
    fontWeight: 'bold',
     marginBottom: 20,
  },
  input: {
    borderWidth: 1, 
    borderColor: '#ccc', 
    padding: 10, 
    borderRadius: 8, 
    marginBottom: 10,
  },
  uploadButton: {
    borderWidth: 1, 
    borderColor: '#aaa', 
    borderStyle: 'dashed',
    padding: 15, 
    borderRadius: 8, 
    alignItems: 'center', 
    marginBottom: 10,
  },
  uploadText: { 
    color: '#7a00ff' },
  pdfName: { 
    color: '#555', 
    marginBottom: 10 },
  confirmButton: {
    backgroundColor: '#7a00ff', 
    padding: 15, 
    borderRadius: 8, 
    alignItems: 'center',
  },
  confirmText: { 
    color: '#fff', 
    fontWeight: 'bold' },
  checkboxRow: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 10,
  },
  checkboxLabel: { marginLeft: 8 },
  smsCode: { 
    marginBottom: 10, 
    backgroundColor: '#eee', 
    padding: 10
   },
  codeRow: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginVertical: 20,
  },
  codeInput: {
    borderWidth: 1, 
    borderColor: '#ccc', 
    width: 40, 
    height: 40,
    textAlign: 'center', 
    fontSize: 18, 
    borderRadius: 6,
  },
  link: {
    color: 
    '#7a00ff', 
    textAlign: 'center', 
    marginBottom: 20,
  },
  successImage: {
  width: '100%',
  height: 200,
  marginVertical: 20,
},
});
