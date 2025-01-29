import React, { useRef, useEffect } from "react";
import video from "./../../images/house.mp4";
import { FaPlay } from "react-icons/fa";

const Video = () => {
  const videoRef = useRef(null); // Reference to the video element

  // Handle video playback and fullscreen
  const handlePlayFullscreen = () => {
    const video = videoRef.current;

    if (video) {
      // Make the video visible
      video.style.display = "block";

      // Request fullscreen
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen(); // Safari
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen(); // IE/Edge
      }

      // Play the video
      video.play();
    }
  };

  // Hide the video when exiting fullscreen
  const handleFullscreenChange = () => {
    const video = videoRef.current;

    if (video) {
      if (
        !document.fullscreenElement &&
        !document.webkitFullscreenElement &&
        !document.msFullscreenElement
      ) {
        // Hide the video when exiting fullscreen
        video.style.display = "none";
        video.pause(); // Pause the video
      }
    }
  };

  // Attach fullscreenchange event listener
  useEffect(() => {
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange); // Safari
    document.addEventListener("msfullscreenchange", handleFullscreenChange); // IE/Edge

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "msfullscreenchange",
        handleFullscreenChange
      );
    };
  }, []);

  return (
    <div className="video-container">
      <div className="overlay">
        <h2>Modern House Video</h2>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
        <button onClick={handlePlayFullscreen}>
          <FaPlay className="playicon" />
        </button>
      </div>
      <video
        ref={videoRef}
        src={video} // Replace with your video file
        className="responsive-video"
        style={{ display: "none" }} // Initially hide the video
        controls={false} // Remove built-in controls
      ></video>
    </div>
  );
};

export default Video;
