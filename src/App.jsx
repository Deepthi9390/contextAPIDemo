import React, { useState,useContext } from 'react'
import Component1 from './assets/Component1'
import { mainContext } from './main'

const App = () =>
{
  const [count,setCount]=useState(0)
  return (
    <div style={{width:'400px',height:'400px',border:'1px solid red',background:"green"}}>
      <button onClick={()=>setCount(count+1)}>incr</button>
      <h1>Hi</h1>
      <mainContext.Provider value={count}>
        <Component1 />
        
			</mainContext.Provider>
		</div>
	)
}

export default App