/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native';

import { useEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GuairePackageDelivery from './components/GuairePackageDelivery';

import SplashScreen from './screens/SplashScreen';
import Login from './screens/Login';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Settings from './screens/Settings';
import CreateAccount from './screens/CreateAccount';
import DriversInfo from './screens/DriversInfo';

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = React.useState('');

  useEffect(() => {
    GuairePackageDelivery.init();
    setUser(GuairePackageDelivery.instance.user)
  }, []);
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" options={{ headerShown:false }} component={SplashScreen} />
        <Stack.Screen name="Login" options={{ headerShown:false }} component={Login} />
        <Stack.Screen name="CreateAccount" options={{ headerShown:false }} component={CreateAccount} />
        <Stack.Screen name="DriversInfo" options={{ headerShown:false }} component={DriversInfo} />
        <Stack.Screen name="Home" options={({ navigation, route }) => ({
          // Add a placeholder button without the `onPress` to avoid flicker
          headerRight: () => (
            <TouchableOpacity onPress={() => {navigation.navigate("Profile")}}><Image style={{height: 45, width: 45, resizeMode: 'contain', borderRadius: 22 }} source={ user ? { uri: 'data:image/png;base64,' + user.avatar } : require('./assets/user.png')}></Image></TouchableOpacity>
          ),
          headerLeft: () => (
            <View></View>
          ),
          title: "Home"
        })} component={Home} />
        <Stack.Screen name="Profile" options={({ navigation, route }) => ({
          // Add a placeholder button without the `onPress` to avoid flicker
          headerRight: () => (
            <TouchableOpacity onPress={() => {navigation.navigate("Settings")}}><Image style={{height: 35, width: 35, resizeMode: 'contain'}} source={ require('./assets/settings.png')}></Image></TouchableOpacity>
          ),
          title: "Profile"
        })} component={Profile} />
        <Stack.Screen name="Settings" options={{ title: "Settings" }} component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}