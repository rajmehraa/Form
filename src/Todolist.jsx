import React, { useState } from 'react'

export default function Todolist() {
    const[firstname,setFirstname]=useState('')
    const[sumbits,setSumbits]=useState([])
    

    const handle=((e)=>(

        setFirstname(e.target.value)
    
    ))
    console.log(firstname)

   const sumbit=(()=>{
    const arry=[...sumbits,firstname]
    setSumbits(arry)
    setFirstname("")
   }) 

   const delets=((index)=>{
    sumbits.filter((item,index)=>(
          item.index!== index
    ))
   })

  return (
    <div>
      <label>first name</label>
      <input key='first'name='first' value={firstname} placeholder='firstname' onChange={handle} />
      <button onClick={sumbit}>add to list</button>
      {
        sumbits.map((item,index)=>(
            <div key={index}>

          <h1>{item}</h1>
          <button onClick={delets(index)} >delete</button>
          </div>
        ))
      }
    </div>
  )
}




 






  