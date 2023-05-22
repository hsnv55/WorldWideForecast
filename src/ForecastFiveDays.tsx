/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

const ForecastFiveDays = () => {
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.goBack();
  };
  // const ForecastFiveDays = (props: any) => {
  //   const navigation = useNavigation();
  //   const route = useRoute();
  //   const handleBack = () => {
  //     navigation.goBack();
  //   };
  //   const reqwest = async () => {
  //     const response = await fetch(
  //       `http://www.themealdb.com/api/json/v1/1/lookup.php?i=${route.params.idMeal}`,
  //     );
  //     const data = await response.json();
  //     console.log(data);
  //   };

  //   useEffect(() => {
  //     reqwest();
  //   }, [route.params.idMeal]);

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
          <Text style={styles.fiveDays}>5 Days</Text>
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
    backgroundColor: '#A9ADBA',
    width: 35,
    height: 35,
    borderRadius: 5,
    marginTop: 20,
    marginLeft: 10,
  },
  fiveDays: {
    color: 'white',
    fontSize: 25,
    fontWeight: '500',
    marginLeft: 110,
    marginTop: 20,
  },
});
