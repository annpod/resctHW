import {INIT_DATA,GET_MAIN_RECIPE, SAVE_FILTER, DELETE_ITEM, ADD_ITEM} from '../actions/types';

export const initData = () => {
	return { type: INIT_DATA };
};
export const getMainRecipe = (active) => {
	return { type: GET_MAIN_RECIPE, payload: active };
};
export const saveFilter = (filter) => {
	return { type: SAVE_FILTER, payload: filter };
};
export const deleteItem = (item) => {
	return { type: DELETE_ITEM, payload: item };
};
export const addItem = (item) => {
	return { type: ADD_ITEM, payload: item };
};

