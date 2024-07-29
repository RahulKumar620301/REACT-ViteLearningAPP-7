

export default function Item({name, isPacked}) {
    return(
        <li style={{color:'red', backgroundColor:'beige', marginBottom:20}}>
            {name} {isPacked && '✔'} {!isPacked && '❌'}
        </li>
    )


    // return(
    //     <li>{isPacked ? name + '✔' : name + '❌'}</li>
    // )


    // if(isPacked){
    //     return (
    //         <li className="item">{name} ✔</li>
    //     )
    // }
    // return  <li className="item">{name} ❌</li>
}
