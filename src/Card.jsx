import { useState } from "react";
import { sculptureList } from "./Data";


export default function Card() {

    //let index=0;
    const[index,setIndex]=useState(0);
    
    function handleClick(){
        //index=index+1
        //setIndex(index+1);
        index<sculptureList.length-1?setIndex(index+1):setIndex(0)
    }
    let sculpture = sculptureList[index];


  return (
    <>
      <button onClick={handleClick}>Next</button>
      <button onClick={()=>{index>0?setIndex(index-1):setIndex(sculptureList.length-1)}}>Prev</button>


      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>({index + 1} of {sculptureList.length})</h3>
      <img src={sculpture.url} alt={sculpture.alt}/>
      <p>{sculpture.description}</p>
    </>
  )
}
