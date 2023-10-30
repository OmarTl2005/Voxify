import { Nav, Body, Menu } from './components';
import { useSpeechSynthesis } from 'react-speech-kit';
import React, { useState } from 'react';

function App() {
  const { speak, voices, cancel } = useSpeechSynthesis();
  const [inputText, setInputText] = useState('');
  const [index, setIndex] = useState(0);
  let [ rate, setRate ] = useState(0.8);

  console.log(speak);
    function handleSpeak() {
        speak({ text: inputText, rate: rate, voice: voices[index] });
    }

  return (
    <div className="bg-blue-300 font-playpen flex-col flex h-screen p-0 m-0">
    <Nav />
    <Menu voices={ voices } setIndex={setIndex} setRate={ setRate } rate={ rate } />
    <Body handleSpeak={ handleSpeak } setInputText={ setInputText } cancel={ cancel } />
    </div>
  );
}

export default App;
