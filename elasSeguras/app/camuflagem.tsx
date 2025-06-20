import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CamuflagemScreen() {
const navigation = useNavigation<any>();

  const handleCamuflar = () => {
    Alert.alert('Camuflagem ativada!');
    navigation.navigate('querCamuflar')
  };

  const handleNaoPreciso = () => {
    Alert.alert('Você escolheu não camuflar agora.');
    navigation.navigate('cadastro1') 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deseja camuflar o aplicativo?</Text>

      <Text style={styles.subtitle}>
        Podemos mudar o visual para parecer um app comum, como tutoriais de beleza, agenda ou receitas.
        {"\n\n"}Você poderá alternar de volta com um gesto secreto.
      </Text>

      <TouchableOpacity style={styles.buttonYes} onPress={handleCamuflar}>
        <Ionicons name="checkmark-circle" size={20} color="#fff" />
        <Text style={styles.buttonText}>Sim, quero camuflar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonNo} onPress={handleNaoPreciso}>
        <Ionicons name="close-circle" size={20} color="#fff" />
        <Text style={styles.buttonText}>Não preciso agora</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#E5E5E5', 
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 32,
  },
  buttonYes: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  buttonNo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F44336',
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 8,
  },
});
