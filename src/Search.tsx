/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {Text} from 'react-native-svg';

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
    // const res = await urlApi.json();
    // console.log(res[0]);
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
          <TouchableOpacity style={styles.buttonBackArrow} onPress={handleBack}>
            <Image
              source={require('./backArrow.png')}
              style={styles.imageBackArrow}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSearch} onPress={getWeather}>
            <TextInput
              // value={value}
              placeholder="Search for City"
              placeholderTextColor={'black'}
              onChangeText={onChangeText}
            />
          </TouchableOpacity>
          {/* {currenWeather?.map((item, index) => (
            <View key={index}>
              <Text>{item.main.name}</Text>
            </View>
          ))} */}
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
    width: 300,
    height: 35,
    marginTop: 20,
    marginLeft: 23,
    borderRadius: 10,
  },
});
