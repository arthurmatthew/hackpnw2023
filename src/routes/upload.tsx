import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";

function Upload() {
    const webcamRef = useRef(null);
    const [imgSrc, setImgSrc] = useState(null);
    const [imagecaptured, setImageCap] = useState(false)

    // create a capture function
    const capture = useCallback(() => {
        if(webcamRef.current != null){
            const imageSrc = webcamRef.current.getScreenshot();
            setImgSrc(imageSrc);
            setImageCap(!imagecaptured)
            console.log(imagecaptured)
        }
    }, [webcamRef]);
    if(!imagecaptured){
    return(
        <>
            <Webcam className=" mx-auto my-5 rounded-2xl h-[20rem] " ref={webcamRef}/>
            <button className="flex flex-col items-center border-2 rounded-full p-2 border-black mx-auto" onClick={capture}>Capture a Photo</button>
            <h1 className="text-center">or</h1>
            <div className=" flex justify-center">
                <input type="file" className=" border-[1.5px] rounded-full border-black bg-green-400 fill-green-400 text-center mx-auto" placeholder="Enter your text"/>
            </div>
        </>
    );
    }
    else if(imgSrc != null){
        function recapture(){
            setImageCap(false)
        }
        return(
        <div className="center">
            <img className=" mx-auto my-5 rounded-2xl h-[20rem]"  src={imgSrc}/>
            <button className="flex flex-col items-center border-2 rounded-full p-2 border-black mx-auto" onClick={recapture}>
                Recapture Photo
            </button>
            <h1 className="text-center">or</h1>
            <div className=" flex justify-center">
                <input type="file" className="border-[1.5px] rounded-full border-black bg-blue-500 text-white text-center mx-auto" placeholder="Enter your text"/>
            </div>

        </div>
        );
    }
  };
  
  export default Upload;