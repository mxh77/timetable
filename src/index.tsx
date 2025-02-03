import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DayView from './DayView';
import type { TimetableProps } from './types';
import WeekView from './WeekView';

const Timetable: React.FC<TimetableProps> = ({
  events,
  mode = 'day',
  startHour = 8,
  endHour = 18,
  onEventPress,
  onEventChange
}) => {
  const [currentDate] = useState(new Date());

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{currentDate.toDateString()}</Text>
      <View style={styles.content}>
        {mode === 'day' ? (
          <DayView
            events={events}
            startHour={startHour}
            endHour={endHour}
            slotDuration={1}
            onEventPress={onEventPress}
            onEventChange={onEventChange}
          />
        ) : (
          <WeekView
            events={events}
            startHour={startHour}
            endHour={endHour}
            onEventPress={onEventPress}
          />
        )}
      </View>
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