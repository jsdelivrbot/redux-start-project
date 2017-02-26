import React 		from "react";

const VideoListItem = ({ video, onVideoSelect }) => {

	const imageUrl = video.snippet.thumbnails.default.url;
	const title = video.snippet.title;
	return (
		<li onClick={ () => onVideoSelect(video) } className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img src={ imageUrl } alt={ "Image of video: \"" + title + "\"" } className="media-object"/>
				</div>
				<div className="media-body">
					<div className="media-heading">
						<h2>{title}</h2>
					</div>
				</div>
			</div>
		</li>
	);

};
export default VideoListItem;
