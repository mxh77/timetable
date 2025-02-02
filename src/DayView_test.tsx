import { ScrollView, StyleSheet, Text, View,StatusBar,Dimensions } from 'react-native';
import type { Event } from './types';

interface DayViewProps {
  events: Event[];
  startHour: number;
  endHour: number;
  onEventPress?: (event: Event) => void;
}

const { width: DEVICE_WIDTH } = Dimensions.get('window');
const HOUR_HEIGHT = 60; // Hauteur de base pour une heure
const HOUR_COLUMN_WIDTH = 60; // Largeur de la colonne des heures
const EVENT_COLUMN_WIDTH = DEVICE_WIDTH - HOUR_COLUMN_WIDTH - 20; // Largeur des événements ajustée à la largeur du device


const DayView: React.FC<DayViewProps> = ({ events, startHour, endHour, onEventPress }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View>
          <View style={[styles.hoursContainer, { width: HOUR_COLUMN_WIDTH }]}>
            {Array.from({ length: endHour - startHour }, (_, i) => startHour + i).map(hour => (
              <View key={hour} style={styles.hourRow}>
                <Text style={styles.hourLabel}>{hour}:00</Text>
              </View>
            ))}
          </View>

        </View>
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 0,
    paddingTop: StatusBar.currentHeight || 0,
  },
  hoursContainer: {
    alignItems: 'flex-end',
    paddingRight: 5,
  },
  hourRow: {
    height: HOUR_HEIGHT,
    justifyContent: 'center',
  },
  hourLabel: {
    fontSize: 14,
    color: '#333',
  },
  scrollView: {
    flex: 1,
  },
  eventBox: {
    position: 'absolute', // Les événements doivent être en position absolue pour se positionner sur l'axe vertical
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  eventTitle: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default DayView;