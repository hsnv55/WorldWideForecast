import React, { useState } from 'react';
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
import { useNavigation } from '@react-navigation/native';


const apiKey = '4218646ca341715da30dd08bb767ee94';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&appid=${apiKey}&units=metric&q=`;
const Search = () => {
  const [value, setValue] = useState('');
  const [weather, setWeather] = useState({});
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  const onGetData = async () => {
    const urlApi = await fetch(apiUrl + value);
    const data = await urlApi.json();
    console.log(data);
    setWeather(data);
  };

  const onChangeText = (text) => {
    setValue(text);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ImageBackground
        source={require('./wetherBackground.png')}
        style={styles.mainImage}
      >
       <View style={{ flexDirection: 'row', gap: 10 }}>
          <TouchableOpacity
            style={styles.buttonBackArrow}
            onPress={onGetData}
          >
            <Image
              source={require('./aserst/img/backArrow.png')}
              style={styles.imageBackArrow}
            />
          </TouchableOpacity>
          <TextInput
            style={styles.textInput}
            placeholder="Search for City"
            placeholderTextColor={'black'}
            onChangeText={onChangeText}
          />
        </View>
        <Text style={{ color: 'white', fontSize:40,alignSelf:'center'}}>
            {weather.name}, {weather.sys?.country}
          </Text>
        <ImageBackground style = {styles.Rectangle}
        source = {require ("./Rectangle.png")}>
          <View style={{left:25}}>
          <Text style={{ color: 'black', fontSize: 25}}>
             Felt
          </Text>
          <Text style={{ color: 'black', fontSize: 35}}>
             {weather.main?.temp}°C
          </Text>
          <Text style={{ color: 'black', fontSize: 25}}>
             Humidity
          </Text>
          <Text style={{ color: 'black', fontSize: 35}}>
             {weather.main?.humidity}%
          </Text>
          <Text style={{ color: 'black', fontSize: 25}}>
             Wind speed
          </Text>
          <Text style={{ color: 'black', fontSize: 35}}>
             {weather.wind?.speed} m/s
          </Text>
          <Text style={{ color: 'black', fontSize: 25}}>
          Precipitation
          </Text>
          <Text style={{ color: 'black', fontSize: 35}}>
             {weather.weather?.[0]?.main} 
          </Text>
          </View>
        </ImageBackground>
        <View
          style={{
            backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {weather.cod === '404' && (
            <Text style={{ color: 'white', fontSize: 35 }}>City not found</Text>
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
    height: 40,
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
  textInput: {
    width: 300,
    height: 40,
    fontSize: 16,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginRight: 10,
    marginTop:20
  },
  weatherIcon: {
    width: 100,
    height: 100,
  },
  Rectangle:{
    width:400,
    height:450,
    backgroundColor:"#EAEBEE",
    opacity:0.4,
    borderRadius:10,
    marginLeft:-5,
    marginTop:60,
  },
});
