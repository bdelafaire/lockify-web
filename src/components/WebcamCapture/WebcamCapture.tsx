import React from "react";
import Webcam from "react-webcam";
import {dataUrlToFile} from "../../services/imageService"

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };

export default function WebcamCapture () {
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);
   
  const capture = React.useCallback(async () => {
    const imageSrc = (webcamRef.current as any).getScreenshot()
    setImgSrc(imageSrc)
    const imageFile = await dataUrlToFile(`data:image/png;${imageSrc}`,"user")
    
  }, [webcamRef, setImgSrc])
   
    return (
      <>
        <Webcam
          audio={false}
          height={720}
          ref={webcamRef}
          screenshotFormat="image/png"
          width={720}
          videoConstraints={videoConstraints}
        />
        <button onClick={capture}>Capture photo</button>
      </>
    );
  };