

export default function Events() {
  return (
    <div className="Toolbar" onClick={()=>{ alert('You clicked on the toolbar!');}}>
        <button onClick={()=>alert('Playing!')}>Play Movie</button>
        <button onClick={(e)=>{e.stopPropagation(); alert('Uploading!')}}>Upload Image</button>
    </div>
    //parent component ko off krne ke liye stopPropagation ka use hota hai
  )
}
