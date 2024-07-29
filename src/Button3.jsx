

export default function Button3({onStart,onStop,children}) {
  return (
    <>
    <p>This is a button for {children}</p>
    <button className="btn" onClick={onStart}>{children}</button>
    <br/>
    <a onMouseOver={onStop}>{children}</a>
    </>
  )
}
