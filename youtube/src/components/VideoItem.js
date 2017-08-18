import React, { Component } from 'react';

class VideoItem extends Component {
	constructor(props){
		super(props);
		this.getVideo = this.getVideo.bind(this);

	}
	getVideo(){
		this.props.updateMainVideo(this.props.item);
	}
	render() {
	const {item} = this.props;
		return (
			<div className="video-list media">
				<div className="video-list media">
					<div className="media-left">
						<img className="media-object"  src={item.snippet.thumbnails.default.url} onClick={this.getVideo}/>
					</div>
				</div>
				<div className="media-body">
					<div className="media-title"  onClick={this.getVideo}>{item.snippet.title}</div>
					<div className="media-heading"  onClick={this.getVideo}>{item.snippet.description}</div>
				</div>
			</div>
		);
	}
}

export default VideoItem;
