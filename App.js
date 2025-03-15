import MapView, { Marker } from 'react-native-maps';
import { FlatList, StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 21.049641309082137,
        longitude: -86.84637366885863,
        latitudeDelta: 0.001, // Más pequeño = vista más cercana
        longitudeDelta: 0.005, // Más pequeño = vista más cercana
      }}>
      <Marker
        coordinate={{
          latitude: 21.049641309082137,
          longitude: -86.84637366885863,
        }}
        pinColor="green"
      />
    </MapView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '75%',
  },
});
