import React, { useState } from 'react'

function App() {

    const [color, setColor] = useState("violet")

  return (
        <div className='w-full h-screen duration-200' style={{background:color}}>

            <div className='fixed flex flex-wrap justify-center bottom-28 inset-x-24'>
              <div className='flex flex-wrap justify-center gap-8 shadow-lg bg-white p-3 rounded-3xl'>

                <button onClick={() => setColor('red')} className='outline-none px-6 py-1 rounded-full text-white shadow-lg' style={{background:'red'}}>
                  Red
                </button>

                <button onClick={() => setColor('green')} className='outline-none px-6 py-1 rounded-full text-white shadow-lg' style={{background:'green'}}>
                  Green
                </button>

                <button onClick={() => setColor('Blue')} className='outline-none px-6 py-1 rounded-full text-white shadow-lg' style={{background:'blue'}}>
                  Blue
                </button>

                <button onClick={() => setColor('Olive')} className='outline-none px-6 py-1 rounded-full text-white shadow-lg' style={{background:'olive'}}>
                  Olive
                </button>

                <button onClick={() => setColor('orange')} className='outline-none px-6 py-1 rounded-full text-white shadow-lg' style={{background:'orange'}}>
                  Orange
                </button>

                <button onClick={() => setColor('purple')} className='outline-none px-6 py-1 rounded-full text-white shadow-lg' style={{background:'purple'}}>
                  Purple
                </button>

                <button onClick={() => setColor('black')} className='outline-none px-6 py-1 rounded-full text-white shadow-lg' style={{background:'black'}}>
                  Black
                </button>

                <button onClick={() => setColor('gray')} className='outline-none px-6 py-1 rounded-full text-white shadow-lg' style={{background:'gray'}}>
                  Gray
                </button>

                <button onClick={() => setColor('lightBlue')} className='outline-none px-6 py-1 rounded-full text-white shadow-lg' style={{background:'lightBlue'}}>
                  Light Blue
                </button>

                <button onClick={() => setColor('pink')} className='outline-none px-6 py-1 rounded-full text-white shadow-lg' style={{background:'pink'}}>
                  Pink
                </button>
              </div>
            </div>

        </div>
  );
}

export default App