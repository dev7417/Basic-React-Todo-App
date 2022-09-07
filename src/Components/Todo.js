import { useEffect, useState } from 'react'

export default function Todo() {
  const [text, setTxt] = useState(" Hello");
  const [task, setTask] = useState([]);

  // decalring function for add button
  const handleOnClick = (e) => {
    e.preventDefault();
    const allInputData = {id: Math.floor(Math.random()*100), name: text };
    setTask([...task, allInputData])
    console.log(allInputData)
    setTxt("");
  }
  // declaring function for remove button
  const remove=(index)=>{
  const finalData =   task.filter((item)=>{
    return index !== item.id
  })
  setTask(finalData)
  }




  return (

    <div className="input">
      <header>
        <input type="text" value={text} onChange={(e) => setTxt(e.target.value)}></input>
        <button type='Submit' onClick={handleOnClick}>ADD</button>
        {/* <button className="btn btn-danger" onClick={remove}>Remove2</button> */}
        {task.map((item) => {
          return <><div className="para"><p>{item.name}</p> <button onClick={()=>remove(item.id)}>Remove</button> </div></>

        })}



      </header>
    </div>
  )
}
