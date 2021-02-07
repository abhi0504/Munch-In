import { MEALS } from '../../data/dummy-data';
import {
  MealsState,
  MealsActionTypes,
  TOGGLE_FAVORITE,
  SET_FILTERS,
} from '../types';

const initialState: MealsState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (
  state = initialState,
  action: MealsActionTypes,
): MealsState => {
  switch (action.type) {
   
    default: {
      return state;
    }
  }
};

export default mealsReducer;
