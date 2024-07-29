export default function Form1() {
    return (
      <form onSubmit={(e)=>{ e.preventDefault(); alert('Submitting!')}}>
        <input name="q"/>
        <button>Send</button>
      </form>
      //isse page baar baar load nhi hoga
    );
  }
  