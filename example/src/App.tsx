import { View, StatusBar, StyleSheet, Dimensions } from 'react-native';
import Timetable from '../../src/index';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const events = [
  {
    id: '1',
    title: 'Réunion',
    startTime: new Date(2024, 1, 29, 10, 0),
    endTime: new Date(2024, 1, 29, 11, 0),
    color: '#FF5733'
  },
  {
    id: '2',
    title: 'Cours de React Native',
    startTime: new Date(2024, 1, 29, 12, 0),
    endTime: new Date(2024, 1, 29, 16, 0),
    color: '#33B5FF'
  },
  {
    id: '3',
    title: 'Tests Timetable',
    startTime: new Date(2024, 1, 29, 13, 0),
    endTime: new Date(2024, 1, 29, 14, 0),
    color: '#FF0000'
  },
  {
    id: '4',
    title: 'Doublon',
    startTime: new Date(2024, 1, 29, 14, 0),
    endTime: new Date(2024, 1, 29, 16, 0),
    color: '#00FF00'
  }  ,
  {
    id: '5',
    title: 'sfdsfdsqfsdq',
    startTime: new Date(2024, 1, 29, 14, 0),
    endTime: new Date(2024, 1, 29, 16, 0),
    color: '#00FF00'
  }
];

const App = () => {
  return (
    <View style={styles.container}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Timetable events={events} mode="day" startHour={0} endHour={24} />
        </View>
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