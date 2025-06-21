import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [lembrar, setLembrar] = useState(false);
  const navigation = useNavigation<any>();

 

  const handleForgotPassword = () => {
    console.log('Esqueci a senha');
  };



  return (
    <View style={styles.container}>

      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <View style={styles.rememberForgotContainer}>
        <View style={styles.rememberContainer}>
          <Switch value={lembrar} onValueChange={setLembrar} />
          <Text style={styles.rememberText}>Lembrar</Text>
        </View>

        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotText}>Esqueci a senha</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.orLoginSocial}>Ou faça login social</Text>

      <TouchableOpacity onPress={() => navigation.navigate("home")} style={styles.googleButton}>
        <Text style={styles.googleIcon}>G</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("home")} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  backButton: {
    marginBottom: 20,
  },
  backButtonText: {
    fontSize: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  rememberForgotContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberText: {
    marginLeft: 8,
    fontSize: 16,
  },
  forgotText: {
    color: '#007BFF',
    fontSize: 16,
  },
  orLoginSocial: {
    textAlign: 'center',
    color: '#999',
    marginBottom: 15,
  },
  googleButton: {
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 6,
    padding: 10,
    marginBottom: 30,
  },
  googleIcon: {
    fontSize: 20,
  },
  loginButton: {
    backgroundColor: '#A239EA',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
  },
});
