

export default function FormRev() {
  return (
    <form onSubmit={(e)=>{e.preventDefault(); alert('Submitting data')}}>
        <input name="i"/>
        <button>Submit</button>
    </form>
  )
}
