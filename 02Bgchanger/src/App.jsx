import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("Black")
  document.body.style.backgroundColor=color;
  // document.body.style.transitionDelay="3000";
  return (
    <>
    <div>
      <div style={{margin:"5px",padding:"5px",backgroundColor:"grey",display:'flex',justifyContent:'center'}}>
        <button onClick={() => setColor("red")} style={{backgroundColor:"red",margin:"3px",padding:"3px",border:"1px solid black",borderRadius:"10px"}}>Red</button>
        <button onClick={() => setColor("blue")} style={{backgroundColor:"blue",margin:"3px",padding:"3px",border:"1px solid black",borderRadius:"10px"}}>blue</button>
        <button onClick={() => setColor("green")} style={{backgroundColor:"green",margin:"3px",padding:"3px",border:"1px solid black",borderRadius:"10px"}}>green</button>
        <button onClick={() => setColor("yellow")} style={{backgroundColor:"yellow",margin:"3px",padding:"3px",border:"1px solid black",borderRadius:"10px"}}>yellow</button>
        <button onClick={() => setColor("white")} style={{backgroundColor:"white",margin:"3px",padding:"3px",border:"1px solid black",borderRadius:"10px"}}>white</button>
      </div>
    </div>
    </>
  )
}

export default App
