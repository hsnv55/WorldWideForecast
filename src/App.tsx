/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
import React, { startTransition, useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './screen/Home';
import ForecastFiveDays from './screen/ForecastFiveDays';
import Search from './screen/Search';
import HistoryScreen from './screen/History';
import HomeSvg from './svg/homeSvg.svg';
import SearchSvg from './svg/searchSvg.svg';
import HistorySvg from './svg/historySvg.svg';
import { Provider } from 'react-redux';
import { store } from './reduxs/store';

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
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
