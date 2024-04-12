// Mealsnavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

// Import your screens
import CategoryScreen from '../screens/CategoryScreen';
import CoffeeCategoryScreen from '../screens/CoffeeCategoryScreen';
import CoffeeDetailScreen from '../screens/CoffeeDetailScreen';

import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import FilterScreen from '../screens/FilterScreen';
import AboutScreen from '../screens/AboutScreen';
import ContactScreen from '../screens/ContactScreen';
import BottomTabNavigator from '../components/BottomTabNavigator';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const CategoryStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Category" component={CategoryScreen} />
      <Stack.Screen name="CoffeeCategory" component={CoffeeCategoryScreen} />
      <Stack.Screen name="CoffeeDetail" component={CoffeeDetailScreen} />
    </Stack.Navigator>
  );
};

const Mealsnavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={BottomTabNavigator} />
        <Drawer.Screen name="Product" component={ProductScreen} />
        <Drawer.Screen name="Filters" component={FilterScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Contact" component={ContactScreen} />
        <Drawer.Screen name="Category" component={CategoryStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Mealsnavigator;
