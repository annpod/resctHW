import React, { Component } from 'react';

const MainVideo = ({ videoId, videoPoster, videoTitle, videoDescription}) => {
	return(
		<div>
			<div className="embed-responsive embed-responsive-16by9">
				<iframe title="random" src={`http://www.youtube.com/embed/${videoId}`} />
			</div>
			<div className="row">
				<div className="video-list media col-md-2">
					<div className="media-left">
						<img className="media-object" src={videoPoster}/>
					</div>
				</div>
				<div className="media-body col-md-10">
					<div className="media-title">{videoTitle}</div>
					<div className="media-heading">{videoDescription}</div>
				</div>
			</div>
		</div>
	)
}

export default MainVideo;
