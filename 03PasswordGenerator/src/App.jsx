import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useCallback , useEffect} from 'react'
import { useRef } from 'react'

function App() {
  const [length, setLength] = useState(6)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [Password, setPassword] = useState("")

  const passwordGenerator= useCallback(() => {
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(number) str+="0123456789";
    if(character) str+="!@#$%^&*-_+=[]{}~`";
    for (let i = 1; i <=length; i++) {
      let char=str.charAt(Math.floor(Math.random() * str.length +1));
      pass+=char;
    }
    setPassword(pass);
  },[length,number,character,setPassword])

  const passwordRef = useRef(null)
  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef
    window.navigator.clipboard.writeText(Password);
  },[Password])

  useEffect(() => {
    passwordGenerator()
  },[length,number,character,passwordGenerator])
  return (
    <>
      <div id="container" style={{backgroundColor:"",display:"flex",justifyContent:"center", borderRadius:"10px",border:"2px solid black",boxShadow:'5px 10px'}}>
        <div id="box" style={{width:"400px",height:"100px", display:'flex',flexDirection:'column',justifyContent:"center"}}>
          <div>
          <label>Password </label><input type="text" ref={passwordRef} placeholder='Password' value={Password} style={{width:"60%",height:'25px',borderRadius:'10px'}}/><button id='copy' onClick={() => copyPassword()} style={{padding:"3px",margin:"3px",borderRadius:"10px",backgroundColor:'grey'}}>Copy</button>
          </div>
          <div>
          <input type='range' defaultValue={0} min={6} max={20} id='length'  onChange={(e) =>{setLength(e.target.value)}}/><label>Lenght = {length}</label>
          <input type="checkbox" id='number' onChange={() => setNumber((prev) => !prev)}/><label>Number</label>
          <input type="checkbox" id='character' onChange={() => setCharacter((prev) => !prev)}/><label>character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
