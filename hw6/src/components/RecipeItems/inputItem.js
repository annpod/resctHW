import React, { Component } from 'react';
const FontAwesome = require('react-fontawesome');

const ListItem = ({item, getMainRecipe, mainRecipeId, deleteItem}) => {
	return(
		<li key={item.id}  className={item.id === mainRecipeId ? 'active' : ''}>
			<div className='imgWrapper' onClick={()=>{getMainRecipe(item.id)}}>
				<img className='thumbnail' src={item.img} />
			</div>
			<div className='infoWrapper'>
				<div className="title">
					<h4>{item.title}</h4>
					<div className='buttons'>
						<button onClick={()=>deleteItem(item)}>
							<FontAwesome
								className='super-crazy-colors'
								name='trash-o'
								size='2x'
								style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
							/>
						</button>
					</div>
				</div>
				<ul>
					{item.ingredients.map((item, index) =>(
						<li key={index}>
							{item}
						</li>
					))}
				</ul>
			</div>
		</li>
	)
}

export default ListItem;

