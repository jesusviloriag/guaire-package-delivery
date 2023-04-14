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
  Image,
  Dimensions,
  LogBox
} from 'react-native';

import { useEffect, useState } from 'react';

import MapboxGL from "@rnmapbox/maps";

import GuairePackageDelivery from '../components/GuairePackageDelivery';

import { CommonActions } from '@react-navigation/native';

function SplashScreen({ navigation }): JSX.Element {

  const navigateToNextScreen = () => {
    setTimeout( () => {
      let user = GuairePackageDelivery.instance.user;
      if(user) {
        if (user.filledDetails) {
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [
                { name: 'Home' }
              ],
            })
          );
          //navigation.navigate("Home")
        } else {
          if (!user.isCustomer) {
            navigation.navigate("DriversInfo")
          } else {
            navigation.navigate("CustomersInfo")
          }          
        }
      } else {
        navigation.navigate("Login")
      }     
    }, 1500)
  }

  useEffect(() => {
    LogBox.ignoreAllLogs(); //Ignore all log notifications
    MapboxGL.setWellKnownTileServer('Mapbox');
    MapboxGL.setAccessToken("<YOUR TOKEN>");
    MapboxGL.setConnected(true);
    MapboxGL.setTelemetryEnabled(false);
    navigateToNextScreen();
    GuairePackageDelivery.init();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={[styles.mainContainer, {flexDirection:'row', height: 150, marginTop: -50}]}>
        <Image style={styles.splashLogo} source={require('../assets/fast-delivery.png')}></Image>
      </View>
      <View style={[styles.mainContainer, {flexDirection:'row', height: 150, marginTop: 15}]}>
        <Text style={{
          fontSize: 40, 
          color: 'black', 
          textAlign: 'center',

          textShadowColor: "rgba(0, 0, 0, 0.25)",
          textShadowOffset: {
            width: 0,
            height: 1,
          },
          textShadowRadius: 7,
        }}>Guaire Package Delivery</Text>
      </View>
      <View style={[styles.mainContainer, {bottom: 0, flexDirection:'row', height: 150, marginTop: 25, position: 'absolute'}]}>
        <Text style={{fontSize: 18}}>Powered by Guaire</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#bad2e8'
  },
  splashLogo: {
    height: 150,
    width: 150
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

export default SplashScreen;
