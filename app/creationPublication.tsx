import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Platform, StyleSheet, TextInput, Pressable, Alert } from 'react-native';
import { Text, View } from '../components/Themed';

import { books } from '../data/pubs';

export default function CreationPublicationScreen({ navigation }: { navigation: any }) {
  const [title, setTitle] = useState('');
  const [reference, setReference] = useState('');

  const createPublication = () => {
    if (!title || !reference) {
      Alert.alert('Champs requis', 'Veuillez remplir tous les champs.');
      return;
    }
    const newPublication = {
      id: books.length + 1,
      title : title,
      reference : reference,
    };

    books.push(newPublication);
    Alert.alert('Succès', 'La publication a été créée avec succès.', [
      { text: 'OK', 
      onPress: () => {
      setTitle(''); 
      setReference('');
      }
     //onPress: () => navigation.navigate('Repertoire') 
    },
    ]);
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Création d'une publication</Text>

      <TextInput
        style={styles.input}
        placeholder="Titre"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Référence"
        value={reference}
        onChangeText={(text) => setReference(text)}
      />

      <Pressable style={styles.createButton} onPress={createPublication}>
        <Text style={styles.createButtonText}>Créer la publication</Text>
      </Pressable>

      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: '#d1d1d1',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 8,
    width: '100%',
  },
  createButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  createButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
