import { StyleSheet } from 'react-native';

import PageOne from '../../components/PageCommandes';
import { Text, View } from '../../components/Themed';

export default function CommandesScreen() {
  return (
    <View style={styles.container}>
      <PageOne path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
  },
  
});
