import React, { useRef, useState } from "react";

function VideoPlayer({ source }: { source: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const onPlay = () => {
    setIsPlaying(true);
    videoRef.current?.play();
  };

  const onPause = () => {
    setIsPlaying(false);
    videoRef.current?.pause();
  };

  return (
    <div className="group relative w-fit">
      <video className="w-full" ref={videoRef}>
        <source src={source} type="video/mp4" />
      </video>
      {!isPlaying ? (
        <div
          onClick={onPlay}
          className="absolute inset-0 grid cursor-pointer place-items-center bg-black/50"
        >
          <div className="grid size-[100px] place-items-center rounded-full border-2 border-white lg:size-[150px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-play size-10 lg:size-16"
            >
              <polygon points="6 3 20 12 6 21 6 3" />
            </svg>
          </div>
        </div>
      ) : (
        <div
          onClick={onPause}
          className="absolute inset-0 grid place-items-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-pause size-16"
          >
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </svg>
        </div>
      )}
    </div>
  );
}

export default VideoPlayer;
