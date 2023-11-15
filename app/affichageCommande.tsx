import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/PagePublications';
import { Text, View } from '../components/Themed';

export default function AffichageCommandeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}></Text>
      <View style={styles.separator} lightColor="#eee" darkColor="#ffffff19" />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
