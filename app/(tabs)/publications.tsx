import { Link } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import PageTwo from '../../components/PagePublications';
import { Text, View } from '../../components/Themed';
export default function PublicationsScreen() {
  return (
    <View style={styles.container}>
     
      <PageTwo path="app/(tabs)/publications.tsx" />
      <Link href="/creationPublication" style={styles.addButton} asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="plus-circle"
                    size={25} 
                  />
                )}
              </Pressable>
            </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#8d8bd4',
    borderRadius: 100,
    padding: 15,
    elevation: 5,
  },
});
