/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScene from './scenes/HomeScene';
import ProfileScene from './scenes/ProfileScene';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'Home'}>
          <Stack.Screen
            name={'Home'}
            component={HomeScene}
            options={{
              title: 'League of Legends',
            }}
          />
          <Stack.Screen name={'Profile'} component={ProfileScene} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
