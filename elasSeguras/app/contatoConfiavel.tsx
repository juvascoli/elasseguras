import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Modal } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

export default function contatoConfiavel() {
const navigation = useNavigation<any>();

const [nome, setNome] = useState('');
const [email, setEmail] = useState('');
const [telefone, setTelefone] = useState('');
const [parentesco, setParentesco] = useState('');
const [foto, setFoto] = useState<string | null>(null);
const [mostrarResumo, setMostrarResumo] = useState(false);

const selecionarFoto = async () => {
const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permission.granted === false) return;

 const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });
    if (!result.canceled) {
  const uri = result.assets[0].uri; 
  setFoto(uri);
}

  }
const handleAdicionar = () => {
    if (nome && email && telefone && parentesco) {
      setMostrarResumo(true);
    } else {
      alert("Preencha todos os campos");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Preencha os dados do seu contato mais confiável</Text>

      <TouchableOpacity onPress={selecionarFoto} style={styles.fotoBox}>
        {foto ? (
          <Image source={{ uri: foto }} style={styles.foto} />
        ) : (
          <Text style={styles.fotoTexto}>📷 Enviar foto</Text>
        )}
      </TouchableOpacity>

      <TextInput placeholder="Nome" style={styles.input} value={nome} onChangeText={setNome} />
      <TextInput placeholder="E-mail" style={styles.input} value={email} onChangeText={setEmail} />
      <TextInput placeholder="Telefone" style={styles.input} value={telefone} onChangeText={setTelefone} />

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={parentesco}
          onValueChange={(itemValue) => setParentesco(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Parentesco" value="" />
          <Picker.Item label="Mãe" value="mãe" />
          <Picker.Item label="Pai" value="pai" />
          <Picker.Item label="Amigo(a)" value="amigo" />
          <Picker.Item label="Outro" value="outro" />
        </Picker>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleAdicionar}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>

      {/* Modal de resumo */}
      <Modal visible={mostrarResumo} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Contato</Text>
            {foto && <Image source={{ uri: foto }} style={styles.modalImage} />}
            <Text style={styles.modalText}>{nome}</Text>
            <Text style={styles.modalText}>{email}</Text>
            <Text style={styles.modalText}>{telefone}</Text>
            <Text style={styles.modalText}>{parentesco}</Text>
            <TouchableOpacity
            style={styles.button}
           onPress={() => {
  navigation.navigate('telaContatoResumo', {
    nome,
    email,
    telefone,
    parentesco,
    foto,
  });
  setMostrarResumo(false);
}}>
  <Text style={styles.buttonText}>Confirmar</Text>
</TouchableOpacity>


            <TouchableOpacity onPress={() => setMostrarResumo(false)}>
              <Text style={{ color: '#A146F3', marginTop: 10 }}>✖ Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24, flex: 1, backgroundColor: '#fff' },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 16 },
  input: {
    backgroundColor: '#eee',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  button: {
    backgroundColor: '#A146F3',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  fotoBox: {
    backgroundColor: '#f2f2f2',
    height: 100,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12
  },
  fotoTexto: { fontSize: 16, color: '#777' },
  foto: { width: 100, height: 100, borderRadius: 50 },
  modalContainer: {
    flex: 1,
    backgroundColor: '#000000aa',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%'
  },
  modalTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 12
  },
  modalText: {
    fontSize: 15,
    marginVertical: 2
  },
  modalImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10
  }
});
