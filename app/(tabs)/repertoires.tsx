import { Link } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import PageRepertoire from '../../components/PageRepertoire';
import { Text, View } from '../../components/Themed';
export default function CommandesScreen() {
  return (
    <View style={styles.container}>      
      <PageRepertoire path="app/(tabs)/repertoires.tsx" />
      <Link href="/creationRepertoire" style={styles.addButton} asChild>
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
    backgroundColor: '#dbdbdb',
    borderRadius: 100,
    padding: 15,
    elevation: 5,
  },
 
});
