import YouTube from 'react-youtube';

const Youtube_video_controler = ({vId}) => {

    const onPlayerReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
    
      const opts= {
        height: '500',
        width: '750',
        playerVars: {
          //  https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    return <YouTube videoId={vId} opts={opts} onReady={onPlayerReady} />;
};

export default Youtube_video_controler;