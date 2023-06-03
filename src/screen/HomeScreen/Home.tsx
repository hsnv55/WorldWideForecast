/* eslint-disable react/react-in-jsx-scope */
import {
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
import {ReactNode, useEffect, useState} from 'react';

type weather = {
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
const Home = () => {
  const navigation = useNavigation();
  const handleFiveDays = () => {
    navigation.navigate('ForecastScreen');
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
    // console.log(data);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <ImageBackground
          source={{
            uri: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg9UjvVt9mzQM8eWqYXfsLHBsUJXIKhQdh86mcJUNdi_PzL7YtOi6Irm8IqQyWhMnqxXvhGH1DmFFyyuF6zww6Td6VMkbe07Lpv-IwfE1tKp0UhL5J_KozpFwenxAf3mANsFi8zb1UBcKg3lfEcVw77Hf5lMSSGOXlia1yWHzl2IrDdnCHUkJckA4ip3A/s960/Anime%20sky%20landscape%20live%20wallpaper.gif',
          }}
          style={styles.image}>
          {/* <View style={styles.container}> */}
          {(currenDayWeather?.weather?.[0].main == 'Clear' && (
            <View>
              <ImageBackground
                style={styles.resultImage}
                source={require('../../assets/icons/iconCloudy.png')}
                // source={{
                //   uri: 'https://i.pinimg.com/originals/43/e1/7a/43e17aa3c2ba523273401a7f7a130a8c.gif',
                // }}
              />
              {/* <Text style={styles.textWeather}>
                    {currenWeather?.weather?.[0].main}
                  </Text> */}
            </View>
          )) ||
            (currenDayWeather?.weather?.[0].main == 'Rainy' && (
              <View>
                <ImageBackground
                  style={styles.resultImage}
                  source={require('../../assets/images/rainyImage.png')}
                />
              </View>
            )) ||
            (currenDayWeather?.weather?.[0].main == 'Clouds' && (
              <View>
                <ImageBackground
                  style={styles.resultImage}
                  source={require('../../assets/images/cloudyImage.png')}
                />
              </View>
            )) ||
            (currenDayWeather?.weather?.[0].main == 'Sunny' && (
              <View>
                <ImageBackground
                  style={styles.resultImage}
                  source={require('../../assets/images/sunnyImage.png')}
                />
              </View>
            )) ||
            (currenDayWeather?.weather?.[0].main == 'Storm' && (
              <View>
                <ImageBackground
                  style={styles.resultImage}
                  source={require('../../assets/images/stormImage.png')}
                />
              </View>
            )) ||
            (currenDayWeather?.weather?.[0].main == 'Snow' && (
              <View>
                <ImageBackground
                  style={styles.resultImage}
                  source={require('../../assets/images/snowImage.png')}
                />
              </View>
            )) ||
            (currenDayWeather?.weather?.[0].main == 'Thunder' && (
              <View>
                <ImageBackground
                  style={styles.resultImage}
                  source={require('../../assets/images/thunderImage.png')}
                />
              </View>
            ))}
          <View style={styles.container}>
            <View style={styles.resultBackground}>
              <Text style={styles.cityNameText}>{currenDayWeather.name}</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.textLeft}>Temperature:</Text>
                <Text style={styles.textRight}>
                  {' '}
                  {Math.round(currenDayWeather.main?.temp - 273.15)}℃
                </Text>
                {/* temp={Math.round(temp)} */}
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.textLeft}>Feels like:</Text>
                <Text style={styles.textRight}>
                  {Math.round(currenDayWeather.main?.feels_like - 273.15)}℃
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
    marginRight: 25,
  },
  resultBackground: {
    backgroundColor: 'white',
    borderRadius: 15,
    width: 350,
    height: 500,
    opacity: 0.8,
  },
  resultImage: {
    // width: 1000,
    // height: 1000,
    width: 200,
    height: 150,
    // alignItems: 'center',
    marginLeft: 100,
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
