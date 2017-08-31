import {INITDATA, GET_MAIN_RECIPE, SAVE_FILTER, DELETE_ITEM, ADD_ITEM} from '../actions/types';
import { recipes } from '../data/recipes';

const counterReducer = (state = {recipes: [], mainRecipe: {}, filter: ''}, action) => {
	switch (action.type) {
		case INITDATA:
			return {...state, recipes: recipes, mainRecipe: recipes[0]};
		case GET_MAIN_RECIPE:
		 	return {...state, mainRecipe: action.payload};
		case SAVE_FILTER:
			return {...state, filter: action.payload};
		case DELETE_ITEM:
			return {...state, recipes: state.recipes.filter( recipes => recipes.id !== action.payload.id)};
		case ADD_ITEM:
			console.log(action.payload);
			return {...state, recipes: state.recipes.concat(action.payload)};
		default:
			return state;
	}
};

export default counterReducer;

