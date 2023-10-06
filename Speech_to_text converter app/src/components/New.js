import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useState } from 'react';

export default function New() {
    // const [isCopied, setCopied] = useClipboard("Text To Copy");
    const [copied, setCopied] = useState(false); 
    const startListening = ()=> SpeechRecognition.startListening({ continuous: true , language : 'en-IN'});
    const{
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
       } = useSpeechRecognition()

       if(!browserSupportsSpeechRecognition){
        return <span>Your browser dosen't support</span>
       }
       const handleCopyToClipboard = () => {
        setCopied(true); 

        setTimeout(() => {
          setCopied(false)
        }, 3000);
      };
    return (
    <>
        <div className="container">
        <h2>Speech to text converter</h2>
        <h3 className='second_heading'>Listening : {listening ? 'on' : 'off'}</h3>
        <br />
        <div className="main-content">
        {transcript}
        </div>
       

        <div className="btn-style">
        <CopyToClipboard text={transcript} onCopy={handleCopyToClipboard}>
          <button>{copied ? 'Copied!' : 'Copy to Clipboard'}</button>
        </CopyToClipboard>

          <button onClick={startListening}>Start listening</button>
          <button onClick={SpeechRecognition.stopListening}>Stop listening</button>
          <button onClick={resetTranscript}>Reset</button>
        </div>
      </div>
    </>
  )
}
