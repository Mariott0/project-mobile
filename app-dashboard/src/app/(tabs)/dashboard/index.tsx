import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Dashboard() {
  // Função para voltar ao Home
  const handleNavigate = () => {
    router.replace('/');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Painel de Controle</Text>
        <TouchableOpacity onPress={handleNavigate}>
          <Ionicons name="home-outline" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Conteúdo do Dashboard */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* Card de Boas-vindas */}
        <View style={styles.card}>
          <Ionicons name="person-circle-outline" size={40} color="#4c669f" />
          <Text style={styles.cardTitle}>Bem-vindo(a)!</Text>
          <Text style={styles.cardText}>Aqui estão suas informações e ações rápidas.</Text>
        </View>

        {/* Card de Estatísticas */}
        <View style={styles.card}>
          <Ionicons name="stats-chart-outline" size={40} color="#4c669f" />
          <Text style={styles.cardTitle}>Estatísticas</Text>
          <Text style={styles.cardText}>Pacientes atendidos: 25</Text>
          <Text style={styles.cardText}>Consultas hoje: 3</Text>
        </View>

        {/* Card de Ações Rápidas */}
        <View style={styles.card}>
          <Ionicons name="flash-outline" size={40} color="#4c669f" />
          <Text style={styles.cardTitle}>Ações Rápidas</Text>
          <TouchableOpacity style={styles.cardButton}>
            <Text style={styles.cardButtonText}>Nova Consulta</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardButton}>
            <Text style={styles.cardButtonText}>Ver Agenda</Text>
          </TouchableOpacity>
        </View>

        {/* Botão de Logout/Home */}
        <TouchableOpacity style={styles.actionButton} onPress={handleNavigate}>
          <Ionicons name="log-out-outline" size={24} color="#fff" />
          <Text style={styles.actionButtonText}>Voltar ao Home</Text>
        </TouchableOpacity>
      </ScrollView>
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
    justifyContent: 'space-between',
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
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
  },
  cardText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  cardButton: {
    backgroundColor: '#00b894',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 10,
    width: '80%',
    alignItems: 'center',
  },
  cardButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  actionButton: {
    flexDirection: 'row',
    backgroundColor: '#e63946',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
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
});