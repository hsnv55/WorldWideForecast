import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ImageBackground, ImageComponent, StyleSheet, View} from 'react-native';
import Search from './Search';
import { Image, Text} from 'react-native-svg';

const History = ({name}) => {
  console.log(name)
  return (
    
    <SafeAreaView style={styles.mainContainer}>
    
      <ImageBackground
        source={require('../assets/images/historyFon.png')}
        style={styles.mainImage}
      />
  {/* <View style={{backgroundColor:'red'}}><Text >{name}</Text></View> */}
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
  imageBackArrow: {
    width: 30,
    height: 30,
    marginLeft: 4,
    marginTop: 3,
  },
  textLeft: {
    color: 'black',
    fontSize: 30,
    fontWeight: '200',
  },
  buttonBackArrow: {
    backgroundColor: '#A9ADBA',
    width: 35,
    height: 35,
    borderRadius: 5,
    marginTop: 20,
    marginLeft: 10,
  },
});
