import React from 'react';

const RepoItem = ({elem}) => {
	console.log(elem);
	return (
		<li>
			<a href={`https://github.com/annpod/${elem.name}`} target="_blank">
				<span>{elem.id}</span>&nbsp; - &nbsp;
				<span>{elem.name}</span>
			</a>
		</li>		
	)
}
export default RepoItem;