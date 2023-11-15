import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, Platform, StyleSheet, TextInput, Pressable, View } from 'react-native';

import { Text } from '../components/Themed';
import { contacts } from '../data/contacts';

export default function CreationRepertoireScreen() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleCreateContact = () => {
    if (!firstName || !lastName || !email || !phone) {
      Alert.alert('Champs requis', 'Veuillez remplir tous les champs.');
      return;
    }
    const newContact = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phone,
      id: contacts.length + 1,
    };

    contacts.push(newContact);
    Alert.alert('Succès', 'Le contacte a été créée avec succès.', [
      { text: 'OK', 
      onPress: () => {
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
  }
  //onPress: () => navigation.navigate('Repertoire') 
 },
 ]);
 
 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Création du contact</Text>

      <TextInput
        style={styles.input}
        placeholder="Prénom"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Nom"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Téléphone"
        value={phone}
        onChangeText={setPhone}
      />
      <Pressable style={styles.createButton} onPress={handleCreateContact}>
        <Text style={styles.buttonText}>Créer le contact</Text>
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
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#d1d1d1',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 8,
    width: '94%',
  },
  createButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 8,
    width: '94%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});
