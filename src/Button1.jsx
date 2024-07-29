function handleClick() {
    alert('You clicked me!');
  }

export default function Button1() {
  return (
    <div>
        <button className="btn" onClick={handleClick}>Button1</button>
        <button className="btn" onClick={()=>alert('You clicked me!')}>Button1</button>
    </div>
  )
}
