import { useRef, useState } from 'react'
import './App.css'
import VideoPlayer from './VideoPlayer'

function App() {
 const playerRef = useRef(null)
 const videoLink = "http://localhost:3000/uploads/courses/bc12e3a5-564f-4941-a4f4-3279e504136e/index.m3u8"
 const videoPlayerOptions  = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: {
      src: videoLink,
      type: 'application/x-mpegURL'
    }
 }
 const handlePlayerReady = (player) => {
  playerRef.current = player;

  // You can handle player events here, for example:
  player.on('waiting', () => {
    videojs.log('player is waiting');
  });

  player.on('dispose', () => {
    videojs.log('player will dispose');
  });
};
  return (
    <>
      <div>
        <h1>Video Player</h1>
      </div>
      <VideoPlayer options={videoPlayerOptions} onReady={handlePlayerReady} />
    </>
  )
}

export default App
