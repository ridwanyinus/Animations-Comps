const ImageReveal = ({ imgNum, position }) => {
  return (
    <div className={`image-container w-[420px] overflow-hidden image-${imgNum} ${position} h-screen`}>
      <div className={`img-${imgNum} imageReveal piece1`}></div>
      <div className={`img-${imgNum} imageReveal piece2`}></div>
      <div className={`img-${imgNum} imageReveal piece3`}></div>
      <div className={`img-${imgNum} imageReveal piece4`}></div>
      <div className={`img-${imgNum} imageReveal piece5`}></div>
    </div>
  );
};

export default ImageReveal;
