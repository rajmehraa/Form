import React, { useEffect, useState } from 'react'
import './For.css'

export default function Form() {
  const[values,setValue]=useState("")
  const[ag,setag]=useState("")
  const[isVisblie,setIsVisblie]=useState(false)
  const[error,setError]=useState('')
  const[errors,setErrors]=useState()
  const[submit,setSubmit]=useState([])
  



  

  
  
   
  const nameHandle=(e)=>{
       console.log(e.target.value)
       const hero=e.target.value;
       

       if(/^[a-zA-Z]*$/.test(hero)){
        setValue(hero);
       }else{
         setError("error in text")
       }
      
  };
  // const handleChange = (e) => {
  //   const value = e.target.value;
    
  //   // Regex to allow only letters (both lowercase and uppercase)
  //   if (/^[a-zA-Z]*$/.test(value)) {
  //     setInputValue(value);
  //     setError('');
  //   } else {
  //     setError('Only letters are allowed');
  //   }
  // };
 const filterHandle=(e)=>{
       console.log(e.target.value)
       const agess=e.target.value
       if (/^\d*$/.test(agess)) {
        setag(agess)
      }else{
        setErrors("error in age")
      }
    };
      


 
 const sumbit=(e)=>{
   console.log("value",values,ag)
   
   e.preventDefault()
  //setIsVisblie({text1:values,text2:ag})
  setIsVisblie(true)

   
   

 }

//  const formVa=()=>{
//   if(typeof (values)==='string'){
//     console.log("its string")
    
//   }else{
//     alert('plz enter')
//   }
//  }
const submitsssssss =(e)=>{
   const arry=[...submit,values]
   setSubmit(arry)
   setValue("")
}
 
  return (
    <div>
      <h1>sign form</h1>
      <form>
       <label >first name</label>
       <input style={{borderColor:error?'red':""}} type='text' placeholder='enter name' key="first" name='first' value={values}  onChange={nameHandle}/>
       <br></br>
       {<div style={{color:'red'}}>{error}</div> }
       <label >age</label>
       <input type='text' placeholder='enter age' key="age" name="age" value={ag} onChange={filterHandle} />
       <br></br>

       
       </form>
       {/*<button onClick={()=>{setag(""),setValue("")} }>clear</button>*/}
       <button onClick={nameHandle} >qazse</button>
       <button onClick={sumbit}>sumbit</button>

       <button onClick={submitsssssss} >submitsssssss</button>
      
      {isVisblie && values && ag && <div>
        <h2>Submitted</h2>
        <p>Text 1 :{values}</p>
        <p>Text 2 :{ag}</p>
        </div> }

        {isVisblie && <div>
          <table className='styled-table' >
          <tr >
            <th>first name</th>
            <th>age</th>
          </tr>
          <tr>
            <td>{values}</td>
            <td>{ag}</td>
          </tr>
          </table>
          </div>
        }

        {<div>{errors}</div>}
        {
          submit.map((item)=>(
            <divs >
             <h1>{item}</h1>
             </divs>
          ))
        }
     
      </div>
    )
  }
  
  // {*/{isVisblie && <div>
  //  <>{//values}<///h1>
  //  <//h2>{//ag}</>
  //  </div>}*/}