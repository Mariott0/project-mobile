import { View, Text, StyleSheet, Switch, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Setting() {
  // Estados para as opções de configuração
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);
  const [isLocationEnabled, setIsLocationEnabled] = useState(true);

  // Função para voltar à tela anterior
  const handleBack = () => {
    router.back();
  };

  // Função para salvar configurações (simulada)
  const handleSave = () => {
    alert('Configurações salvas com sucesso!');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Configurações</Text>
      </View>

      {/* Conteúdo das Configurações */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* Seção de Notificações */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notificações</Text>
          <View style={styles.option}>
            <Ionicons name="notifications-outline" size={24} color="#4c669f" />
            <Text style={styles.optionText}>Receber Notificações</Text>
            <Switch
              value={isNotificationsEnabled}
              onValueChange={setIsNotificationsEnabled}
              trackColor={{ false: '#767577', true: '#00b894' }}
              thumbColor={isNotificationsEnabled ? '#fff' : '#f4f3f4'}
            />
          </View>
        </View>

        {/* Seção de Aparência */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Aparência</Text>
          <View style={styles.option}>
            <Ionicons name="moon-outline" size={24} color="#4c669f" />
            <Text style={styles.optionText}>Modo Escuro</Text>
            <Switch
              value={isDarkModeEnabled}
              onValueChange={setIsDarkModeEnabled}
              trackColor={{ false: '#767577', true: '#00b894' }}
              thumbColor={isDarkModeEnabled ? '#fff' : '#f4f3f4'}
            />
          </View>
        </View>

        {/* Seção de Localização */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Localização</Text>
          <View style={styles.option}>
            <Ionicons name="location-outline" size={24} color="#4c669f" />
            <Text style={styles.optionText}>Permitir Localização</Text>
            <Switch
              value={isLocationEnabled}
              onValueChange={setIsLocationEnabled}
              trackColor={{ false: '#767577', true: '#00b894' }}
              thumbColor={isLocationEnabled ? '#fff' : '#f4f3f4'}
            />
          </View>
        </View>

        {/* Botão de Salvar */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Ionicons name="save-outline" size={24} color="#fff" />
          <Text style={styles.saveButtonText}>Salvar Configurações</Text>
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
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
    marginLeft: 10,
  },
  saveButton: {
    flexDirection: 'row',
    backgroundColor: '#00b894',
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
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
  },
});