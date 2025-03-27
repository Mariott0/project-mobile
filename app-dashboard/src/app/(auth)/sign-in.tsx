import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, TextInput, Button, HelperText } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  // Função de validação e navegação
  const handleSignIn = () => {
    if (!email || !password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Digite um e-mail válido.');
      return;
    }
    setError('');
    router.replace('/'); // Navega para Home após login bem-sucedido
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="lock-closed-outline" size={60} color="#4c669f" />
        <Text style={styles.title}>Bem-vindo de volta</Text>
        <Text style={styles.subtitle}>Faça login para continuar</Text>
      </View>

      {/* Formulário */}
      <View style={styles.form}>
        <TextInput
          label="E-mail"
          mode="outlined"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          theme={{ colors: { primary: '#4c669f' } }}
          left={<TextInput.Icon icon="email-outline" color="#4c669f" />}
        />

        <TextInput
          label="Senha"
          mode="outlined"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          style={styles.input}
          theme={{ colors: { primary: '#4c669f' } }}
          left={<TextInput.Icon icon="lock-outline" color="#4c669f" />}
          right={
            <TextInput.Icon
              icon={showPassword ? 'eye-off-outline' : 'eye-outline'}
              color="#4c669f"
              onPress={() => setShowPassword(!showPassword)}
            />
          }
        />

        <HelperText type="error" visible={!!error} style={styles.errorText}>
          {error}
        </HelperText>

        <Button
          mode="contained"
          onPress={handleSignIn}
          style={styles.signInButton}
          contentStyle={styles.buttonContent}
          labelStyle={styles.buttonLabel}
        >
          Entrar
        </Button>

        <TouchableOpacity
          style={styles.signUpLink}
          onPress={() => router.push('/sign-up')}
        >
          <Text style={styles.signUpText}>
            Não tem uma conta? <Text style={styles.signUpBold}>Crie uma agora</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  form: {
    paddingHorizontal: 20,
  },
  input: {
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  errorText: {
    fontSize: 14,
    marginBottom: 10,
  },
  signInButton: {
    backgroundColor: '#00b894',
    borderRadius: 25,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonContent: {
    paddingVertical: 8,
  },
  buttonLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  signUpLink: {
    marginTop: 20,
    alignItems: 'center',
  },
  signUpText: {
    fontSize: 16,
    color: '#666',
  },
  signUpBold: {
    fontWeight: 'bold',
    color: '#4c669f',
  },
});