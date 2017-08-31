export const filterList = (state) => {

		let updatedList = state.recipeReducer.recipes;
		let filterValue =  state.recipeReducer.filter.toString().toLowerCase();
		updatedList = updatedList.filter(function (item) {
			return item.title.toString().toLowerCase().search(
					filterValue) !== -1 || item.ingredients.toString().toLowerCase().search(
					filterValue) !== -1;
		});
		return updatedList;
}