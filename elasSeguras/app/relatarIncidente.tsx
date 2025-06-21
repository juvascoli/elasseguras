import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function RelatarIncidente() {
  const navigation = useNavigation();
  const [tipoViolencia, setTipoViolencia] = useState('');
  const [formaAgressao, setFormaAgressao] = useState('');
  const [descricao, setDescricao] = useState('');

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Relatar Incidente</Text>

      <TextInput
        style={styles.input}
        placeholder="Tipo de Violência"
        value={tipoViolencia}
        onChangeText={setTipoViolencia}
      />

      <TextInput
        style={styles.input}
        placeholder="Forma de agressão"
        value={formaAgressao}
        onChangeText={setFormaAgressao}
      />

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Descreva o ocorrido (opcional)"
        value={descricao}
        onChangeText={setDescricao}
        multiline
        maxLength={255}
      />
      <Text style={styles.contador}>{descricao.length}/255</Text>

      <TouchableOpacity style={styles.enviarButton} onPress={() => navigation.navigate('home')}>
        <Text style={styles.enviarText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, 
    padding: 20, 
    backgroundColor: '#fff' },
  voltar: { 
    fontSize: 20, 
    marginBottom: 10 },
  title: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    marginBottom: 20 },
  input: {
    borderWidth: 1, 
    borderColor: '#ccc', 
    borderRadius: 8,
    padding: 12, 
    marginBottom: 12, 
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  contador: { 
    textAlign: 'right', 
    marginBottom: 20, 
    color: '#999' },
  enviarButton: {
    backgroundColor: '#A239EA',
    padding: 14,
    borderRadius: 8, 
    alignItems: 'center'
  },
  enviarText: { 
    color: '#fff', 
    fontSize: 16 },
});
