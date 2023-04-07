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
  TouchableHighlight,
  Button
} from 'react-native';

import { useEffect, useState } from 'react';

function GButton({ selected, onPress, text }): JSX.Element {

  useEffect(() => {
    
  }, []);

  return (
    <TouchableHighlight style={{
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
    }} onPress={() => onPress()}>
      <View style={{
        backgroundColor: selected ? '#e6f2ff' : '#275a8a',
        width: 140,
        height: 40,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        padding: 10,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style={{
          color: selected ? 'black' : 'white'
        }}>{text}</Text>
      </View>
    </TouchableHighlight>   
  );
}

const styles = StyleSheet.create({
  preparation: {
    color: 'black',
    marginLeft: 15,
    marginTop: 15,
    fontSize: 15
  },
  label: {
    color: 'black',
    marginLeft: 15,
    marginTop: 15,
    fontWeight: 'bold',
    fontSize: 18
  },
  image: {
    marginTop: 15,
    backgroundColor: 'white',
    flex: 1,
    marginHorizontal: 15,
    resizeMode: 'contain',
    borderRadius: 10,
    width: Dimensions.get("window").width - 30,
    height: Dimensions.get("window").width - 30 - 175,
  },
  textField: {
    padding: 10,
    marginTop: 5,
    marginHorizontal: 15,
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 15
  },
  mainContainer: {
    alignContent: 'center',
    backgroundColor: '#bad2e8',
    borderBottomColor: '#275a8a',
    paddingBottom: 15,
    borderBottomWidth: 1
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

export default GButton;
