import React from 'react';
import { View, StyleSheet, Text, ScrollView, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
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
  // Calculer la position top (en pixels) d'un événement en fonction de son heure de début
  const getEventTop = (event: Event) => {
    const eventStartHour = new Date(event.startTime).getHours();
    const eventStartMinutes = new Date(event.startTime).getMinutes();
    return ((eventStartHour - startHour) * 60 + eventStartMinutes) * (HOUR_HEIGHT / 60);
  };

  // Calculer la hauteur d'un événement (en pixels) en fonction de sa durée
  const getEventHeight = (event: Event) => {
    const eventDuration = (new Date(event.endTime).getTime() - new Date(event.startTime).getTime()) / (1000 * 60); // Durée en minutes
    return (eventDuration / 60) * HOUR_HEIGHT; // Hauteur en fonction de la durée de l'événement
  };

  // Gérer les chevauchements entre événements (en les répartissant uniformément sur la largeur disponible)
  const getEventLeft = (event: Event, overlappingEvents: Event[], columnIndex: number) => {
    const width = EVENT_COLUMN_WIDTH / overlappingEvents.length; // Largeur de l'événement en fonction du nombre de chevauchements
    return width * columnIndex; // Position horizontale en pixels
  };

  // Fonction pour vérifier si deux événements se chevauchent
  const isOverlapping = (event1: Event, event2: Event) => {
    return (
      (event1.startTime < event2.endTime && event1.endTime > event2.startTime) ||
      (event2.startTime < event1.endTime && event2.endTime > event1.startTime)
    );
  };

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={{ height: (endHour - startHour) * HOUR_HEIGHT }}>
      <View style={styles.container}>
        <View style={{ width: HOUR_COLUMN_WIDTH }}>
          {Array.from({ length: endHour - startHour }, (_, i) => startHour + i).map(hour => (
            <View key={hour} style={styles.hourRow}>
              <Text style={styles.hourLabel}>{hour}:00</Text>
            </View>
          ))}
        </View>
        <View style={{ width: EVENT_COLUMN_WIDTH, height: (endHour - startHour) * HOUR_HEIGHT }}>
          {Array.from({ length: endHour - startHour }, (_, i) => startHour + i).map(hour => (
            <View key={hour} style={styles.hourLineContainer}>
              <View style={styles.hourLine} />
            </View>
          ))}
          {events.map((event, eventIndex) => {
            const top = getEventTop(event);
            const height = getEventHeight(event);

            // Trouver les événements qui se chevauchent avec l'événement actuel
            const overlappingEvents = events.filter(e => isOverlapping(e, event));

            return (
              <View
                key={event.id}
                style={[
                  styles.eventBox,
                  {
                    top,
                    height,
                    backgroundColor: event.color || '#007AFF',
                    width: EVENT_COLUMN_WIDTH / overlappingEvents.length,
                    left: getEventLeft(event, overlappingEvents, overlappingEvents.indexOf(event)),
                  },
                ]}
              >
                <TouchableOpacity onPress={() => onEventPress?.(event)}>
                  <Text style={styles.eventTitle}>{event.title}</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
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
  hourLineContainer: {
    height: HOUR_HEIGHT,
    justifyContent: 'center',
  },
  hourLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
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