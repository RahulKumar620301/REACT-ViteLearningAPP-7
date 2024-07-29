const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
  }, {
    name: 'Percy Lavon Julian',
    profession: 'chemist',  
  }, {
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
}];

const mylist1 = people.filter((p)=>p.profession=="chemist")
const mylist2 = people.filter((p)=>p.profession!="chemist")

export default function List2() {
  return (
    <div>
        <h1>List of Chemist</h1>
        <ul>{mylist1.map((p)=><li key={p.name}>{p.name}--{p.profession}</li>)}</ul>
        <h1>List of non-chemist</h1>
        <ul>{mylist2.map((p)=><li key={p.name}>{p.name}--{p.profession}</li>)}</ul>

    </div>
  )
}
