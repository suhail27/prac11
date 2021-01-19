/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow
* Practical - Navigation Applications
* speaker.js
* 
*/

import React from 'react';
import {StyleSheet, Text, View, Button,} from 'react-native';

const Page4 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Page 4
      </Text>
      <Button
        title="Go To Home"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

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

export default Page4;
