import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useLocalSearchParams, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function User() {
  const { id } = useLocalSearchParams();
  const userId = id ? String(id) : '1'; // Garante que id seja string e define '1' como padrão

  // Função para voltar à tela anterior
  const handleBack = () => {
    router.back();
  };

  // Função para simular ação de contato
  const handleContact = () => {
    alert(`Entrando em contato com o usuário ID ${userId}`);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Detalhes do Usuário</Text>
      </View>

      {/* Avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: `https://randomuser.me/api/portraits/men/${userId}.jpg` }}
          style={styles.avatar}
        />
        <Text style={styles.userName}>Usuário {userId}</Text>
        <Text style={styles.userRole}>Paciente</Text>
      </View>

      {/* Informações do Usuário */}
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Ionicons name="mail-outline" size={20} color="#4c669f" />
          <Text style={styles.infoText}>usuario{userId}@email.com</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="call-outline" size={20} color="#4c669f" />
          <Text style={styles.infoText}>(11) 9{userId.padStart(4, '0')}-1234</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="calendar-outline" size={20} color="#4c669f" />
          <Text style={styles.infoText}>Nascido em 01/01/1995</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="medkit-outline" size={20} color="#4c669f" />
          <Text style={styles.infoText}>Plano: Básico</Text>
        </View>
      </View>

      {/* Botões de Ação */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.actionButton} onPress={handleContact}>
          <Ionicons name="chatbubble-ellipses-outline" size={20} color="#fff" />
          <Text style={styles.actionButtonText}>Contato</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.detailsButton}>
          <Text style={styles.detailsButtonText}>Ver Histórico</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4c669f',
    paddingVertical: 15,
    paddingHorizontal: 20,
    elevation: 3,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 15,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  userRole: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  infoContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 15,
    marginHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  buttonContainer: {
    marginTop: 30,
    paddingHorizontal: 50,
  },
  actionButton: {
    flexDirection: 'row',
    backgroundColor: '#00b894',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
  },
  detailsButton: {
    backgroundColor: '#4c669f',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  detailsButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});