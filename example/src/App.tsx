import Timetable from '../../src/index';
import { GestureHandlerRootView } from 'react-native-gesture-handler';  // Importe GestureHandlerRootView

const events = [
  { id: '1', title: 'Réunion', startTime: new Date(2024, 1, 29, 10, 0), endTime: new Date(2024, 1, 29, 11, 0), color: '#FF5733' },
  { id: '2', title: 'Cours de React Native', startTime: new Date(2024, 1, 29, 14, 0), endTime: new Date(2024, 1, 29, 16, 0), color: '#33B5FF' }
];

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
            <Timetable events={events} mode="day" />
    </GestureHandlerRootView>
  );
};

export default App;
