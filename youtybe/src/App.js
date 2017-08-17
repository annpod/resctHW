import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {debounce} from 'throttle-debounce';
import YTSearch from 'youtube-api-search';
import VideoItem from './VideoItem';

const API_KEY = `AIzaSyC1ORL6Y3zxvLLev6QHUqP8eF1hFbYo1WI`;

// videoId - http://www.youtube.com/embed/:videoId



class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			search: '',
			videoLink: null,
			videoPoster: null,
			videoDescription: null,
			videoTitle: null,
			spinner: true,
			result: null
		};

		this.updateState = this.updateState.bind(this);
		this.youtubeSearch = this.youtubeSearch.bind(this);
		this.getVideo = this.getVideo.bind(this);
	}
	 componentWillMount() {
		 this.youtubeSearch();
	 }
	youtubeSearch() {
		YTSearch({key: API_KEY, term:this.state.search}, (data) => {
			console.log(data);
			this.setState({
				search: this.state.search,
				result: data,
				videoLink: data[0].id.videoId,
				videoPoster: data[0].snippet.thumbnails.default.url,
				videoDescription: data[0].snippet.description,
				videoTitle: data[0].snippet.title,
				spinner: false
			})
		})
	}
	getVideo(item){
		this.setState({
			videoLink: item.id.videoId,
			videoPoster: item.snippet.thumbnails.default.url,
			videoDescription: item.snippet.description,
			videoTitle: item.snippet.title,
			spinner: false
		})
	}
	updateState() {
		console.log('changed');
		this.setState({
			search: this.textInput.value,
			spinner: true
		});
		console.log('spinner',this.state.spinner);
		this.youtubeSearch();
	}
	render() {
		let textInput = null;

	return (
		<main className="container">
			{this.state.spinner &&
				<div className="spinner"></div>
			}
			<div>
				<div className="search-bar navbar">
					{textInput}
					<input className='searchField' type="text" placeholder='Search' onChange={debounce(600, this.updateState)} ref={(input) => this.textInput = input} />
				</div>
				<div className="row">
					<div className="video-detail col-md-8">
						{this.state.videoLink &&
							<div>
								<div className="embed-responsive embed-responsive-16by9">

									<iframe title="random" src={`http://www.youtube.com/embed/${this.state.videoLink}`} />
								</div>
								<div className="row">
									<div className="video-list media col-md-2">
										<div className="media-left">
											<img className="media-object" src={this.state.videoPoster}/>
										</div>
									</div>
									<div className="media-body col-md-10">
										<div className="media-title">{this.state.videoTitle}</div>
										<div className="media-heading">{this.state.videoDescription}</div>
									</div>
								</div>

							</div>
							}
					</div>
					{this.state.result &&
					<ul className="col-md-4 list-group">
						{this.state.result.map((item, index) => (
								<li
									key={index}
									className="list-group-item">
									<VideoItem getVideo={this.getVideo.bind(this)} item={item} />
								</li>
							)
						)}
					</ul>
					}
				</div>
			</div>
		</main>

    );
  }
}

export default App;
