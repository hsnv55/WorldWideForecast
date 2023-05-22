/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import ForecastFiveDays from './ForecastFiveDays';
import Search from './Search';
import HomeIcon from './homeIcon';
import SearchIcon from './searchIcon';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarStyle: {
            backgroundColor: '#A9ADBA',
          },
          header: () => null,
          tabBarIcon: ({focused, color}) => <HomeIcon />,
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarStyle: {
            backgroundColor: '#A9ADBA',
          },
          header: () => null,
          tabBarIcon: ({focused, color}) => <SearchIcon />,
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
