
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function medidaProtetiva() {
const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Você possui medida protetiva?</Text>
      <Text style={styles.subtitle}>
        Irá permitir que você ative imediatamente a emergência.
      </Text>

      <TouchableOpacity style={styles.optionGreen}  onPress={() => {
  navigation.navigate('uploadMedida')}}>
        <Text style={styles.optionText}>✅ Sim</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionRed}>
        <Text style={styles.optionText}>❌ Não</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24, 
    flex: 1, 
    backgroundColor: '#fff', 
    justifyContent: 'center' 
  },
  title: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginBottom: 12 
  },
  subtitle: {
    fontSize: 14, 
    color: '#555', 
    marginBottom: 20
   },
  optionGreen: { 
    padding: 14, 
    backgroundColor: '#e2f8e5',
    borderRadius: 8, 
    marginBottom: 10 
  },
  optionRed: { 
    padding: 14, 
    backgroundColor: '#fde2e2',
    borderRadius: 8 },
  optionText: {
     fontWeight: 'bold', 
     fontSize: 16 }
});
