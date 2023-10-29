import { Nav, Body, Menu } from './components';
import { useSpeechSynthesis } from 'react-speech-kit';
import React, { useState } from 'react';

function App() {
  const { speak, voices } = useSpeechSynthesis();
  const [inputText, setInputText] = useState('');
  const [index, setIndex] = useState(0);
  let [ rate, setRate ] = useState(1);

    function handleSpeak() {
      console.log(inputText);
        speak({ text: inputText, rate: 1, voice: voices[index] });
    }

  return (
    <div className="bg-blue-300 font-playpen flex-col flex h-screen p-0 m-0">
    <Nav />
    <Menu voices={ voices } setIndex={setIndex} setRate={ setRate } rate={ rate } />
    <Body handleSpeak={ handleSpeak } setInputText={ setInputText } />
    </div>
  );
}

export default App;
