/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
  FlatList,
} from 'react-native';

import Geolocation from '@react-native-community/geolocation';

import MapboxGL, {Camera} from "@rnmapbox/maps";

import { useEffect, useState } from 'react';

import GuairePackageDelivery from '../components/GuairePackageDelivery';

function Home({ navigation }): JSX.Element {

  const [recipes, setRecipes] = React.useState('');
  const [isMapInitialized, setMapInitialized] = React.useState(false);
  const [isGLSurfaceView , setGLSurfaceView ] = React.useState(false);
  const [coords, setCoords] = React.useState([0.0, 0.0]);
  const camera = React.useState<Camera>(null);

  useEffect(() => {
    GuairePackageDelivery.init();
    initializeCoordinates();
  }, []);

  const initializeCoordinates = () => {
    Geolocation.getCurrentPosition(
      //Will give you the current location
      (position) => {
        //getting the Longitude from the location json

        console.log(position);     
        setCoords([position.coords.longitude, position.coords.latitude]) 
        if(coords) {
          setMapInitialized(true);
          camera.current?.zoomTo(5, 100);
        } else {
          alert("Could not get your location... please enable location services")
        }
          
       }, (error) => alert(error.message), { 
         enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 
       }
    );
  }

  const createNewRecipe = () => {
    navigation.navigate("NewRecipe");
  }

  React.useEffect(() => {

    const focusHandler = navigation.addListener('focus', () => {

    });

    return focusHandler;

  }, [navigation]);

  const showMap = () => {
    if (isMapInitialized) {
      return(
        <MapboxGL.MapView 
          styleURL={
            !isGLSurfaceView
              ? MapboxGL.StyleURL.Satellite
              : MapboxGL.StyleURL.Street
          }

          localizeLabels={true}
          attributionEnabled={false}
          compassEnabled={true}
          logoEnabled={true}

          style={{
            flex: 1
          }}>
            <Camera
              ref={camera} 
              maxZoomLevel={14}
              minZoomLevel={11}
              centerCoordinate={coords}
            />
          </MapboxGL.MapView>
      )
    } else {
      return null;
    }
  }

  return (
    <View style={styles.mainContainer}>
      {showMap()}
      <TouchableOpacity 
        onPress={() => {createNewRecipe()}}
        style={{
          position: 'absolute',
          bottom: 10,
          marginLeft: (Dimensions.get("window").width / 2) - 38,
          backgroundColor: '#275a8a',
          borderRadius: 35,
          height: 75,
          width: 75,
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center'
        }}><Image style={{ width: 25, height: 25, marginLeft: 5 }} source={require('../assets/play-button.png')}></Image></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#275a8a',
    padding: 10,
    marginTop: 25,
    borderRadius: 10,
    width: 75,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textField: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 15,
    width: 250
  },
  mainContainer: {
    alignContent: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 75,
    backgroundColor: '#bad2e8'
  },
  splashLogo: {
    height: 75,
    width: 75,
    marginTop: 100
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Home;
