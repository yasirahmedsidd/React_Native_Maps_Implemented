import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const App = () => {
  return (
    <View style={styles.container}>
      <MapView
        mapType="standard"
        zoomEnabled={false}
        showsTraffic
        showsBuildings={false}
        showsIndoors={false}
        showsTraffic={false}
        showsCompass={false}
        showsScale={false}
        showsPointsOfInterest={false}
        showsMyLocationButton={false}
        // maxDelta={10}
        // minDelta={10}
        liteMode={true}
        style={styles.map}
        region={{
          longitude: 67.362223,
          latitude: 25.015685,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          image={{
            uri:
              'http://icon-library.com/images/marker-icon-png/marker-icon-png-29.jpg',
          }}
          style={{height: 100}}
          pinColor="green"
          coordinate={{
            longitude: 67.362223,
            latitude: 25.015685,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          title="Farmhouse"
          description="Farmhouse description"
        />
      </MapView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    // width: 300,
    // height: 300,
  },
});
