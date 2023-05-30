/* eslint-disable react/react-in-jsx-scope */
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
// import {Image} from 'react-native-svg';
import {StyleSheet} from 'react-native';
import {Image} from 'react-native';

const Wwe = () => {
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <TouchableOpacity onPress={handleBack}>
      <Image
        source={require('../assets/icons/backArrowIcon.png')}
        style={styles.imageBackArrow}
      />
    </TouchableOpacity>
  );
};

export default Wwe;

const styles = StyleSheet.create({
  imageBackArrow: {
    width: 30,
    height: 30,
    marginLeft: 15,
    marginTop: 20,
  },
});
