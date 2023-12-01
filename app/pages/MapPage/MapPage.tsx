import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import MapView, { Geojson, PROVIDER_GOOGLE, Polygon } from "react-native-maps";

import { map } from "../../data/map/map";
import { areas } from '../../data/areas/areas'

const coordinates = map.center.split(";");
const lat = Number.parseFloat(coordinates[0])
const lon = Number.parseFloat(coordinates[1])
// type Region = {
//   latitude: Number,
//   longitude: Number,
//   latitudeDelta: Number,
//   longitudeDelta: Number,
// }

const INITIAL_REGION = {
  latitude: lat,
  longitude: lon,
  latitudeDelta: 2,
  longitudeDelta: 2,
};

const INITIAL_CAMERA = {
  zoom: map.zoom
}

type DataAreas = {
  features: [],
  type: string,
}

type AreasProps = {
  geometry: object,
  properties: {
    id: string,
    idMap: string,
    device: number,
    deviceName: string,
    irrigating: boolean,
    sector: number,
    crop: number,
    failure: boolean
  },
  type: string
}

const MapPage = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_REGION}
        initialCamera={INITIAL_CAMERA}
        minZoomLevel={13}
        maxZoomLevel={17}
      >
        {areas.features.map((area:AreasProps) => {

          <Geojson 
            geojson={area}
            strokecolor={"red"}
            fillColor={"green"}
            strokeWidth={2}
          />
        })}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    top: 70,
  },
  map: {
    width: "100%",
    height: Dimensions.get("window").height - 60,
  },
});

export default MapPage;
