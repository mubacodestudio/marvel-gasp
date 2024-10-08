const VideoFrame = () => {
  return (
    <iframe
      allowFullScreen
      className="absolute top-0 left-0 w-full h-full"
      src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    />
  );
};

export default VideoFrame;
