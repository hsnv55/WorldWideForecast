/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Wwe from '../navigation/nav';

const ForecastFiveDays = () => {
//   const navigation = useNavigation();
//   const handleBack = () => {
//     navigation.goBack();
//   };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ImageBackground
        source={require('../assets/gifs/five-daysFon.gif')}
        style={styles.mainImage}>
        <View style={{flexDirection: 'row'}}>
          <Wwe />
          {/* <TouchableOpacity onPress={handleBack}>
            <Image
              source={require('../assets/icons/backArrowIcon.png')}
              style={styles.imageBackArrow}
            /> */}
          {/* </TouchableOpacity> */}
          <Text style={styles.fiveDays}>5 Days</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ForecastFiveDays;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  mainImage: {
    flex: 1,
    width: 417,
    height: 1000,
  },
  // imageBackArrow: {
  //   width: 30,
  //   height: 30,
  //   marginLeft: 15,
  //   marginTop: 20,
  // },
  fiveDays: {
    color: 'white',
    fontSize: 25,
    fontWeight: '500',
    marginLeft: 110,
    marginTop: 20,
  },
});
