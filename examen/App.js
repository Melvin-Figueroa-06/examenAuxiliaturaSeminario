import React from 'react';
import {Button, TextInput} from 'react-native-paper';
import {StyleSheet, View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import TaskScreen from './screeens/TaskScreen';

const App = () => {
  return (
    <NavigationContainer>
      <TaskScreen />
    </NavigationContainer>
  );
};

export default App;





