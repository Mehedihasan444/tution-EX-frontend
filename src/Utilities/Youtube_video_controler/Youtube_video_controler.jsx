import YouTube from 'react-youtube';
import PropTypes from 'prop-types';

const Youtube_video_controler = ({vId}) => {

    const onPlayerReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
    
      const opts= {
        height: '500',
        width: '750',
        playerVars: {
          autoplay: 1,
        },
      };
    return <YouTube videoId={vId} opts={opts} onReady={onPlayerReady} />;
};

export default Youtube_video_controler;


Youtube_video_controler.propTypes = {
  vId: PropTypes.string.isRequired,
};