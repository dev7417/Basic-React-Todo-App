import { useEffect, useState } from 'react'

export default function Todo() {
  const[text, setTxt] = useState(" Hello" );
  const [task, setTask] = useState([]);
  

  const handleOnClick = (e)=>{
    e.preventDefault();
    setTask([...task, text])
    setTxt(" ");
   
    
  }
 
 
 

  return (

    <div className="input">
      <header>
        <input type="text" value={text}  onChange={(e)=>setTxt(e.target.value)}></input>
        {/* <button className="btn btn-danger" onClick={remove}>Remove2</button> */}
        {task.map((item)=>{
         return <><div className="para"><p>{item}</p></div></>

        })}
       
           
      
        <button type='Submit' onClick={handleOnClick}>ADD</button>
      </header>
    </div>
  )
}
