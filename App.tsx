import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import MapPage from './app/pages/MapPage/MapPage';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleMap}>LA VEGA BAJA</Text>
      <MapPage />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
  },
  titleMap: {
    color: "#d9d9d9",
    fontSize: 18,
    lineHeight: 20,
    position: "relative",
    top: 50,
    left: 10,
  }
});

export default App;
