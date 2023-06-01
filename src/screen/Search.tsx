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
import {useState} from 'react';
import History from './History';

const apiKey = 'b1e3a0c6229dabb71a7d0990b34ca2d8';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&appid=${apiKey}&units=metric&q=`;

const Search = () => {
  const [value, setValue] = useState('');
  const [currenWeather, setCurrenWeather] = useState([]);

  const getWeather = async () => {
    const urlApi = await fetch(apiUrl + value);
    const data = await urlApi.json();
    console.log(data);
    setCurrenWeather(data);
  };

  const onChangeText = (text: string) => {
    setValue(text);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ImageBackground
        source={require('../assets/images/searchFon.png')}
        style={styles.mainImage}>
        <TextInput
          style={styles.input}
          placeholder="Search for City"
          placeholderTextColor={'black'}
          onChangeText={onChangeText}
          onEndEditing={getWeather}
        />
        <View style={styles.container}>
          <View style={styles.resultBackground}>
            <Text style={styles.cityNameText}>{currenWeather.name}</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.textLeft}>Temperature:</Text>
              <Text style={styles.textRight}> {currenWeather.main?.temp}C</Text>
              {/* temp={Math.round(temp)} */}
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.textLeft}>Feels like:</Text>
              <Text style={styles.textRight}>
                {currenWeather.main?.feels_like}C
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.textLeft}>Humidity:</Text>
              <Text style={styles.textRight}>
                {currenWeather.main?.humidity}%
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.textLeft}>Wind speed:</Text>
              <Text style={styles.textRight}>
                {currenWeather.wind?.speed}km/h
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.textLeft}>Pressure:</Text>
              <Text style={styles.textRight}>
                {currenWeather.main?.pressure}
              </Text>
            </View>
            {/* <View style={{flexDirection: 'row'}}>
              <Text style={styles.textLeft}>Weather:</Text>
              <Text style={styles.textRight}> {currenWeather.weather[0].main}</Text>
            </View> */}
           
          </View>
          <View style={{alignItems: 'center'}}>
              {currenWeather.cod === 404 && (
                <Text style={styles.error}>{'Sorry city not found :('}</Text>
              )}
            </View>
        </View>
{/* <History  name={value}/> */}
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
