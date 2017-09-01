import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actions from '../actions';
import { filterList } from './../selectors';
import './book.css';
import MainItem from './RecipeItems/MainItem';
import ListItem from './RecipeItems/ListItem';




class Book extends Component {
	constructor(){
		super();

		this.deleteItem = this.deleteItem.bind(this);
		this.getMainRecipe = this.getMainRecipe.bind(this);
		this.filterList = this.filterList.bind(this);
	}
	deleteItem(item) {

	}
	componentDidMount(){
		this.props.initData();
	}
	filterList(e){
		this.props.saveFilter(e.target.value);
	}

	getMainRecipe(itemId) {
		let active = this.props.recipes.find((e) => e.id === itemId);
		this.props.getMainRecipe(active);
	}
	render() {
		const {initData, prevCounters, saveFilter, mainRecipe, getMainRecipe, recipes, filterList, filteredList, deleteItem} = this.props;
		return (
			<div className='container'>
				<MainItem mainRecipe={mainRecipe}/>
				<div className='search'>
					<input className='searchField' type="text" placeholder='Search' onChange={this.filterList} ref={(input) => this.textInput = input} />
				</div>
				<div className='recipeListWrapper'>
					<ul className='recipeList'>
						{filteredList
						//.filter(key => key.id !== mainRecipe.id)
						.map((item, index) =>(
							<ListItem key={index} item={item} mainRecipeId={mainRecipe.id} getMainRecipe={this.getMainRecipe} deleteItem={deleteItem} />
						))}
					</ul>
				</div>

			</div>
		)
	}
}

const mapStateToProps = state => ({
	recipes: state.recipeReducer.recipes,
	mainRecipe: state.recipeReducer.mainRecipe,
	saveFilter: state.recipeReducer.saveFilter,
	filteredList: filterList(state),
	deleteItem: state.recipeReducer.deleteItem
});

const mapDispatchToProps = dispatch => {
	return{
		...bindActionCreators(actions, dispatch)

	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);