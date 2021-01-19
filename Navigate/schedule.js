/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow
* Practical 9 - Navigation Applications
* schedule.js
* 
*/
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Schedule = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Schedule Page
        </Text>
        <Button
        title="Talk" onPress={() => navigation.navigate('Talk')}
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

export default Schedule;
