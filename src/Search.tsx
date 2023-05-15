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

const Search = () => {
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.goBack();
  };
  // const [text, onChangeText] = React.useState('Search for City');
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
          <Text style={styles.searchCity}>Search for City</Text>
        </View>
        <TextInput
          style={styles.input}
          // onChangeText={onChangeText}
          // value={text}
        >
          {/* <Image
            source={require('./iconSearch.png')}
            style={styles.iconSearch}
          /> */}
        </TextInput>
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
    backgroundColor: 'silver',
    width: 30,
    height: 30,
    borderRadius: 5,
    marginTop: 20,
    marginLeft: 10,
  },
  input: {
    backgroundColor: 'silver',
    width: 350,
    height: 40,
    marginTop: 40,
    marginLeft: 23,
    borderRadius: 10,
    fontWeight: '500',
    // fontSize: 20,
  },
  searchCity: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 20,
    marginLeft: 90,
  },
  // iconSearch: {
  //   width: 20,
  //   height: 20,
  //   marginLeft: 15,
  //   marginTop: 1,
  // },
});
