import React, { Component } from 'react';
import VideoItem from './VideoItem';

const VideoList = ({list, mainVideoId, updateMainVideo}) => {
	return(
		<ul className="col-md-4 list-group">
			{list
			.filter(key => key.id.videoId !== mainVideoId)
			.map((item, index) => (
				<li
					key={index}
					className="list-group-item">
					<VideoItem updateMainVideo={updateMainVideo} item={item}/>
				</li>
				)
			)}
	</ul>
)
}

export default VideoList;
