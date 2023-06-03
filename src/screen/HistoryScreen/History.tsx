/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ImageBackground, StyleSheet, Text, SafeAreaView} from 'react-native';

const History = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ImageBackground
        // source={require('../../assets/images/historyFon.png')}
        style={styles.mainImage}
        source={require('../../assets/images/historyFon.png')}>
        <Text style={{color: 'white', fontSize: 30}}>HELLO</Text>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default History;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  mainImage: {
    flex: 1,
    width: 417,
    height: 1000,
  },
});
