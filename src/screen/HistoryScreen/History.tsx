import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../reduxs/store';

const History = () => {
  const {weter} = useSelector((state: RootState) => state.history);

  console.log(weter);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ImageBackground
        source={require('../../assets/images/historyFon.png')}
        style={styles.mainImage}>
        <ScrollView contentContainerStyle={{paddingVertical: 20}}>
          {weter?.map((item, index) => {
            return (
              <View key={index} style={styles.container}>
                <View style={styles.resultBackground}>
                  <Text style={styles.cityNameText}>{item?.name}</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.textLeft}>Temperature:</Text>
                    <Text style={styles.textRight}> {item.main?.temp}℃</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.textLeft}>Feels like:</Text>
                    <Text style={styles.textRight}>
                      {item.main?.feels_like}℃
                    </Text>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default History;

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
  textLeft: {
    color: 'black',
    fontSize: 30,
    fontWeight: '200',
  },
  buttonBackArrow: {
    backgroundColor: '#A9ADBA',
    width: 35,
    height: 35,
    borderRadius: 5,
    marginTop: 20,
    marginLeft: 10,
  },
  mainImage1: {
    flex: 1,
    // width: 417,
    // width: '100%',
    height: 1000,
  },

  container: {
    // flex: 1,
    // opacity: 0.5,
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: 44,
  },
  resultBackground: {
    backgroundColor: 'white',
    borderRadius: 15,
    width: 350,
    height: 200,
    gap: 30,
    opacity: 0.8,
  },
  cityNameText: {
    color: 'black',
    fontSize: 30,
    fontWeight: '500',
    textAlign: 'center',
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
