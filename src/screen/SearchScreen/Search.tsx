/* eslint-disable eqeqeq */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {ReactNode, useState} from 'react';

const apiKey = 'b1e3a0c6229dabb71a7d0990b34ca2d8';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&appid=${apiKey}&units=metric&q=`;

type Weather = {
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
const Search = () => {
  const [value, setValue] = useState('');
  const [currenWeather, setCurrenWeather] = useState<Weather>();

  const getWeather = async () => {
    const urlApi = await fetch(apiUrl + value);
    const data = await urlApi.json();
    console.log(data);
    setCurrenWeather(data);
    console.log(data);
  };

  const onChangeText = (text: string) => {
    setValue(text);
  };

  console.log('currentWeather', currenWeather);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ImageBackground
        source={require('../../assets/images/searchFon.png')}
        style={styles.mainImage}>
        <TextInput
          style={styles.input}
          placeholder="Search for city ..."
          placeholderTextColor={'black'}
          onChangeText={onChangeText}
          onEndEditing={getWeather}
        />
        {!currenWeather ||
          (currenWeather?.cod == 404 && (
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <View style={styles.errorContainer}>
                <Text style={styles.error}>{'Sorry city not found :('}</Text>
              </View>
            </View>
          )) || (
            <View style={styles.container}>
              {(currenWeather?.weather?.[0].main == 'Clear' && (
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
                (currenWeather?.weather?.[0].main == 'Rainy' && (
                  <View>
                    <ImageBackground
                      style={styles.resultImage}
                      source={require('../../assets/images/rainyImage.png')}
                    />
                  </View>
                )) ||
                (currenWeather?.weather?.[0].main == 'Clouds' && (
                  <View>
                    <ImageBackground
                      style={styles.resultImage}
                      source={require('../../assets/images/cloudyImage.png')}
                    />
                  </View>
                )) ||
                (currenWeather?.weather?.[0].main == 'Sunny' && (
                  <View>
                    <ImageBackground
                      style={styles.resultImage}
                      source={require('../../assets/images/sunnyImage.png')}
                    />
                  </View>
                )) ||
                (currenWeather?.weather?.[0].main == 'Storm' && (
                  <View>
                    <ImageBackground
                      style={styles.resultImage}
                      source={require('../../assets/images/stormImage.png')}
                    />
                  </View>
                )) ||
                (currenWeather?.weather?.[0].main == 'Snow' && (
                  <View>
                    <ImageBackground
                      style={styles.resultImage}
                      source={require('../../assets/images/snowImage.png')}
                    />
                  </View>
                )) ||
                (currenWeather?.weather?.[0].main == 'Thunder' && (
                  <View>
                    <ImageBackground
                      style={styles.resultImage}
                      source={require('../../assets/images/thunderImage.png')}
                    />
                  </View>
                ))}
              <Text style={styles.cityNameText}>{currenWeather?.name}</Text>
              <View style={styles.characteristicsContainer}>
                <Text style={styles.textLeft}>Temperature:</Text>
                <Text style={styles.textRight}>
                  {currenWeather?.main?.temp}C
                </Text>
                {/* temp={Math.round(temp)} */}
              </View>
              <View style={styles.characteristicsContainer}>
                <Text style={styles.textLeft}>Feels like:</Text>
                <Text style={styles.textRight}>
                  {currenWeather?.main?.feels_like}C
                </Text>
              </View>
              <View style={styles.characteristicsContainer}>
                <Text style={styles.textLeft}>Humidity:</Text>
                <Text style={styles.textRight}>
                  {currenWeather?.main?.humidity}%
                </Text>
              </View>
              <View style={styles.characteristicsContainer}>
                <Text style={styles.textLeft}>Wind speed:</Text>
                <Text style={styles.textRight}>
                  {currenWeather?.wind?.speed}km/h
                </Text>
              </View>
              <View style={styles.characteristicsContainer}>
                <Text style={styles.textLeft}>Pressure:</Text>
                <Text style={styles.textRight}>
                  {currenWeather?.main?.pressure}
                </Text>
              </View>
            </View>
          )}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  mainImage: {
    flex: 1,
    height: 1000,
  },
  input: {
    backgroundColor: 'white',
    width: 370,
    height: 45,
    marginTop: 20,
    marginLeft: 23,
    borderRadius: 10,
    color: 'black',
    fontWeight: '400',
  },
  container: {
    alignItems: 'center',
    marginTop: 20,
    gap: 20,
  },
  resultBackground: {
    backgroundColor: 'white',
    borderRadius: 15,
    width: 350,
    height: 500,
    opacity: 0.8,
  },
  cityNameText: {
    color: 'black',
    fontSize: 40,
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
  errorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    width: 300,
    height: 50,
    borderRadius: 15,
  },
  error: {
    color: 'white',
    fontSize: 30,
    fontWeight: '400',
  },
  characteristicsContainer: {
    flexDirection: 'row',
    backgroundColor: 'silver',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.7,
    width: 320,
    height: 60,
    gap: 15,
  },
  resultImage: {
    // width: 1000,
    // height: 1000,
    width: 200,
    height: 150,
  },
  textWeather: {
    color: 'black',
    fontSize: 25,
    fontWeight: '400',
    textAlign: 'center',
  },
});
