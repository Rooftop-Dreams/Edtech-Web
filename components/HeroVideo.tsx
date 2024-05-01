import { useEffect, useRef } from 'react';
import styled from 'styled-components';
// import vidSrc from '../assets/technogirl.mp4'


interface VideoPlayerProps {
  src: string;
}
const VideoPlayer: React.FC<VideoPlayerProps> = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleEnded = () => {
      if (videoElement) {
        videoElement.currentTime = 0;
        videoElement.play();
      }
    };

    if (videoElement) {
      videoElement.addEventListener('ended', handleEnded);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('ended', handleEnded);
      }
    };
  }, []);

  return (
    <VideoContainer>
      <VideoElement
        ref={videoRef}
        src={'../assets/technogirl.mp4'}
        controls
        autoPlay
        loop
        muted
      />
    </VideoContainer>
  );
};

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const VideoElement = styled.video`
  width: 100%;
  height: 100%;
`;

export default VideoPlayer;