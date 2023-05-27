/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';

const apiKey = 'b1e3a0c6229dabb71a7d0990b34ca2d8';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&appid=${apiKey}&units=metric&q=`;
const Search = () => {
  const [value, setValue] = useState('');
  const [currenWeather, setCurrenWeather] = useState([]);

  const navigation = useNavigation();
  const handleBack = () => {
    navigation.goBack();
  };

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
        source={require('./imageSearch.png')}
        style={styles.mainImage}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.buttonSearch} onPress={getWeather}>
            <TextInput
              placeholder="Search for City"
              placeholderTextColor={'black'}
              onChangeText={onChangeText}
              // onEndEditing={handleSearchResult}
            />
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{color: 'white', fontSize: 20}}>
            {currenWeather.name}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {currenWeather.cod == 404 && (
            <Text style={{color: 'white', fontSize: 35}}>"city not found"</Text>
          )}
        </View>
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
    width: 417,
    height: 1000,
  },
  imageBackArrow: {
    width: 30,
    height: 30,
    marginLeft: 4,
    marginTop: 3,
  },
  buttonBackArrow: {
    backgroundColor: '#A9ADBA',
    width: 35,
    height: 35,
    borderRadius: 5,
    marginTop: 20,
    marginLeft: 10,
  },
  buttonSearch: {
    backgroundColor: '#A9ADBA',
    width: 350,
    height: 35,
    marginTop: 20,
    marginLeft: 23,
    borderRadius: 10,
  },
});
