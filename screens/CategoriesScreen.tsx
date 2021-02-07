import React from 'react';
import { FlatList, ListRenderItemInfo, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';

import { NavigationStackScreenComponent } from 'react-navigation-stack';

import Category from '../models/category';
import { MEALS } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';
import MealList from '../components/MealList';
import HeaderButtonComponent from '../components/HeaderButton';

const CategoriesScreen: NavigationStackScreenComponent = ({ navigation }) => {
  const renderGridItem = (itemData: ListRenderItemInfo<Category>) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
              categoryId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  return (
    // <FlatList data={MEALS} renderItem={renderGridItem} numColumns={1} />
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#323232'
    }}>
      <MealList listData={MEALS} navigation={navigation} />
    </View>
  );
};

CategoriesScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: 'munchIn',
    headerTintColor: '#fff76a',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerLeft() {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButtonComponent}>
          <Item
            title="Menu"
            iconName="ios-restaurant"
            iconSize={35}
            color="#fff76a"
            onPress={() => {
              // ignoring this error because navigation als has methods
              // from NavigationDrawerProp
              // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
              // @ts-ignore
              // navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      );
    },
    headerRight() {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButtonComponent}>
          <Item
            title="Menu"
            iconName="ios-chatboxes"
            onPress={() => {
              // ignoring this error because navigation als has methods
              // from NavigationDrawerProp
              // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
              // @ts-ignore
              // navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      );
    },
  };
};

export default CategoriesScreen;
