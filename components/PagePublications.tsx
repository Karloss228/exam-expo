import React, { useState } from 'react';
import { StyleSheet, FlatList, TouchableOpacity, TextInput, Alert } from 'react-native';
import Colors from '../constants/Colors';
import { Text, View } from './Themed';
import { books as initialBooks } from '../data/pubs';
import { Ionicons } from '@expo/vector-icons';

export default function PageTwo({ path }: { path: string }) {
  const [searchText, setSearchText] = useState<string>('');
  const [books, setBooks] = useState(initialBooks);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleDelete = (id: number) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
    Alert.alert('Succès', 'La publication a été supprimée avec succès.');
  };

  const handleEdit = (id: number) => {
    
    console.log(`Modifier la publication avec l'ID ${id}`);
  };

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.searchInput}
        placeholderTextColor="#454545"
        placeholder="Rechercher un livre..."
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <FlatList
        data={filteredBooks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.bookContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.reference}>{item.reference}</Text>
            <View style={styles.iconsContainer}>
              <TouchableOpacity onPress={() => handleDelete(item.id)}>
                <Ionicons name="trash-bin" size={24} color="red" style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleEdit(item.id)}>
                <Ionicons name="create" size={24} color="blue" style={styles.icon} />
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
    elevation: 10,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    color: '#acabab',
    marginBottom: 16,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#d6d6d6'

  },
  bookContainer: {
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#66b7e9',
    backgroundColor: '#f9f9f9',
  
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 8,
  },
  reference: {
    fontSize: 14,
    color: '#555',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: '#f9f9f9',
  },
  icon: {
    marginLeft: 15,
  },
});

function handleDelete(id: number): void {
  console.log(`Supprimer le livre avec l'ID ${id}`);
}

function handleEdit(id: number): void {
  console.log(`Modifier le livre avec l'ID ${id}`);
}
