import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function Cadastro() {
const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agora precisaremos de suas informações.</Text>
      <Text style={styles.text}>
        As informações servem apenas para sua segurança e para que possamos oferecer o melhor suporte.
        {'\n\n'}Você pode sair do app a qualquer momento com um gesto de segurança.
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('cadastro2')}>
        <Text style={styles.buttonText}>Fazer cadastro</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
     padding: 24, 
     flex: 1,
    backgroundColor: '#E5E5E5',
    justifyContent: 'center'
   },
  title: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    marginBottom: 10 },
  text: { 
    fontSize: 15, 
    color: '#444', 
    marginBottom: 20 },
  button: {
    backgroundColor: '#A146F3', 
    padding: 14, 
    borderRadius: 8, 
    alignItems: 'center' },
  buttonText: { 
    color: '#fff', 
    fontWeight: 'bold' }
});
