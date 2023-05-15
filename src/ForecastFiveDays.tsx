/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ForecastFiveDays = () => {
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ImageBackground
        source={require('./wetherBackground.png')}
        style={styles.mainImage}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.buttonBackArrow} onPress={handleBack}>
            <Image
              source={require('./aserst/img/backArrow.png')}
              style={styles.imageBackArrow}
            />
          </TouchableOpacity>
          <Text style={styles.sevenDays}>5 Days</Text>
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
  imageBackArrow: {
    width: 30,
    height: 30,
  },
  buttonBackArrow: {
    backgroundColor: 'silver',
    width: 30,
    height: 30,
    borderRadius: 5,
    marginTop: 20,
    marginLeft: 10,
  },
  sevenDays: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 120,
    marginTop: 20,
  },
});
