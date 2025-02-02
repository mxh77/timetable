import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import DayView from './DayView';
import type { TimetableProps } from './types';
import WeekView from './WeekView';

const Timetable: React.FC<TimetableProps> = ({
  events,
  mode = 'day',
  startHour = 8,
  endHour = 18,
  onEventPress
}) => {
  const [currentDate] = useState(new Date());

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{currentDate.toDateString()}</Text>
      <ScrollView style={styles.content}>
      {mode === 'day' ? (
          <DayView events={events} startHour={startHour} endHour={endHour} onEventPress={onEventPress} />
        ) : (
          <WeekView events={events} startHour={startHour} endHour={endHour} onEventPress={onEventPress} />
        )}
              </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0'
  },
  content: {
    flex: 1
  }
});

export default Timetable;
