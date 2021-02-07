import React from 'react';
import { Text, Platform, StyleSheet } from 'react-native';
import {
  createAppContainer,
  NavigationRouteConfigMap,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {
  createBottomTabNavigator,
  NavigationBottomTabOptions,
} from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import {
  createMaterialBottomTabNavigator,
  NavigationMaterialBottomTabOptions,
  NavigationTabProp,
} from 'react-navigation-material-bottom-tabs';
// eslint-disable-next-line import/no-unresolved
import { StackNavigationOptions } from 'react-navigation-stack/lib/typescript/src/vendor/types';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import NewScreen from '../screens/NewScreen'
import AuthScreen from '../screens/AuthScreen'
import { primaryColor, white, accentColor } from '../config';

const defaultNavigationOptions: StackNavigationOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? primaryColor : white,
  },
  headerTintColor: Platform.OS === 'android' ? white : primaryColor,
  headerTitleStyle: {
    fontFamily: 'open-sans-bold',
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans',
  },
};

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions,
  },
);

const AuthNavigator = createStackNavigator(
  {
    Auth: AuthScreen
  },
  {
    defaultNavigationOptions,
  }
);

const styles = StyleSheet.create({
  tobBarLabel: { fontFamily: 'open-sans-bold' },
});

const tabScreenConfig: NavigationRouteConfigMap<
  NavigationMaterialBottomTabOptions | NavigationBottomTabOptions,
  NavigationTabProp<NavigationRoute<NavigationParams>, unknown>,
  unknown
> = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon(tabInfo) {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: primaryColor,
      tabBarLabel:
        Platform.OS === 'android' ? (
          <Text style={styles.tobBarLabel}>Meals</Text>
        ) : (
          'Meals'
        ),
    },
  },
  Meals3: {
    screen: NewScreen,
    navigationOptions: {
      tabBarIcon(tabInfo) {
        return (
          <Ionicons name="ios-search" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: accentColor,
      tabBarLabel:
        Platform.OS === 'android' ? (
          <Text style={styles.tobBarLabel}>Meals</Text>
        ) : (
          'Meals'
        ),
    },
  },
  Meals2: {
    screen: NewScreen,
    navigationOptions: {
      tabBarIcon(tabInfo) {
        return (
          <Ionicons name="ios-add" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: primaryColor,
      tabBarLabel:
        Platform.OS === 'android' ? (
          <Text style={styles.tobBarLabel}>Meals</Text>
        ) : (
          'Meals'
        ),
    },
  },
  Meals1: {
    screen: NewScreen,
    navigationOptions: {
      tabBarIcon(tabInfo) {
        return (
          <Ionicons name="md-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: accentColor,
      tabBarLabel:
        Platform.OS === 'android' ? (
          <Text style={styles.tobBarLabel}>Meals</Text>
        ) : (
          'Meals'
        ),
    },
  },
  Favorites: {
    screen: NewScreen,
    navigationOptions: {
      tabBarIcon(tabInfo) {
        return <AntDesign name="user" size={24} color="white" />;
      },
      tabBarColor: primaryColor,
      tabBarLabel:
        Platform.OS === 'android' ? (
          <Text style={styles.tobBarLabel}>Favorites</Text>
        ) : (
          'Favorites'
        ),
    },
  },
};

const MealsFavTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: white,
        shifting: true,
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          labelStyle: {
            fontFamily: 'open-sans-bold',
          },
          activeTintColor: accentColor,
        },
      });

const MainNavigator = createDrawerNavigator(
  {
    Auth: AuthNavigator,
    FavMeals: {
      screen: MealsFavTabNavigator,
      navigationOptions: { drawerLabel: 'Meals' },
    },
  },
  {
    contentOptions: {
      activeTintColor: accentColor,
      labelStyle: {
        fontFamily: 'open-sans',
      },
    },
  },
);

export default createAppContainer(MainNavigator);
