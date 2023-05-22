/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import ForecastFiveDays from './ForecastFiveDays';
import Search from './Search';
import HomeIcon from './homeIcon';
import SearchIcon from './searchIcon';

import { Image } from 'react-native';
// import Svg, {Circle} from 'react-native-svg';
import Icon from './aserst/icon/search';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    
    <Tab.Navigator >
      <Tab.Screen
        options={{
<<<<<<< HEAD
          tabBarStyle: {
            backgroundColor: '#A9ADBA',
          },
          header: () => null,
          tabBarIcon: ({focused, color}) => <HomeIcon />,
=======
          tabBarStyle:{
            backgroundColor:"#AEB8DB",
          },
          header: () => null,
          tabBarIcon: ({ focused, color }) => (
            <HomeIcon />
          ),
>>>>>>> 3d4c79bcac91c6c49ca7974ebacc10ad27e87665
        }}

        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
<<<<<<< HEAD
          tabBarStyle: {
            backgroundColor: '#A9ADBA',
          },
          header: () => null,
          tabBarIcon: ({focused, color}) => <SearchIcon />,
=======
          tabBarStyle:{
            backgroundColor:"#A9ADBA",
          },
          header: () => null,
          tabBarIcon: ({ focused, color }) => (
            <Icon />
          ),
>>>>>>> 3d4c79bcac91c6c49ca7974ebacc10ad27e87665
        }}
        name="Search"
        component={Search}
      />
    </Tab.Navigator>
  
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ header: () => null }}
        initialRouteName="Home">
        <Stack.Screen
          name="HomeScreen"
          component={TabNavigator}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="ForecastScreen"
          component={ForecastFiveDays}
          options={{ header: () => null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;