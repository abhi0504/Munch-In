import React from 'react';
import { View , Text } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { NavigationStackScreenComponent } from 'react-navigation-stack';

import Category from '../models/category';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';
import HeaderButtonComponent from '../components/HeaderButton';

const NewScreen: NavigationStackScreenComponent = ({ navigation }) => {
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>
            New Screen
        </Text>
    </View>
  );
};

NewScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: 'MunchIn',
    headerLeft() {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButtonComponent}>
          <Item
            title="Menu"
            iconName="ios-menu"
            onPress={() => {
              // ignoring this error because navigation als has methods
              // from NavigationDrawerProp
              // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
              // @ts-ignore
              navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      );
    },
  };
};

export default NewScreen;
