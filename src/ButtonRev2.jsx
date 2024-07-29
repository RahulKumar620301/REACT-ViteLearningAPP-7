import { Children } from "react"

export default function ButtonRev2({message,children}) {
  return (
    <>
    <button className="btn" onClick={()=>alert(message)}>{children}</button>
    </>
  )
}
