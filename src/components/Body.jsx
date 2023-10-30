import React from 'react';
import { PiPauseDuotone } from 'react-icons/pi';

export const Body = ({ handleSpeak, setInputText, cancel }) => {
    
    return (
        <section className='flex flex-col items-center justify-center pt-[3%]'>
            <textarea className='rounded-xl w-[55%] h-[100%] text-center' rows='12' cols='100%' placeholder='Enter text Here' onChange={(e) => {setInputText(e.target.value)}} />
            <div className='mt-4 w-[40%] flex-row items-center justify-around flex'>
                <button className='w-[20%] xl:w-[20%] lg:w-[24%] md:w-[30%] sm:w-[35%] xsm:w-[45%] sups:w-[50%] py-2 bg-purple-500 font-semibold transition-all duration-[600ms] rounded-3xl hover:-translate-y-1' onClick={ handleSpeak }>Speak</button>
                <PiPauseDuotone className=' w-[20%] text-purple-500 text-3xl font-bold transition-all duration-[600ms] hover:-translate-y-1 cursor-pointer' onClick={ cancel } />
            </div>
        </section>
    )
}

