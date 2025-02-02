import React from 'react';
import { ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native';

const DayView = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View>
          {Array.from({ length: 50 }, (_, i) => (
            <Text key={i} style={styles.textItem}>Élément {i + 1}</Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height / 2, // Définir une hauteur fixe pour la zone défilable (par exemple, la moitié de la hauteur de l'écran)
    backgroundColor: '#e0e0e0',
  },
  contentContainer: {
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  textItem: {
    marginVertical: 10,
    fontSize: 16,
  },
});

export default DayView;