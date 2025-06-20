import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as DocumentPicker from 'expo-document-picker';

export default function UploadMedida() {
const [cpf, setCpf] = useState('');
const [processo, setProcesso] = useState('');
const [arquivo, setArquivo] = useState<string | null>(null);
const navigation = useNavigation<any>();



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faça upload ou digite o código do documento</Text>

      <TextInput style={styles.input} placeholder="Seu CPF" value={cpf} onChangeText={setCpf} />
      <TextInput style={styles.input} placeholder="Número do processo" value={processo} onChangeText={setProcesso} />

      <Text style={styles.ou}>ou</Text>

      <TouchableOpacity style={styles.uploadButton}>
        <Text style={styles.uploadText}>⬇ Fazer upload do documento</Text>
      </TouchableOpacity>

      {arquivo && <Text style={styles.arquivo}>{arquivo} ❌</Text>}

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('TelaValidacao')}>
        <Text style={styles.botaoTexto}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    backgroundColor: '#fff' },
  title: { 
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20 },
  input: { backgroundColor: '#eee',
     padding: 12, 
     borderRadius: 8, 
     marginBottom: 10 },
  ou: { textAlign: 'center', marginVertical: 10, color: '#999' },
  uploadButton: {
    borderWidth: 1,
    borderColor: '#A146F3',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 8,
  },
  uploadText: {
    color: '#A146F3' },
  arquivo: { 
    color: '#666', 
    marginBottom: 20 },
  botao: {
    backgroundColor: '#A146F3',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  botaoTexto: { 
    color: '#fff', 
    fontWeight: 'bold' },
});
