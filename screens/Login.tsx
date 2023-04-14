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

function Login({ navigation }): JSX.Element {

  useEffect(() => {
    GuairePackageDelivery.init();
  }, []);

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const clear = () => {
    setUsername('');
    setPassword('');
  }

  const login = () => {
    if(username && password) {
      GuairePackageDelivery.login(username, password).then((response) => {
        if(response) {
          navigation.navigate("Home")
        } else {
          alert("Login failed please check login information")
        }
      });
    } else {
      alert("Please fill all the information")
    }
  }

  const goToAccountCreation = () => {
    navigation.navigate("CreateAccount");
  }

  return (
    <SafeAreaView>
      <ScrollView style={styles.mainContainer}>
        <View style={{flex: 1, alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
          <Image style={styles.splashLogo} source={require('../assets/fast-delivery.png')}></Image>
          
          <GText text="Guaire Package Delivery" style={{fontSize: 26}}></GText>

          <GText text="Please enter your information to log in" style={{fontSize: 12}}></GText>

          <GTextField 
            label="Username"
            value={username} 
            placeholder="Username" 
            onChangeText={text => setUsername(text)}></GTextField>

          <GTextField 
            label="Password"
            value={password} 
            placeholder="Password" 
            secureTextEntry={true} 
            onChangeText={text => setPassword(text)}></GTextField>

          <GButton text="Create new account" onPress={() => goToAccountCreation()} style={{
            width: '100%', 
            backgroundColor: 'transparent',
            shadowColor: undefined,
            shadowOffset: undefined,
            shadowOpacity: undefined,
            shadowRadius: undefined,
            elevation: undefined,
            marginTop: 5,
            marginBottom: -17
          }}
          textStyle={{
            textShadowColor: "rgba(0, 0, 0, 0.25)",
            textShadowOffset: {
              width: 0,
              height: 1,
            },
            textShadowRadius: 7,
            textDecorationLine: 'underline'
          }}></GButton>

          <View style={{flexDirection: 'row'}}>
            <GButton text="Cancel" onPress={() => clear()}></GButton>
            <GButton text="Login" onPress={() => login()} style={{marginLeft: 15}}></GButton>
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
    marginTop: 65
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

export default Login;
