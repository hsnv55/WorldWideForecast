/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
// import React, { useEffect, useState } from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Geolocation from '@react-native-community/geolocation';
import { useEffect, useState } from 'react';

const Home = () => {
  const navigation = useNavigation();
  const handleFiveDays = () => {
    navigation.navigate('ForecastScreen',)
  };
  const [currenDayWeather, setCurrenDayWeather] = useState([]);
  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      request(info.coords.latitude, info.coords.longitude);
    });
  }, []);

  const request = async (lat: number, lon: number) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b1e3a0c6229dabb71a7d0990b34ca2d8`,
    );
    const data = await response.json();
    setCurrenDayWeather(data);
    console.log(data);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <ImageBackground
          source={{
            uri: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg9UjvVt9mzQM8eWqYXfsLHBsUJXIKhQdh86mcJUNdi_PzL7YtOi6Irm8IqQyWhMnqxXvhGH1DmFFyyuF6zww6Td6VMkbe07Lpv-IwfE1tKp0UhL5J_KozpFwenxAf3mANsFi8zb1UBcKg3lfEcVw77Hf5lMSSGOXlia1yWHzl2IrDdnCHUkJckA4ip3A/s960/Anime%20sky%20landscape%20live%20wallpaper.gif',
          }}
          style={styles.image}>
          <Image
            source={require('../assets/icons/iconCloudy.png')}
            style={styles.iconImage}
          />
            <View style={styles.container}>
            <View style={styles.resultBackground}>
            <Text style={styles.cityNameText}>{currenDayWeather.name}</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.textLeft}>Temperature:</Text>
              <Text style={styles.textRight}> {currenDayWeather.main?.temp}C</Text>
              {/* temp={Math.round(temp)} */}
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.textLeft}>Feels like:</Text>
              <Text style={styles.textRight}>
                {currenDayWeather.main?.feels_like}C
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.textLeft}>Humidity:</Text>
              <Text style={styles.textRight}>
                {currenDayWeather.main?.humidity}%
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.textLeft}>Wind speed:</Text>
              <Text style={styles.textRight}>
                {currenDayWeather.wind?.speed}km/h
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.textLeft}>Pressure:</Text>
              <Text style={styles.textRight}>
                {currenDayWeather.main?.pressure}
              </Text>
            </View>
          </View>
          </View>
       
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonFiveDays}
              onPress={handleFiveDays}>
              <Text style={styles.buttonTextFiveDays}>5-day forecast</Text>
            </TouchableOpacity>
          </View>
    
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  image: {
    flex: 1,
    width: 417,
    height: 1350,
  },
  iconImage: {
    width: 169,
    height: 132,
    marginTop: 50,
    marginLeft: 110,
  },
 
  buttonContainer: {
    marginTop: 200,
    marginLeft: 65,
  },
  buttonFiveDays: {
    opacity: 0.8,
    backgroundColor: '#AEB8DB',
    width: 270,
    height: 60,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextFiveDays: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
  },
  mainContainer2: {
    flex: 1,
  },
  mainImage: {
    flex: 1,
    // width: 417,
    // width: '100%',
    height: 1000,
  },
  input: {
    backgroundColor: 'white',
    width: 350,
    height: 45,
    marginTop: 20,
    marginLeft: 23,
    borderRadius: 10,
  },
  container: {
    // flex: 1,
    // opacity: 0.5,
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: 90,
    marginRight:25
  },
  resultBackground: {
    backgroundColor: 'white',
    borderRadius: 15,
    width: 350,
    height: 500,
    gap: 30,
    opacity: 0.8,
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
  error: {
    color: 'black',
    fontSize: 20,
    fontWeight: '400',
  },
 
});
