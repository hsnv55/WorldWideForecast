import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import ForecastFiveDays from './ForecastFiveDays';
import Search from './Search';
// import Svg, {Circle} from 'react-native-svg';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
// const Svg = Circle();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          header: () => null,
          // tabBarIcon: ({focused, color}) => (
          //   <Icon size={20} name={'cogs'} color={'red'} />
          // ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{header: () => null}}
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

// Проблемы с Макетом:
// 1. Нужно в buttonTab добавить иконки и убрать белый цвет
// 2. В Search нужно добавить иконку поиска и сделать так чтобы текс находился по центру

//  Логика программы:
// 1. Когда хотим узнать программу на 5дн нужно чтобы выходила реальная инфа
// 2. Нужно чтобы на главном экране находилось реальная инфа
// 3. В Search нужно чтобы при вводе городов выходила реальная инфа
// 4. В Search при нажатие на Enter нужно чтобы нас перекинуло на новый экран
