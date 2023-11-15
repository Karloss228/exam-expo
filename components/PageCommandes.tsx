import React from 'react';
import { Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import { Text, View } from './Themed';
import { commandes } from '../data/commandes';
import { Link } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
export default function PageOne({ path }: { path: string }) {
  
  const commandesEnAttente = commandes.filter((cmd) => cmd.satus === 1).slice(0, 3);
  const commandesEnvoyees = commandes.filter((cmd) => cmd.satus === 2).slice(0, 3);

  return (
    <View>
      <TouchableOpacity style={styles.card} onPress={() => handleCardPress(commandesEnAttente)}>
        <Text style={styles.title}>Commande N° 100</Text>
        {getBooksText(commandesEnAttente)}
        <Text style={styles.commandeAttente}>Commande en attente</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => handleCardPress(commandesEnvoyees)}>
        <Text style={styles.title}>Commande N° 200</Text>
        {getBooksText(commandesEnvoyees)}
        
        <Text style={styles.commandeEnvoye}>Commande envoyée</Text>
        
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    height: 200,
    width: '80%',
    margin: '10%',
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 8,
  },
  bookText: {
    fontSize: 16,
    marginBottom: 4,
  },
  commandeAttente : {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#ffa3a3',
    padding: 15,
    elevation: 5,
  },
  commandeEnvoye : {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#a9ffa3',
    borderRadius: 100,
    padding: 15,
    elevation: 5,
  },
});

function handleCardPress(commandes: any[]): void {
  <Link href="/affichageCommande" asChild>
              
            </Link>
  console.log('Commandes:', commandes);
}

function getBooksText(commandes: any[]): JSX.Element {
  
  return (
    <View >
      {commandes.map((cmd) => (
        <View  key={cmd.id}>
          {cmd.books.map((book: { id: React.Key | null | undefined; title: any; quantity: any; }) => (
            <Text key={book.id} style={styles.bookText}>{`${book.title} - Quantité: ${book.quantity}`}</Text>
          ))}
        </View>
      ))}
    </View>
  );
}
