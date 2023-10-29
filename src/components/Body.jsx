import React from 'react';

export const Body = ({ handleSpeak, setInputText }) => {
    
    return (
        <section className='flex flex-col items-center justify-center pt-20'>
            <textarea className='rounded-xl' rows='15' cols='100' placeholder='Enter text Here' onChange={(e) => {setInputText(e.target.value)}} />
            <button className='mt-4 w-[6%] py-2 bg-purple-500 font-semibold transition-all duration-[600ms] rounded-3xl hover:-translate-y-1' onClick={ handleSpeak }>Speak</button>
        </section>
    )
}

