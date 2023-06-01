/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
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
import Geolocation from '@react-native-community/geolocation';
const ForecastFiveDays = () => {
//   const navigation = useNavigation();
//   const handleBack = () => {
//     navigation.goBack();
//   };
const [currenFiveDayWeather, setCurrenFiveDayWeather] = useState([]);
useEffect(() => {
  Geolocation.getCurrentPosition(info => {
    request(info.coords.latitude, info.coords.longitude);
  });
}, []);

const request = async (lat: number, lon: number) => {
  const response = await fetch(
    `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lon}&appid=b1e3a0c6229dabb71a7d0990b34ca2d8`,
  );
  const data = await response.json();
  setCurrenFiveDayWeather(data);
  console.log(data);
};

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
