import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  // Generates Password : Optimized using useCallBack Hook
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (number) str += "0123456789"
    if (character) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 0; i < length; i++) {
      let strIndex = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(strIndex)
    }

    setPassword(pass)

  }, [length, number, character, setPassword])

  // Used to display the Generateed password
  useEffect(() => {
    passwordGenerator()
  }, [length, number, character, passwordGenerator])

  // Used to copy the generated password
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select(); // To select the text in the input field.
    // If the input field is empty, we're using ?
    window.navigator.clipboard.writeText(password) // To get the access to the clipboard so that we can copy the selected text into the clipboard
  }, [password])
  
  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-[20%] bg-gray-800 text-orange-500 space-y-6" >

      <h1 className='text-white text-3xl text-center my-3 font-bold'>Password generator</h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">

        <input
              type="text"
              value={password}
              className="outline-none w-full py-1 px-3"
              placeholder="Password"
              readOnly
            ref={passwordRef}
        />

        <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
          copy
        </button>
        
      </div>

      <div className='flex text-sm gap-x-2'>

        <div className='flex items-center gap-x-1'>

          <input 
            type="range"
            min={6}
            max={20}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
          />

          <label>Length: {length}</label>

        </div>

        <div className="flex items-center gap-x-1">

          <input
            type="checkbox"
            defaultChecked={number}
            id="numberInput"
            onChange={() => {
              setNumber((number) => !number); // Can also use prev
            }}
          />

          <label htmlFor="numberInput">Numbers</label>

        </div>

        <div className="flex items-center gap-x-1">

          <input
              type="checkbox"
              defaultChecked={character}
              id="characterInput"
              onChange={() => {
                  setCharacter((character) => !character )
              }}
          />

          <label htmlFor="characterInput">Characters</label>

        </div>

      </div>
  </div>
    
  )
}

export default App