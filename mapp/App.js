import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Dimensions, StatusBar} from 'react-native';
import MapView, {Marker, Circle} from 'react-native-maps';

const App = () => {
  const [padding, setPadding] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setPadding(-1);
    }, 500);
    setTimeout(() => {
      setPadding(0);
    }, 1000);
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <MapView
        liteMode={true}
        style={{...styles.map, zIndex: -1, margin: padding}}
        region={{
          longitude: 67.362223,
          latitude: 25.015685,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Circle
          center={{
            longitude: 67.362223,
            latitude: 25.015685,
          }}
          radius={500}
          strokeColor="rgba(255,0,0,0.1)"
          fillColor="rgba(255,0,0,0.1)"
        />
        <Marker
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
    backgroundColor: 'white',

    // alignSelf: 'center',
    // justifyContent: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
});
