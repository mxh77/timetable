import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView, Text } from 'react-native-gesture-handler';
import type { Event } from './types';

interface DayViewProps {
  events: Event[];
  startHour: number;
  endHour: number;
  onEventPress?: (event: Event) => void;
}

const DayView: React.FC<DayViewProps> = ({ events, startHour, endHour, onEventPress }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {Array.from({ length: endHour - startHour }, (_, i) => startHour + i).map(hour => (
        <View key={hour} style={styles.hourRow}>
          <Text style={styles.hourLabel}>{hour}:00</Text>
          <View style={styles.eventsContainer}>
            {events
              .filter(event => new Date(event.startTime).getHours() === hour)
              .map(event => (
                <TouchableOpacity key={event.id} onPress={() => onEventPress?.(event)} style={[styles.event, { backgroundColor: event.color || '#007AFF' }]}>
                  <Text style={styles.eventText}>{event.title}</Text>
                </TouchableOpacity>
              ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  hourRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10
  },
  hourLabel: {
    width: 50,
    fontSize: 14,
    color: '#333'
  },
  eventsContainer: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingLeft: 10
  },
  event: {
    padding: 5,
    borderRadius: 5,
    marginVertical: 2
  },
  eventText: {
    color: '#fff',
    fontSize: 12
  }
});

export default DayView;
