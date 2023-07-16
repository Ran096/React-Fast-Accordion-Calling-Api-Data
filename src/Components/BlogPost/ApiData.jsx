import React ,{useState}from 'react'
import "./Blogpost.css"
import { FcExpand,FcCollapse } from "react-icons/fc";
const ApiData = ({title,body}) => {
    const [show,setShow]= useState(false);

    const handleClick=()=>{
        setShow(!show);
    }
  return (
    <div className='accordion-item' onClick={handleClick}>
        
        <div className='accordion-title'>
        <h5>{title}</h5>
        <p>{show ? <FcCollapse size={20}/>: <FcExpand size={20}/>}
        </p>
        </div>
        {show && <p>{body}</p>}
       
    </div>
  )
}

export default ApiData