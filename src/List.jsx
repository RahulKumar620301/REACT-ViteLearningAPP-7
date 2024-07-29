const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
];

const itemlist = people.map((p)=><li>{p}</li>);


export default function List() {
  return (
    <div>
        <ul>
            <h1>1st method</h1>
            {itemlist}
            <h1>2nd method</h1>
            {people.map((p)=><li key={p}>{p}</li>)}
        </ul>
    </div>
  )
}
