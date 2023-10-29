import { useState, useEffect } from 'react';

export const Menu = ({ voices, setIndex, setRate, rate }) => {
    const [ voiceIndex, setVoiceIndex ] = useState();

    useEffect(() => {
        setIndex(voiceIndex);
    }, [voiceIndex, setIndex]);


    return (
        <section className="w-[80%] h-[10%] flex items-center justify-around self-center">
            <select className='rounded-[8px] text-center' value={ voiceIndex || '' } style={{ width: "200px" }} onChange={(e) => setVoiceIndex(e.target.value)}>
                <option value=''>default(English US)</option>
                {voices.map((item, index) => {
                    return <option key={item.name} value={index}>{ item.name }</option>
                })}
            </select>
            <div>
                <label for="speed" key='1'>Speed: </label>
                <input id='speed' type='range' min='1' max='5' step='1' value={rate} onChange={ (e) => setRate(e.target.value) } />
                <h3>Current speed is: {rate}</h3>
            </div>
            <div>

            </div>
        </section>
    );
}