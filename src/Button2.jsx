import { Children } from "react";


export default function Button2({message,children}) {
  return (
    <div>
        <button className="btn" onClick={()=>alert(message)}>{children}</button>
    </div>
  )
}
