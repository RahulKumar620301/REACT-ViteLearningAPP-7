import { Children } from "react";


export default function ButtonRev3({onstart,onstop,children}) {
  return (
    <>
    <h1>Button of: {children}</h1>
    <button className="btn" onClick={onstart}>{children}</button>
    <br/>
    <a onMouseOver={onstop}>{children}</a>
    </>
  )
}
