import React, { Component } from 'react';
import './App.css';

class VideoItem extends Component {
	constructor(props){
		super(props);
		this.getVideos = this.getVideos.bind(this);

	}
	getVideos(){
		this.props.getVideo(this.props.item);
	}
	render() {
	const {item} = this.props;
		return (
			<div className="video-list media" onClick={this.getVideos}>
				<div className="video-list media">
					<div className="media-left">
						<img className="media-object"  src={item.snippet.thumbnails.default.url}/>
					</div>
				</div>
				<div className="media-body">
					<div className="media-heading">{item.snippet.description}</div>
				</div>
			</div>
		);
	}
}

export default VideoItem;
