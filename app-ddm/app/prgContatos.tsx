import { useState } from 'react';
import {
  Alert,
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons'; // Ícones do Expo

type Contato = {
  id: string;
  contato: string;
  email: string;
};

const PrgContatos = () => {
  const [dados, setDados] = useState<Contato[]>([]);
  const [contato, setContato] = useState('');
  const [email, setEmail] = useState('');
  const [idEditando, setIdEditando] = useState<string | null>(null);

  const handleSubmit = () => {
    if (contato && email) {
      const novoContato = { id: Date.now().toString(), contato, email };
      if (idEditando) {
        const novaLista = dados.map((item) =>
          item.id === idEditando ? { ...item, contato, email } : item
        );
        setDados(novaLista);
        Alert.alert('Contato editado com sucesso!');
      } else {
        setDados([...dados, novoContato]);
        Alert.alert('Contato adicionado com sucesso!');
      }
      setContato('');
      setEmail('');
      setIdEditando(null);
    } else {
      Alert.alert('Por favor, preencha todos os campos.');
    }
  };

  const Editar = (item: Contato) => {
    setContato(item.contato);
    setEmail(item.email);
    setIdEditando(item.id);
  };

  const removerItem = (id: string) => {
    setDados(dados.filter((item) => item.id !== id));
    Alert.alert('Contato removido!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        {idEditando ? 'Editar Contato' : 'Cadastro de Contatos'}
      </Text>

      <TextInput
        style={styles.input}
        value={contato}
        onChangeText={setContato}
        placeholder="Nome do contato"
        mode="outlined"
      />

      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="E-mail"
        keyboardType="email-address"
        mode="outlined"
      />

      <Button
        title={idEditando ? 'Salvar Alterações' : 'Adicionar Contato'}
        onPress={handleSubmit}
        color="red"
      />

      <FlatList
        data={dados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.contato} - {item.email}</Text>
            <View style={styles.actions}>
              <Pressable onPress={() => Editar(item)} style={styles.iconButton}>
                <MaterialIcons name="edit" size={24} color="green" />
              </Pressable>
              <Pressable onPress={() => removerItem(item.id)} style={styles.iconButton}>
                <MaterialIcons name="delete" size={24} color="red" />
              </Pressable>
            </View>
          </View>
        )}
        style={{ marginBottom: 20 }} // Espaço para o rodapé
      />

      {/* Rodapé com símbolo de copyright */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 Nathan Mariotto</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  item: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 10,
  },
  footer: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  footerText: {
    fontSize: 14,
    color: '#666',
  },
});

export default PrgContatos;
