import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Calculadora() {
const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>O aplicativo ficará assim:</Text>

      <View style={styles.card}>
        <Text style={styles.emoji}>🧮</Text>
        <Text style={styles.appName}>Calculadora</Text>
      </View>

      <TouchableOpacity style={styles.buttonPrimary} onPress={() => navigation.navigate('cadastro1')}>
        <Text style={styles.buttonText}>Está perfeito</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('querCamuflar')}>
        <Text style={styles.secondaryText}>Quero de outro jeito</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 24,
    textAlign: 'center',
  },
  card: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    marginBottom: 40,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4
  },
  emoji: {
    fontSize: 100,
    marginBottom: 10,
  },
  appName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonPrimary: {
    backgroundColor: '#A146F3',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  secondaryText: {
    color: '#A146F3',
    fontSize: 14,
    marginTop: 5,
  }
});
