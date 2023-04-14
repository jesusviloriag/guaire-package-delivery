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
  Button
} from 'react-native';

import { useEffect, useState } from 'react';

function GButton({ value, placeholder, secureTextEntry, label, onChangeText }): JSX.Element {

  useEffect(() => {
    
  }, []);

  return (
    <View style={{}}>
      <Text style={{
        textAlign: 'left', 
        width: 250,
        fontSize: 22, 
        fontFamily: 'FishGrill', 
        color: 'black', 
        marginTop: 15,

        textShadowColor: "rgba(0, 0, 0, 0.35)",
        textShadowOffset: {
          width: 0,
          height: 1,
        },
        textShadowRadius: 7,
      }}>{label}: </Text>

      <TextInput
        editable
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry} 
        placeholder={placeholder}
        value={value}
        style={{
          padding: 10,
          backgroundColor: 'white',
          borderRadius: 15,
          width: 250,
          marginTop: 3,

          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.50,
          shadowRadius: 3.84,

          elevation: 5,
        }}
      />
    </View>   
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
