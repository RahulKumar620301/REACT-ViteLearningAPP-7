function clickButton(){
    alert('button clicked')
}

export default function ButtonRev1() {
  return (
    <>
    <button className="btn" onClick={clickButton}>revButton</button>
    <button className="btn" onClick={()=>{
    alert('button clicked')
}}>revButton2</button>
    </>
  )
}
