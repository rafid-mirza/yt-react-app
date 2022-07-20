import React from 'react';
import VideoTile from './VideoTile'

const VideoList = ({videos, onVideoSelect}) => {
    const renderedList = videos.map(video => {
        return <VideoTile key = {video.id.videoId} video = {video} onVideoSelect = {onVideoSelect}/>
    })
    return (
    <div className='ui relaxed divided list'>
        {renderedList}
    </div>
    )
}

export default VideoList;