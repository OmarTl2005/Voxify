import { useState, useEffect } from 'react';

export const Menu = ({ voices, setIndex, setRate, rate }) => {
    const [ voiceIndex, setVoiceIndex ] = useState();

    useEffect(() => {
        setIndex(voiceIndex);
    }, [voiceIndex, setIndex]);


    return (
        <section className="w-[55%] md:w-full sm:w-full xsm:w-[60%] xsm:h-[15%] xsm:flex-wrap h-[10%] flex items-center justify-around self-center sups:w-full supxsm:flex-col flex-row supxsm:w-[10%]">
            <select className='rounded-[8px] text-center sups:w-full w-full' value={ voiceIndex || '' } style={{ width: "200px", textAlign: 'center' }} onChange={(e) => setVoiceIndex(e.target.value)}>
                <option value=''>default(English US)</option>
                {voices.map((item, index) => {
                    return <option key={item.name} value={index}>{ item.name }</option>
                })}
            </select>
            <div className='sups:w-full flex justify-center items-center flex-col sups:w-full sups:flex-wrap'>
                <label for="speed">Speed: </label>
                <input id='speed' type='range' min='0.1' max='5' step='0.01' value={rate} onChange={ (e) => setRate(e.target.value) } />
                <h3>Current speed is: {rate}</h3>
            </div>
        </section>
    );
}