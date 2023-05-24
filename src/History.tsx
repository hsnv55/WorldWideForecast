import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ImageBackground, StyleSheet} from 'react-native';

const History = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ImageBackground
        source={require('./imageSearch.png')}
        style={styles.mainImage}
      />
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
  buttonBackArrow: {
    backgroundColor: '#A9ADBA',
    width: 35,
    height: 35,
    borderRadius: 5,
    marginTop: 20,
    marginLeft: 10,
  },
});
