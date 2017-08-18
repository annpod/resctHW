import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import YTSearch from 'youtube-api-search';
import Search from './components/Search';
import VideoList from './components/VideoList';
import MainVideo from './components/MainVideo';

const API_KEY = `AIzaSyC1ORL6Y3zxvLLev6QHUqP8eF1hFbYo1WI`;

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			search: '',
			result: null,
			videoId: null,
			videoPoster: null,
			videoDescription: null,
			videoTitle: null,
			spinner: true
		};

		this._Search = this._Search.bind(this);
		this.youtubeSearch = this.youtubeSearch.bind(this);
		this.updateMainVideo = this.updateMainVideo.bind(this);
	}
	componentWillMount() {
		this.youtubeSearch();
	}
	youtubeSearch(searchValue = 'funny') {
		YTSearch({key: API_KEY, term:searchValue}, (data) => {
			console.log(data);
			this.setState({
				search: '',
				result: data,
				videoId: data[0].id.videoId,
				videoPoster: data[0].snippet.thumbnails.default.url,
				videoDescription: data[0].snippet.description,
				videoTitle: data[0].snippet.title,
				spinner: false
			})
		})
	}
	updateMainVideo(item){
		this.setState({
			videoId: item.id.videoId,
			videoPoster: item.snippet.thumbnails.default.url,
			videoDescription: item.snippet.description,
			videoTitle: item.snippet.title
		})
	}
	_Search(searchValue) {
		this.setState({
			search: '',
			videoId: null
		});
		this.youtubeSearch(searchValue);
	}
	render() {

		return (
			<main className={'container ' + (this.state.spinner ? 'hidden' : 'show')}>
				{this.state.spinner &&
					<div className="spinner"></div>
				}
				<div>
					<Search _Search={this._Search}/>
					<div className="row">
						<div className="video-detail col-md-8">
							{this.state.videoId ? (
								<MainVideo videoId={this.state.videoId}
									videoPoster={this.state.videoPoster}
									videoTitle={this.state.videoTitle}
									videoDescription={this.state.videoDescription}/>
							) : (
								<div>
									{!this.state.spinner &&
										<div className="spinner"></div>
									}
								</div>
							)}
						</div>
						{this.state.result ? (
							<VideoList
								list={this.state.result}
								mainVideoId={this.state.videoId}
								updateMainVideo={this.updateMainVideo.bind(this)}/>
						) : (
							<span>Nothing found</span>
						)
						}
					</div>
				</div>
			</main>
		);
	}
}

export default App;
