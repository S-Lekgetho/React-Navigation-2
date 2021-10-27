
import React, { Component } from 'react';
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import formScreen from './formScreen';
import userDetailScreen from './userDetailScreen'

const Stack = createNativeStackNavigator();

const myStack = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='formScreen' component={formScreen} options={{ title:'User Form'}}/>
        <Stack.Screen name='userDetailScreen'component={userDetailScreen} options={{ title:'User Details'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default myStack;
