

export default function Profile() {
  const psrc = "https://i.imgur.com/MK3eW3As.jpg";
  const text = "Katherine Johnson";
  return (
    <>
    <img src={psrc} alt={text} className="pic"/>
    <h3 style={{color:'coral',fontSize:'14pt'}}>{text}</h3>
    </>
  )
}
