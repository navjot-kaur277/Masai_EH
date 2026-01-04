import React, { useRef } from "react";

const VideoPlayer = ({ videoSource, onNext, onPrev }) => {
  // 1. Create the Ref
  const videoRef = useRef(null);

  // 2. Define control functions using the Ref directly
  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  const handleForward = () => {
    videoRef.current.currentTime += 5; // Skip 5 seconds
  };

  const handleRewind = () => {
    videoRef.current.currentTime -= 5; // Go back 5 seconds
  };

  return (
    <div className="player-wrapper">
      <div className="video-container">
        {/* The ref connects this JSX element to our videoRef variable */}
        <video
          ref={videoRef}
          src={videoSource}
          className="main-video"
          // We intentionally remove 'controls' attribute to use our own custom buttons
        />

        <div className="controls-overlay">
          <div className="control-group">
            <button className="nav-btn" onClick={onPrev} title="Previous Video">
              ⏮ Prev
            </button>

            <button
              className="action-btn"
              onClick={handleRewind}
              title="-5 Seconds"
            >
              ⏪ -5s
            </button>
            <button className="play-btn" onClick={handlePlay} title="Play">
              ▶
            </button>
            <button className="pause-btn" onClick={handlePause} title="Pause">
              ⏸
            </button>
            <button
              className="action-btn"
              onClick={handleForward}
              title="+5 Seconds"
            >
              +5s ⏩
            </button>

            <button className="nav-btn" onClick={onNext} title="Next Video">
              Next ⏭
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
