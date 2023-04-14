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

import GuairePackageDelivery from '../components/GuairePackageDelivery';

import GButton from '../components/GButton';
import GTextField from '../components/GTextField';
import GText from '../components/GText';
import GTopButton from '../components/GTopButton';

function DriversInfo({ navigation }): JSX.Element {

  useEffect(() => {
    GuairePackageDelivery.init();
  }, []);

  const [model, setModel] = React.useState('');
  const [make, setMake] = React.useState('');
  const [year, setYear] = React.useState('');
  const [color, setColor] = React.useState('');

  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [DOB, setDOB] = React.useState('');
  const [address, setAddress] = React.useState('');

  const clear = () => {
    navigation.pop()
  }

  const register = () => {
    if(model && make && year && color && firstName && lastName && DOB && address) {
      GuairePackageDelivery.instance.addDriverDetails(model, make, year, color, firstName, lastName, DOB, address).then((response) => {
        if(response) {
          navigation.navigate("Home")
        } else {
          alert("Adding info. failed please check login information")
        }
      });
    } else {
      alert("Please fill all the information")
    }
  }

  return (
    <SafeAreaView>
      <ScrollView style={styles.mainContainer}>
        <View style={{flex: 1, alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
          <Image style={styles.splashLogo} source={require('../assets/fast-delivery.png')}></Image>
          
          <GText text="Guaire Package Delivery" style={{fontSize: 26, marginTop: -15}}></GText>

          <GText text="Account Details" style={{fontSize: 18, marginVertical: 0, marginTop: -15}}></GText>

          <GText text="Please enter your detailed information" style={{fontSize: 12}}></GText>

          <View style={{
            backgroundColor: '#e6f2ff',
            padding: 15,
            borderRadius: 15,
            marginTop: 45,

            paddingTop: 7,

            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.50,
            shadowRadius: 3.84,
      
            elevation: 5,
          }}>

            <View style={{
              marginTop: -35,
              marginLeft: -15,
              marginRight: -15,
              flexDirection: 'row'
            }}>

              <GTopButton 
                selected={true}
                textStyle={{fontWeight: 'bold'}}
                text={"Vehicle Info."}></GTopButton>

            </View>

            <GTextField 
              label="Make"
              value={make} 
              placeholder="Make" 
              onChangeText={text => setMake(text)}></GTextField>

            <GTextField 
              label="Model"
              value={model} 
              placeholder="Model" 
              onChangeText={text => setModel(text)}></GTextField>

            <GTextField 
              label="Year"
              value={year} 
              placeholder="YYYY" 
              onChangeText={text => setYear(text)}></GTextField>

            <GTextField 
              label="Color"
              value={color} 
              placeholder="Color" 
              onChangeText={text => setColor(text)}></GTextField>

          </View>

          <View style={{
            backgroundColor: '#e6f2ff',
            padding: 15,
            borderRadius: 15,
            marginTop: 45,

            paddingTop: 7,

            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.50,
            shadowRadius: 3.84,
      
            elevation: 5,
          }}>

            <View style={{
              marginTop: -35,
              marginLeft: -15,
              marginRight: -15,
              flexDirection: 'row'
            }}>

              <GTopButton 
                selected={true}
                textStyle={{fontWeight: 'bold'}}
                text={"Personal Info."}></GTopButton>

            </View>

            <GTextField 
              label="First Name"
              value={firstName} 
              placeholder="First Name" 
              onChangeText={text => setFirstName(text)}></GTextField>

            <GTextField 
              label="Last Name"
              value={lastName} 
              placeholder="Last Name" 
              onChangeText={text => setLastName(text)}></GTextField>

            <GTextField 
              label="Date of Birth"
              value={DOB} 
              placeholder="MM/DD/YYYY" 
              onChangeText={text => setDOB(text)}></GTextField>

            <GTextField 
              label="Address"
              value={address} 
              placeholder="Address" 
              onChangeText={text => setAddress(text)}></GTextField>

          </View>

          <View style={{flexDirection: 'row'}}>
            <GButton text="Cancel" onPress={() => clear()}></GButton>
            <GButton text="Create" onPress={() => register()} style={{marginLeft: 15}}></GButton>
          </View>
        </View>   

        <View style={{height: 500}}></View>     
      </ScrollView>
    </SafeAreaView>
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
    height: Dimensions.get('window').height,
    backgroundColor: '#bad2e8'
  },
  splashLogo: {
    height: 75,
    width: 75,
    marginTop: 15
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

export default DriversInfo;
