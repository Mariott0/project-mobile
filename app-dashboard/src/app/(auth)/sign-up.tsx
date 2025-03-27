import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function SignUp() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);
  const [errors, setErrors] = useState({ name: '', email: '', password: '' });

  // Função de validação e cadastro
  const handleSignUp = () => {
    let valid = true;
    const newErrors = { name: '', email: '', password: '' };

    if (!name.trim()) {
      newErrors.name = 'Nome é obrigatório';
      valid = false;
    }
    if (!email.includes('@') || !email.includes('.')) {
      newErrors.email = 'E-mail inválido';
      valid = false;
    }
    if (password.length < 6) {
      newErrors.password = 'Senha deve ter pelo menos 6 caracteres';
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      console.log('Dados do cadastro:', { name, email, password });
      // Aqui você pode adicionar a lógica para enviar os dados a uma API
      router.push('/dashboard'); // Redireciona após sucesso (simulado)
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Criar Conta</Text>
        <Text style={styles.subtitle}>Junte-se a nós!</Text>
      </View>

      <View style={styles.formContainer}>
        {/* Campo Nome */}
        <TextInput
          label="Nome"
          mode="outlined"
          value={name}
          onChangeText={setName}
          style={styles.input}
          left={<TextInput.Icon icon={() => <Ionicons name="person-outline" size={20} color="#4c669f" />} />}
          error={!!errors.name}
        />
        {errors.name ? <Text style={styles.errorText}>{errors.name}</Text> : null}

        {/* Campo E-mail */}
        <TextInput
          label="E-mail"
          mode="outlined"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          left={<TextInput.Icon icon={() => <Ionicons name="mail-outline" size={20} color="#4c669f" />} />}
          error={!!errors.email}
        />
        {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}

        {/* Campo Senha */}
        <TextInput
          label="Senha"
          mode="outlined"
          secureTextEntry={secureText}
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          right={
            <TextInput.Icon
              icon={() => (
                <TouchableOpacity onPress={() => setSecureText(!secureText)}>
                  <Ionicons
                    name={secureText ? 'eye-off-outline' : 'eye-outline'}
                    size={20}
                    color="#4c669f"
                  />
                </TouchableOpacity>
              )}
            />
          }
          left={<TextInput.Icon icon={() => <Ionicons name="lock-closed-outline" size={20} color="#4c669f" />} />}
          error={!!errors.password}
        />
        {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}

        {/* Botão Criar Conta */}
        <Button
          mode="contained"
          onPress={handleSignUp}
          style={styles.button}
          contentStyle={styles.buttonContent}
          labelStyle={styles.buttonLabel}
        >
          Criar Conta
        </Button>

        {/* Link para Login */}
        <TouchableOpacity onPress={() => router.push('/sign-in')}>
          <Text style={styles.loginText}>
            Já tem uma conta? <Text style={styles.loginLink}>Faça login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4c669f',
  },
  header: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 5,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    marginTop: 5,
  },
  formContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    paddingTop: 40,
  },
  input: {
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#00b894',
    borderRadius: 25,
  },
  buttonContent: {
    paddingVertical: 8,
  },
  buttonLabel: {
    fontSize: 18,
    fontWeight: '600',
  },
  loginText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#666',
  },
  loginLink: {
    color: '#00b894',
    fontWeight: 'bold',
  },
  errorText: {
    color: '#e63946',
    fontSize: 14,
    marginBottom: 10,
    marginLeft: 5,
  },
});