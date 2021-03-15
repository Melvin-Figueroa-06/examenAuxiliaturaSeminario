import React from 'react';
//import {fetchData} from '../actions'
//import {connect} from 'react-redux'

import {Button, TextInput} from 'react-native-paper';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const TaskScreen = () => {
  /*  componentWillMount () {
        const {item} = this.props
        this.props.fetchData(item)
    } 

   shouldComponentUpdate (nextProps, nextState) {
    const {item} = this.props
    if(JSON.stringify(item) !== JSON.stringify(nextProps.item)){
        this.props.fetchData(nextProps.item)
    }
    return true
};*/

  return (
    <KeyboardAvoidingView behavior="position">
      <StatusBar backgroundColor="blue" barstyle="light-content" />
      <Text
        style={{fontSize: 35, marginLeft: 18, marginTop: 10, color: '#3b3b3b'}}>
        Taks
      </Text>

      <View
        style={{
          borderBottomColor: 'blue',
          borderBottomWidth: 4,
          borderRadius: 10,
          marginLeft: 20,
          marginRight: 150,
          marginTop: 4,
        }}
      />
      <TextInput
        label="Tarea"
        mode="outlined"
        style={{marginLeft: 18, marginRight: 18, marginTop: 18}}
        theme={{colors: {primary: 'blue'}}}
      />
      <TextInput
        label="Descripcion"
        mode="outlined"
        style={{marginLeft: 18, marginRight: 18, marginTop: 18}}
        theme={{colors: {primary: 'blue'}}}
      />
      <Button
        mode="contained"
        style={{marginLeft: 18, marginRight: 18, marginTop: 18}}
        onPress={() => console.log('Pressed')}>
        Enviar
      </Button>

      <TextInput
        label="list"
        mode="outlined"
        style={{marginLeft: 18, marginRight: 18, marginTop: 18}}
        theme={{colors: {primary: 'blue'}}}
      />
      <TouchableOpacity></TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default TaskScreen;


