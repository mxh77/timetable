import React, { useState } from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import Timetable from '../../src/index';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const initialEvents = [
  {
    id: '1',
    title: 'Réunion',
    startTime: new Date(2024, 1, 29, 12, 0),
    endTime: new Date(2024, 1, 29, 18, 0),
    color: '#FF5733'
  },
  {
    id: '2',
    title: 'Cours de React Native',
    startTime: new Date(2024, 1, 29, 12, 0),
    endTime: new Date(2024, 1, 29, 13, 15),
    color: '#33B5FF'
  },
  {
    id: '3',
    title: 'Rouge',
    startTime: new Date(2024, 1, 29, 13, 15),
    endTime: new Date(2024, 1, 29, 14, 0),
    color: '#FF0000'
  },
  {
    id: '4',
    title: 'Vert',
    startTime: new Date(2024, 1, 29, 13, 15),
    endTime: new Date(2024, 1, 29, 14, 0),
    color: 'green'
  },
  {
    id: '5',
    title: 'Orange',
    startTime: new Date(2024, 1, 29, 20, 0),
    endTime: new Date(2024, 1, 29, 22, 0),
    color: 'orange'
  }
];

const App = () => {
  const [events, setEvents] = useState(initialEvents);

  const handleEventChange = (updatedEvent: { 
    id: string; 
    title: string; 
    startTime: Date; 
    endTime: Date; 
    color?: string; // Permet `undefined`
  }) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === updatedEvent.id ? { ...updatedEvent, color: updatedEvent.color ?? "transparent" } : event
      )
    );
  };
  
    return (
    <View style={styles.container}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Timetable
          events={events}
          mode="day"
          startHour={0}
          endHour={24}
          onEventChange={handleEventChange}
        />
      </GestureHandlerRootView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0, // Ajoutez un paddingTop pour compenser la hauteur de la barre d'état
  },
});

export default App;