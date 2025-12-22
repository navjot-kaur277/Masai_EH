import { useState } from "react";
import VideoPlayer from "./components/VideoPlayer";
import "./App.css";

function App() {
  // Data from the assignment
  const videos = [
    "https://www.w3schools.com/html/mov_bbb.mp4",
    "https://www.w3schools.com/html/movie.mp4",
    "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  ];

  // State is ONLY used for tracking which video is active (Part 2 requirement)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const handlePrevVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="app-container">
      <header>
        <h1>React Ref Player</h1>
        <p className="subtitle">
          Video {currentVideoIndex + 1} of {videos.length}
        </p>
      </header>

      <main>
        <VideoPlayer
          videoSource={videos[currentVideoIndex]}
          onNext={handleNextVideo}
          onPrev={handlePrevVideo}
        />
      </main>

      <footer className="observation-box">
        <h3>💡 Important Observation</h3>
        <p>
          Clicking Play/Pause/Forward/Rewind{" "}
          <strong>does not change React State</strong>
          and does not cause re-rendering. The video behavior is changed
          directly via the DOM using <code>useRef</code>.
        </p>
      </footer>
    </div>
  );
}

export default App;
