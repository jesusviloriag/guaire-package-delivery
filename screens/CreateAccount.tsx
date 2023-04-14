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

function CreateAccount({ navigation }): JSX.Element {

  useEffect(() => {
    GuairePackageDelivery.init();
  }, []);

  const [login, setLogin] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [customerSelected, setCustomerSelected] = React.useState(true);

  const clear = () => {
    navigation.pop()
  }

  const register = () => {
    if(login && email && password) {
      if(customerSelected == undefined) {
        setCustomerSelected(false);
      }
      GuairePackageDelivery.register(login, password, email, customerSelected).then((response) => {
        if(response) {
          if(!customerSelected) {
            navigation.navigate("DriversInfo")
          } else {
            navigation.navigate("CustomersInfo")
          }
          
        } else {
          alert("Login failed please check login information")
        }
      });
    } else {
      alert("Please fill all the information")
    }
  }

  const toggleSelected = () => {
    setCustomerSelected(!customerSelected);
  }

  return (
    <SafeAreaView>
      <ScrollView style={styles.mainContainer}>
        <View style={{flex: 1, alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
          <Image style={styles.splashLogo} source={require('../assets/fast-delivery.png')}></Image>
          
          <GText text="Guaire Package Delivery" style={{fontSize: 26}}></GText>

          <GText text="Account Creation" style={{fontSize: 18, marginVertical: 0}}></GText>

          <GText text="Please enter your information to create an account" style={{fontSize: 12}}></GText>

          <View style={{
            backgroundColor: '#e6f2ff',
            padding: 15,
            borderRadius: 15,
            marginTop: 25,

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
                selected={customerSelected}
                text={"Customer"}
                onPress={() => {if(!customerSelected)  toggleSelected()}}></GTopButton>

              <GTopButton 
                selected={!customerSelected} 
                text={"Driver"}
                onPress={() => {if(customerSelected) toggleSelected()}}></GTopButton>

            </View>

            <GTextField 
              label="Username"
              value={login} 
              placeholder="Username" 
              onChangeText={text => setLogin(text)}></GTextField>

            <GTextField 
              label="Email"
              value={email} 
              placeholder="Email" 
              onChangeText={text => setEmail(text)}></GTextField>

            <GTextField 
              label="Password"
              value={password} 
              placeholder="Password" 
              secureTextEntry={true} 
              onChangeText={text => setPassword(text)}></GTextField>
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

export default CreateAccount;
