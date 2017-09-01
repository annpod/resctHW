/**
 * Created by Yocto12 on 9/1/2017.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actions from '../../actions';
const FontAwesome = require('react-fontawesome');

class AddRecipeForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newRecipe: {
				title: '',
				img: 'http://images.media-allrecipes.com/userphotos/560x315/662790.jpg',
				ingredients: '',
				description: ''
			}
		}
		this.addItem = this.addItem.bind(this);
		this.updateInput = this.updateInput.bind(this);
	}
	componentDidMount(){

	}
	updateInput(e) {
		if (e.target.name === 'title'){
			this.setState({newRecipe:{...this.state.newRecipe, title: e.target.value}});
		}
		if (e.target.name === 'img'){
			this.setState({newRecipe:{...this.state.newRecipe, img: e.target.value}});
		}
		if (e.target.name === 'ingredients'){
			let arr = e.target.value;
			let arrSplit = arr.split(',');
			this.setState({newRecipe:{...this.state.newRecipe, ingredients: arrSplit}});
		}
		if (e.target.name === 'description'){
			this.setState({newRecipe:{...this.state.newRecipe, description: e.target.value}});
		}

	}
	addItem() {
		if(this.state.newRecipe.title && this.state.newRecipe.img && this.state.newRecipe.ingredients && this.state.newRecipe.description) {
			this.setState({error: false});
			this.props.addItem(this.state.newRecipe);
			this.props.closeForm();
		}else{
			this.setState({error: true});
		}
	}
	render() {
		const{addItem} = this.props;
		return (
				<div className="addForm">
					<input type='text' placeholder='Title' name='title' onChange={this.updateInput}/>
					<input type='text' placeholder='IMG SRC' value={this.state.newRecipe.img}  name='img'  onChange={this.updateInput}/>
					<textarea placeholder='Ingredients.Use "," to separate the ingredients'  name='ingredients'  onChange={this.updateInput}></textarea>
					<textarea placeholder='Description' name='description'  onChange={this.updateInput}></textarea>
					<button className='plus' onClick={this.addItem}>
						Save
					</button>
				</div>

		)
	}
}

const mapStateToProps = state => ({
	addItem: state.recipeReducer.addItem,
});

const mapDispatchToProps = dispatch => {
	return{
		...bindActionCreators(actions, dispatch)

	}
};

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipeForm);

