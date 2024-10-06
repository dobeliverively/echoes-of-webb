import React, { useState, useEffect } from "react";
import "../styles/Slideshow.css";
import useSound from "use-sound";
import PlusButtonWithModal from "./PlusButtonWithModal";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Slideshow = () => {
  const images = [
    require("../images/img 1.jpg"),
    require("../images/img 2.jpg"),
    require("../images/img 3.jpg"),
    require("../images/img 4.jpg"),
    require("../images/img 5.jpg"),
    require("../images/img 6.jpg"),
    require("../images/img 7.jpg"),
    require("../images/img 8.jpg"),
    require("../images/img 9.png"),
    require("../images/img 10.jpg"),
  ];

  const voices = [
    require("../audio/v1.mp3"),
    require("../audio/v2.mp3"),
    require("../audio/v3.mp3"),
    require("../audio/v4.mp3"),
    require("../audio/v5.mp3"),
    require("../audio/v6.mp3"),
    require("../audio/v7.mp3"),
    require("../audio/v8.mp3"),
    require("../audio/v9.mp3"),
    require("../audio/v10.mp3"),
  ];

  const atomics = [
    require("../audio/a1.wav"),
    require("../audio/a2.wav"),
    require("../audio/a3.wav"),
    require("../audio/a4.wav"),
    require("../audio/a5.wav"),
    require("../audio/a6.wav"),
    require("../audio/a7.wav"),
    require("../audio/a8.wav"),
    require("../audio/a9.wav"),
    require("../audio/a10.wav"),
  ];

  const data = require("../data/text.json");
  const [currentIndex, setCurrentIndex] = useState(0);

  // UseSound hook to handle voice playback
  const [playVoice, { stop: stopVoice }] = useSound(voices[currentIndex]);
  const [playAtomic, { stop: stopAtomic }] = useSound(atomics[currentIndex]);

  // Effect to handle playing the audio whenever the currentIndex changes
  useEffect(() => {
    stopVoice();
    playVoice(); // Play the current voice
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    sleep(1000);
    playAtomic();
    return () => {
      stopVoice(); // Stop the previous voice on cleanup (before next render)
      stopAtomic();
    };
  }, [currentIndex, playVoice, stopVoice, playAtomic, stopAtomic]);

  // Navigate to the next image
  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  // Navigate to the previous image
  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slideshow">
      <img
        src={images[currentIndex]}
        alt="slideshow"
        className="slideshow-image"
      />
      <button onClick={prevImage} className="nav-button prev-button">
        ❮
      </button>
      <button onClick={nextImage} className="nav-button next-button">
        ❯
      </button>
      <PlusButtonWithModal index={currentIndex + 1} />
      {/* New text in bottom-right corner */}
      <div className="bottom-right-text">
        {data[currentIndex]?.text || `Image ${currentIndex + 1}`}
      </div>
    </div>
  );
};

export default Slideshow;
