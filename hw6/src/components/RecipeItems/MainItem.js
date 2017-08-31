import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actions from '../../actions';
const FontAwesome = require('react-fontawesome');



	class MainItem extends Component {
		constructor(props) {
			super(props);
			this.state = {
				addForm: false,
				error: false,
				arr: '',
				newRecipe: {
					title: '',
					img: 'http://images.media-allrecipes.com/userphotos/560x315/384988.jpg',
					ingredients: '',
					description: ''
				}
			}
			this.addItem = this.addItem.bind(this);
			this.updateInput = this.updateInput.bind(this);
			this.openAddForm = this.openAddForm.bind(this);
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
	openAddForm() {
		this.setState({addForm: true});
	}
	addItem() {
			if(this.state.newRecipe.title && this.state.newRecipe.img && this.state.newRecipe.ingredients && this.state.newRecipe.description) {
				this.setState({error: false});
				this.props.addItem(this.state.newRecipe);
			}else{
				this.setState({error: true});
			}
	}
	render() {
			const{addItem, mainRecipe} = this.props;
		console.log('state',this.state.newRecipe.ingredients);
		return (
			<div className='recipeMain'>
				{this.state.newRecipe.ingredients}
				{this.state.error &&
					<div className="error">
						Please, fill data fields!!!
					</div>
				}
				{this.state.addForm &&
				<dix className="addForm">
					<input type='text' placeholder='Title' name='title' onChange={this.updateInput}/>
					<input type='text' placeholder='IMG SRC' value={this.state.newRecipe.img}  name='img'  onChange={this.updateInput}/>
					<textarea placeholder='Ingredients. Use "," for separate ingredients'  name='ingredients'  onChange={this.updateInput}></textarea>
					<textarea placeholder='Description' name='description'  onChange={this.updateInput}></textarea>
					<button className='plus' onClick={this.addItem}>
						Save
					</button>
				</dix>
				}
				<div className="title">
					<h2>{mainRecipe.title}</h2>
					{!this.state.addForm &&
						<div className='buttons'>
							<button className='edit'>
								<FontAwesome
									className='super-crazy-colors'
									name='pencil'
									size='2x'
									style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}
								/>
							</button>
							<button className='plus' onClick={this.openAddForm}>
								<FontAwesome
									className='super-crazy-colors'
									name='plus'
									size='2x'
									style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}
								/>
							</button>
						</div>
					}
				</div>
				<div className='recipeInfo'>
					<div className='imgWrapper'>
						<img className='thumbnail' src={mainRecipe.img}/>
					</div>
					<div className='infoWrapper'>
						{mainRecipe.ingredients &&
						<ul>
							{mainRecipe.ingredients.map((item, index) => (
								<li key={index}>
									{item}
								</li>
							))}
						</ul>
						}
					</div>
				</div>
				<div className='description'>
					{mainRecipe.description}
				</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MainItem);
