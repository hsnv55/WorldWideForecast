/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {ReactNode, useEffect, useState} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import Wwe from '../../navigation/nav';
import Geolocation from '@react-native-community/geolocation';

type Weather = {
  list: any;
  name: ReactNode;
  wind: any;
  main: any;
  cod: number;
  base: string;
  clouds: {
    all: number;
  };
  weather: Array<{
    description: string;
    icon: string;
    id: number;
    main: string;
  }>;
};

const ForecastFiveDays = () => {
  //   const navigation = useNavigation();
  //   const handleBack = () => {
  //     navigation.goBack();
  //   };
  const [currenWeather, setCurrenWeather] = useState<Weather>([]);
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
    setCurrenWeather(data);
  };

  console.log('currenWeather', currenWeather);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ImageBackground
        source={require('../../assets/gifs/5daysFon.gif')}
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
        {/* 0 */}
        <View style={styles.container}>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.dayText}>Today</Text>
            <View style={styles.characteristicsContainer}>
              <Text style={styles.textLeft}>Temperature:</Text>
              <Text style={styles.textRight}>
                {Math.round(currenWeather?.list?.[0]?.main?.temp - 273.15)} ℃
              </Text>
              {/* </View> */}
              {/* </View> */}
              {(currenWeather?.list?.[0]?.weather?.[0].main == 'Clear' && (
                <View>
                  <ImageBackground
                    style={styles.resultImage}
                    source={require('../../assets/icons/iconCloudy.png')}
                  />
                </View>
              )) ||
                (currenWeather?.list?.[0]?.weather?.[0].main == 'Rainy' && (
                  <View>
                    <ImageBackground
                      style={styles.resultImage}
                      source={require('../../assets/images/rainyImage.png')}
                    />
                  </View>
                )) ||
                (currenWeather?.list?.[0]?.weather?.[0].main == 'Clouds' && (
                  <View>
                    <ImageBackground
                      style={styles.resultImage}
                      source={require('../../assets/images/cloudyImage.png')}
                    />
                  </View>
                )) ||
                (currenWeather?.list?.[0]?.weather?.[0].main == 'Sunny' && (
                  <View>
                    <ImageBackground
                      style={styles.resultImage}
                      source={require('../../assets/images/sunnyImage.png')}
                    />
                  </View>
                )) ||
                (currenWeather?.list?.[0]?.weather?.[0].main == 'Storm' && (
                  <View>
                    <ImageBackground
                      style={styles.resultImage}
                      source={require('../../assets/images/stormImage.png')}
                    />
                  </View>
                )) ||
                (currenWeather?.list?.[0]?.weather?.[0].main == 'Snow' && (
                  <View>
                    <ImageBackground
                      style={styles.resultImage}
                      source={require('../../assets/images/snowImage.png')}
                    />
                  </View>
                )) ||
                (currenWeather?.list?.[0]?.weather?.[0].main == 'Thunder' && (
                  <View>
                    <ImageBackground
                      style={styles.resultImage}
                      source={require('../../assets/images/thunderImage.png')}
                    />
                  </View>
                ))}
            </View>
          </View>
        </View>
        {/* 1 */}
        <View style={styles.container}>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.dayText}>Tomorrow</Text>
            <View style={styles.characteristicsContainer}>
              <Text style={styles.textLeft}>Temperature:</Text>
              <Text style={styles.textRight}>
                {Math.round(currenWeather?.list?.[1]?.main?.temp - 273.15)} ℃
              </Text>
              {(currenWeather?.list?.[1]?.weather?.[0].main == 'Clear' && (
                <View>
                  <ImageBackground
                    style={styles.resultImage}
                    source={require('../../assets/icons/iconCloudy.png')}
                  />
                </View>
              )) ||
                (currenWeather?.list?.[1]?.weather?.[0].main == 'Rainy' && (
                  <View>
                    <ImageBackground
                      style={styles.resultImage}
                      source={require('../../assets/images/rainyImage.png')}
                    />
                  </View>
                )) ||
                (currenWeather?.list?.[1]?.weather?.[0].main == 'Clouds' && (
                  <View>
                    <ImageBackground
                      style={styles.resultImage}
                      source={require('../../assets/images/cloudyImage.png')}
                    />
                  </View>
                )) ||
                (currenWeather?.list?.[1]?.weather?.[0].main == 'Sunny' && (
                  <View>
                    <ImageBackground
                      style={styles.resultImage}
                      source={require('../../assets/images/sunnyImage.png')}
                    />
                  </View>
                )) ||
                (currenWeather?.list?.[1]?.weather?.[0].main == 'Storm' && (
                  <View>
                    <ImageBackground
                      style={styles.resultImage}
                      source={require('../../assets/images/stormImage.png')}
                    />
                  </View>
                )) ||
                (currenWeather?.list?.[1]?.weather?.[0].main == 'Snow' && (
                  <View>
                    <ImageBackground
                      style={styles.resultImage}
                      source={require('../../assets/images/snowImage.png')}
                    />
                  </View>
                )) ||
                (currenWeather?.list?.[1]?.weather?.[0].main == 'Thunder' && (
                  <View>
                    <ImageBackground
                      style={styles.resultImage}
                      source={require('../../assets/images/thunderImage.png')}
                    />
                  </View>
                ))}
            </View>
          </View>
        </View>
        {/* 2 */}
        <View style={styles.container}>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.dayText}>Sunday</Text>
            <View style={styles.characteristicsContainer}>
              <Text style={styles.textLeft}>Temperature:</Text>
              <Text style={styles.textRight}>
                {Math.round(currenWeather?.list?.[2]?.main?.temp - 273.15)} ℃
              </Text>
              {(currenWeather?.list?.[2]?.weather?.[0].main == 'Clear' && (
                <View>
                  <ImageBackground
                    style={styles.resultImage}
                    source={require('../../assets/icons/iconCloudy.png')}
                  />
                </View>
              )) ||
                (currenWeather?.list?.[2]?.weather?.[0].main == 'Rainy' && (
                  <View>
                    <ImageBackground
                      style={styles.resultImage}
                      source={require('../../assets/images/rainyImage.png')}
                    />
                  </View>
                )) ||
                (currenWeather?.list?.[2]?.weather?.[0].main == 'Clouds' && (
                  <View>
                    <ImageBackground
                      style={styles.resultImage}
                      source={require('../../assets/images/cloudyImage.png')}
                    />
                  </View>
                )) ||
                (currenWeather?.list?.[2]?.weather?.[0].main == 'Sunny' && (
                  <View>
                    <ImageBackground
                      style={styles.resultImage}
                      source={require('../../assets/images/sunnyImage.png')}
                    />
                  </View>
                )) ||
                (currenWeather?.list?.[2]?.weather?.[0].main == 'Storm' && (
                  <View>
                    <ImageBackground
                      style={styles.resultImage}
                      source={require('../../assets/images/stormImage.png')}
                    />
                  </View>
                )) ||
                (currenWeather?.list?.[2]?.weather?.[0].main == 'Snow' && (
                  <View>
                    <ImageBackground
                      style={styles.resultImage}
                      source={require('../../assets/images/snowImage.png')}
                    />
                  </View>
                )) ||
                (currenWeather?.list?.[2]?.weather?.[0].main == 'Thunder' && (
                  <View>
                    <ImageBackground
                      style={styles.resultImage}
                      source={require('../../assets/images/thunderImage.png')}
                    />
                  </View>
                ))}
            </View>
          </View>
        </View>
        {/* 3 */}
        <View style={styles.container}>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.dayText}>Monday</Text>
            <View style={styles.characteristicsContainer}>
              <Text style={styles.textLeft}>Temperature:</Text>
              <Text style={styles.textRight}>
                {Math.round(currenWeather?.list?.[3]?.main?.temp - 273.15)} ℃
              </Text>
              {(currenWeather?.list?.[3]?.weather?.[0].main == 'Clear' && (
                <View>
                  <ImageBackground
                    style={styles.resultImage}
                    source={require('../../assets/icons/iconCloudy.png')}
                  />
                </View>
              )) ||
                (currenWeather?.list?.[3]?.weather?.[0].main == 'Rainy' && (
                  <View>
                    <ImageBackground
                      style={styles.resultImage}
                      source={require('../../assets/images/rainyImage.png')}
                    />
                  </View>
                )) ||
                (currenWeather?.list?.[3]?.weather?.[0].main == 'Clouds' && (
                  <View>
                    <ImageBackground
                      style={styles.resultImage}
                      source={require('../../assets/images/cloudyImage.png')}
                    />
                  </View>
                )) ||
                (currenWeather?.list?.[3]?.weather?.[0].main == 'Sunny' && (
                  <View>
                    <ImageBackground
                      style={styles.resultImage}
                      source={require('../../assets/images/sunnyImage.png')}
                    />
                  </View>
                )) ||
                (currenWeather?.list?.[3]?.weather?.[0].main == 'Storm' && (
                  <View>
                    <ImageBackground
                      style={styles.resultImage}
                      source={require('../../assets/images/stormImage.png')}
                    />
                  </View>
                )) ||
                (currenWeather?.list?.[3]?.weather?.[0].main == 'Snow' && (
                  <View>
                    <ImageBackground
                      style={styles.resultImage}
                      source={require('../../assets/images/snowImage.png')}
                    />
                  </View>
                )) ||
                (currenWeather?.list?.[3]?.weather?.[0].main == 'Thunder' && (
                  <View>
                    <ImageBackground
                      style={styles.resultImage}
                      source={require('../../assets/images/thunderImage.png')}
                    />
                  </View>
                ))}
            </View>
          </View>
        </View>
        {/* 4 */}
        <View style={styles.container}>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.dayText}>Tuesday</Text>
            <View style={styles.characteristicsContainer}>
              <Text style={styles.textLeft}>Temperature:</Text>
              <Text style={styles.textRight}>
                {Math.round(currenWeather?.list?.[4]?.main?.temp - 273.15)} ℃
              </Text>
              {(currenWeather?.list?.[4]?.weather?.[0].main == 'Clear' && (
                <View>
                  <ImageBackground
                    style={styles.resultImage}
                    source={require('../../assets/icons/iconCloudy.png')}
                  />
                </View>
              )) ||
                (currenWeather?.list?.[4]?.weather?.[0].main == 'Rainy' && (
                  <View>
                    <ImageBackground
                      style={styles.resultImage}
                      source={require('../../assets/images/rainyImage.png')}
                    />
                  </View>
                )) ||
                (currenWeather?.list?.[4]?.weather?.[0].main == 'Clouds' && (
                  <View>
                    <ImageBackground
                      style={styles.resultImage}
                      source={require('../../assets/images/cloudyImage.png')}
                    />
                  </View>
                )) ||
                (currenWeather?.list?.[4]?.weather?.[0].main == 'Sunny' && (
                  <View>
                    <ImageBackground
                      style={styles.resultImage}
                      source={require('../../assets/images/sunnyImage.png')}
                    />
                  </View>
                )) ||
                (currenWeather?.list?.[4]?.weather?.[0].main == 'Storm' && (
                  <View>
                    <ImageBackground
                      style={styles.resultImage}
                      source={require('../../assets/images/stormImage.png')}
                    />
                  </View>
                )) ||
                (currenWeather?.list?.[4]?.weather?.[0].main == 'Snow' && (
                  <View>
                    <ImageBackground
                      style={styles.resultImage}
                      source={require('../../assets/images/snowImage.png')}
                    />
                  </View>
                )) ||
                (currenWeather?.list?.[4]?.weather?.[0].main == 'Thunder' && (
                  <View>
                    <ImageBackground
                      style={styles.resultImage}
                      source={require('../../assets/images/thunderImage.png')}
                    />
                  </View>
                ))}
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
  resultImage: {
    width: 50,
    height: 40,
    marginLeft: 20,
  },
  container: {
    marginTop: 50,
    marginLeft: 20,
    flexDirection: 'row',
    // gap: 50,
  },
  characteristicsContainer: {
    flexDirection: 'row',
    backgroundColor: 'silver',
    borderRadius: 20,
    alignItems: 'center',
    opacity: 0.7,
    width: 370,
    height: 60,
    gap: 15,
  },
  textLeft: {
    color: 'black',
    fontSize: 30,
    fontWeight: '200',
    marginLeft: 10,
  },
  textRight: {
    color: 'black',
    fontSize: 30,
    fontWeight: '300',
  },
  dayText: {
    color: 'black',
    // color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    // marginLeft: 300,
  },
});
