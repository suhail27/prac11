/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow
* Practical - Navigation Applications
* talk.js
* 
*/

import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

 const Talk = ({ navigation }) =>{  
       return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Talk Page
        </Text> 
        <Button
        title="Speaker" onPress={() => navigation.navigate('Speaker')}
      />   
      </View>
    );
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default Talk ;
