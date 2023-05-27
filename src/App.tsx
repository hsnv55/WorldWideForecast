/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import ForecastFiveDays from './ForecastFiveDays';
import Search from './Search';
import HistoryScreen from './History';
import HomeSvg from './homeSvg.svg';
import SearchSvg from './searchSvg.svg';
import HistorySvg from './historySvg.svg';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveBackgroundColor: '#A9ADBA',
      tabBarShowLabel: false,
      tabBarBackground: () => {
        return false;
      },
    }}>
    <Tab.Screen
      options={{
        tabBarStyle: {
          backgroundColor: 'silver',
          opacity: 0.8,
        },
        header: () => null,
        tabBarIcon: ({focused, color}) => <HomeSvg />,
      }}
      name="Home"
      component={Home}
    />
    <Tab.Screen
      options={{
        tabBarStyle: {
          backgroundColor: 'silver',
          opacity: 0.8,
        },
        header: () => null,
        tabBarIcon: ({focused, color}) => <SearchSvg />,
      }}
      name="Search"
      component={Search}
    />
    <Tab.Screen
      options={{
        tabBarStyle: {
          backgroundColor: 'silver',
          opacity: 0.8,
        },
        header: () => null,
        tabBarIcon: ({focused, color}) => <HistorySvg />,
      }}
      name="History"
      component={HistoryScreen}
    />
  </Tab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{header: () => null}}
        initialRouteName="Home">
        <Stack.Screen
          name="HomeScreen"
          component={TabNavigator}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="ForecastScreen"
          component={ForecastFiveDays}
          options={{header: () => null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
