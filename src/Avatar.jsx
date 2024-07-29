

export default function Avatar({data,cname}) {
    return (
      <>
      <img src={data.psrc} alt={data.text} className={cname}/>
      <h3 style={{color:'coral',fontSize:'14pt'}}>{data.text}</h3>
      </>
    )
  }
  