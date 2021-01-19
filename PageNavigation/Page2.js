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

const Page2 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Page 2
        </Text>
        <Button
        title="Go to Page 3" onPress={() => navigation.navigate('Page3')}
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

export default Page2;
