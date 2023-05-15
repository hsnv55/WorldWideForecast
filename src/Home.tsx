/* eslint-disable react-native/no-inline-styles */
import React from 'react';
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

const Home = () => {
  const navigation = useNavigation();
  const handleSearch = () => {
    navigation.navigate('ForecastScreen');
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <ImageBackground
          source={require('./wetherBackground.png')}
          style={styles.image}>
          <Text style={styles.textBaku}>Baku</Text>
          <Image
            source={require('./iconCloudy.png')}
            style={styles.iconImage}
          />
          <View style={{flexDirection: 'row', marginLeft: 130}}>
            <Text style={styles.textTemperature}>17</Text>
            <Image
              source={require('./degreeTemperature.png')}
              style={styles.imageDegree}
            />
          </View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
            }}>
            Friday, 26 August 2022 | 10:00
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonFiveDays}
              onPress={handleSearch}>
              <Text style={styles.buttonTextFiveDays}>5-day forecast</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.scroll}>
            <Text style={styles.textMoreForToday}>More for today</Text>
            <Text style={styles.textFelt}>Felt</Text>
            <Text style={styles.textFeltResult}>13C</Text>
            <Text style={styles.textWindSpeed}>Wind speed</Text>
            <Text style={styles.textWindSpeedResult}>40.4 km/h</Text>
            <Text style={styles.textHumidity}>Humidity</Text>
            <Text style={styles.textHumidityResult}>61%</Text>
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
  textBaku: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 165,
    marginTop: 20,
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
  textTemperature: {
    fontSize: 110,
    fontWeight: '300',
    color: 'white',
  },
  imageDegree: {
    width: 20,
    height: 20,
    marginTop: 37,
  },
  buttonContainer: {
    marginTop: 200,
    marginLeft: 65,
  },
  buttonFiveDays: {
    backgroundColor: 'silver',
    width: 270,
    height: 60,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextFiveDays: {
    color: 'black',
    fontSize: 20,
    fontWeight: '400',
  },
  scroll: {
    backgroundColor: 'silver',
    width: 380,
    height: 340,
    marginTop: 150,
    marginLeft: 7,
    borderRadius: 15,
  },
  textMoreForToday: {
    color: 'black',
    lineHeight: 80,
    fontSize: 40,
    fontWeight: '200',
    textAlign: 'center',
  },
  textFelt: {
    color: 'black',
    marginLeft: 30,
    fontSize: 20,
    fontWeight: '200',
  },
  textFeltResult: {
    color: 'black',
    marginLeft: 30,
    fontSize: 30,
    fontWeight: '300',
  },
  textWindSpeed: {
    color: 'black',
    marginLeft: 30,
    fontSize: 20,
    fontWeight: '200',
    lineHeight: 40,
  },
  textWindSpeedResult: {
    color: 'black',
    marginLeft: 30,
    fontSize: 30,
    fontWeight: '300',
  },
  textHumidity: {
    color: 'black',
    marginLeft: 30,
    fontSize: 20,
    fontWeight: '200',
    lineHeight: 40,
  },
  textHumidityResult: {
    color: 'black',
    marginLeft: 30,
    fontSize: 30,
    fontWeight: '300',
  },
  textRainy: {
    color: 'black',
    marginLeft: 190,
    fontSize: 20,
    fontWeight: '200',
    lineHeight: 40,
    marginTop: -200,
  },
});
