import React, { useRef } from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import universidadIcon from "./assets/UT.png";

export default function App() {
  const mapRef = useRef(null);

  const coordinates = [
    {
      id: 1,
      image: {
        uri: "https://th.bing.com/th/id/OIP.1f99fjmGsegMUDQMZVnPTwHaE7?rs=1&pid=ImgDetMain",
      },
      title: "Universidad Tecnológica de Cancún",
      description: "Universidad padre de todas las universidades",
      latitude: 21.049641309082137,
      longitude: -86.84637366885863,
      color: "green",
    },
    {
      id: 2,
      image: {
        uri: "https://th.bing.com/th/id/R.64d3ded2d0022fc126eccdda242f974f?rik=bMsYjRQeW4X1Lw&pid=ImgRaw&r=0",
      },
      title: "Izamal",
      description:
        "Izamal, pueblo bonito y bello en medio de la jungla yucateca del chile y pozole",
      latitude: 20.934688349757543,
      longitude: -89.01885889855214,
      color: "blue",
    },
    {
      id: 3,
      image: {
        uri: "https://images.sipse.com/O5eO-UbmGbs2fG_yGPZOlircBXQ=/1654x1016/smart/2019/08/02/1564781251175.jpg",
      },
      title: "Tekax",
      description: "Ni idea, pero es un pueblo",
      latitude: 20.20814,
      longitude: -89.28295,
      color: "yellow",
    },
    {
      id: 4,
      image: {
        uri: "https://www.lugaresturisticosenmexico.com/wp-content/uploads/2022/06/Sisal-Yucatan-Pueblo-Magico-Playas.jpg",
      },
      title: "Sisal",
      description: "¿Quiéres sal? ¡Pues ve a Sisal!",
      latitude: 21.16497,
      longitude: -90.02909,
    },
  ];

  const zoomToLocation = (latitude, longitude) => {
    mapRef.current.animateToRegion(
      {
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      },
      500
    );
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: 21.049641309082137,
          longitude: -86.84637366885863,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        {coordinates.map((location) => (
          <Marker
            key={location.id}
            title={location.title}
            description={location.description}
            pinColor={location.color}
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            onPress={() =>
              zoomToLocation(location.latitude, location.longitude)
            }
          />
        ))}
      </MapView>

      <FlatList
        data={coordinates}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.listItem}
            onPress={() => zoomToLocation(item.latitude, item.longitude)}
          >
            <View style={{}}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.listTitle}>{item.title}</Text>
              <Text style={styles.listText}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "70%",
  },
  list: {
    width: "100%",
    height: "30%",
    backgroundColor: "#f9f9f9",
  },
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  listTitle: {
    fontWeight: "bold",
  },
  listText: {
    fontSize: 16,
  },
  image: {
    width: 150,
    height: 100,
    margin: 0,
    padding: 0,
    resizeMode: "contain",
  },
});
