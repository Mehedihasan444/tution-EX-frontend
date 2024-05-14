import  { useRef, useState, useEffect } from 'react';
import YouTube from 'react-youtube';

const ResponsiveYouTube = ({ videoId }) => {
  const [playerSize, setPlayerSize] = useState({ width: '100%', height: '100%' });
  const playerRef = useRef(null);

  useEffect(() => {
    const resizePlayer = () => {
      const playerContainer = playerRef.current;
      if (playerContainer) {
        const width = playerContainer.clientWidth;
        const height = width * 0.5625; // 16:9 aspect ratio
        setPlayerSize({ width: `${width}px`, height: `${height}px` });
      }
    };

    resizePlayer();
    window.addEventListener('resize', resizePlayer);
    return () => window.removeEventListener('resize', resizePlayer);
  }, []);

  return (
    <div ref={playerRef} style={{ width: '100%', height: '0', paddingBottom: '56.25%', position: 'relative' }}>
      <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}>
        <YouTube videoId={videoId} opts={{ width: playerSize.width, height: playerSize.height }} />
      </div>
    </div>
  );
};

export default ResponsiveYouTube;
