import React from "react";

function ImageViewer({ imageViewerEnabled, setImageViewerEnabled }) {
  return (
    <div className="z-20 absolute h-screen w-screen justify-center items-center flex bg-slate-900 opacity-80">
      <button
        type="button"
        onClick={() => setImageViewerEnabled(!imageViewerEnabled)}
        className="text-white"
      >
        Image Viewer
      </button>
    </div>
  );
}

export default ImageViewer;
