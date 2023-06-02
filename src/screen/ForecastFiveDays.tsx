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
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=b1e3a0c6229dabb71a7d0990b34ca2d8`,
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
         
          <Text style={styles.fiveDays}>5 Days</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.resultBackground}>
            <Text style={styles.cityNameText}>{currenFiveDayWeather.city?.name}</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.textLeft}>Temperature:</Text>
              <Text style={styles.textRight}> {currenFiveDayWeather.weather?.main?.temp}C</Text>
              {/* temp={Math.round(temp)} */}
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.textLeft}>Feels like:</Text>
              <Text style={styles.textRight}>
                {currenFiveDayWeather.main?.feels_like}C
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.textLeft}>Humidity:</Text>
              <Text style={styles.textRight}>
                {currenFiveDayWeather.main?.humidity}%
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.textLeft}>Wind speed:</Text>
              <Text style={styles.textRight}>
                {currenFiveDayWeather.wind?.speed}km/h
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.textLeft}>Pressure:</Text>
              <Text style={styles.textRight}>
                {currenFiveDayWeather.main?.pressure}
              </Text>
            </View>
            </View>
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
  resultBackground: {
    backgroundColor: 'white',
    borderRadius: 15,
    width: 350,
    height: 500,
    gap: 30,
    opacity: 0.8,
  },
  mainImage2: {
    flex: 1,
    // width: 417,
    // width: '100%',
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
  cityNameText: {
    color: 'black',
    fontSize: 30,
    fontWeight: '500',
    textAlign: 'center',
  },
  textLeft: {
    color: 'black',
    fontSize: 30,
    fontWeight: '200',
  },
  textRight: {
    color: 'black',
    fontSize: 30,
    fontWeight: '300',
  },
  container: {
    // flex: 1,
    // opacity: 0.5,
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: 90,
  },
});
