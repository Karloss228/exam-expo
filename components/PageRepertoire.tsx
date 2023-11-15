import React, { useState } from 'react';
import { StyleSheet, FlatList, TextInput, TouchableOpacity, Alert, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import { Text, View } from './Themed';

import { contacts as initialContacts } from '../data/contacts';

export default function PageRepertoire({ path }: { path: string }) {
  const [searchText, setSearchText] = useState<string>('');
  const [contacts, setContacts] = useState(initialContacts);

  const filteredContacts = contacts.filter((contact) =>
    `${contact.first_name} ${contact.last_name}`.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleDelete = (id: number) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
    Alert.alert('Succès', 'Le contact a été supprimé avec succès.');
  };

  const handleEdit = (id: number) => {
    console.log(`Éditer le contact avec l'ID ${id}`);
  };

  const handleEmail = (email: string) => {
    const mailtoURL = `mailto:${email}`;
    Linking.openURL(mailtoURL);
  };

  const handleCall = (phone: string) => {
    const phoneNumber = `tel:${phone}`;
    Linking.openURL(phoneNumber);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Rechercher un contact..."
        placeholderTextColor="#636363"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <FlatList
        data={filteredContacts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.contactContainer}>
            <Text style={styles.name}>{`${item.first_name} ${item.last_name}`}</Text>
            <Text style={styles.email}>{item.email}</Text>
            <Text style={styles.phone}>{item.phone}</Text>
            <View style={styles.iconsContainer}>
              <TouchableOpacity onPress={() => handleDelete(item.id)}>
                <Ionicons name="trash-bin" size={24} color="red" style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleEdit(item.id)}>
                <Ionicons name="create" size={24} color="blue" style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleEmail(item.email)}>
                <Ionicons name="mail" size={24} color="green" style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleCall(item.phone)}>
                <Ionicons name="call" size={24} color="purple" style={styles.icon} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  searchInput: {
    height: 40,
    borderColor: '#f9f9f9',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 8,
    color: '#785454',
    backgroundColor: '#d1d1d1',
  },
  contactContainer: {
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#66b7e9',
    backgroundColor: '#f9f9f9',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#030303',
  },
  email: {
    fontSize: 14,
    color: '#785454',
  },
  phone: {
    fontSize: 14,
    color: '#785454',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    backgroundColor: '#f9f9f9',
  },
  icon: {
    marginLeft: 8,
  },
});
