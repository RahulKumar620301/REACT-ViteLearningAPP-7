import Gallery from "./Gallery";
import List from "./List";
import List2 from "./List2";
import Packeging_list from "./Packeging_list";
import Button1 from "./Button1";
import Button2 from "./Button2";
import Button3 from "./Button3";
import Form1 from "./Form1";
import Events from "./Events";
import ButtonRev1 from "./ButtonRev1";
import ButtonRev2 from "./ButtonRev2";
import ButtonRev3 from "./ButtonRev3";
import FormRev from "./FormRev";
import Card from "./Card";

function App() {
  return (
    <>
    <Card/>
    <Events/>
    <Form1/>
    <Button1/>
    <Button2 message="learning..">B1</Button2>
    <Button3 onStart={()=>{alert('This is message 1')}} onStop={()=>{alert('Stop message 1')}}>Alert message</Button3>
    <Button3 onStart={()=>{console.log('This is message 1')}} onStop={()=>{alert('Stop message 1')}}>console message</Button3>
    <Button3 onStart={()=>{confirm('This is message ?')}} onStop={()=>{alert('Stop message 1')}}>confirm message</Button3>

      <Gallery/>
      <List/>
      <List2/>
      <Packeging_list/>
      <p>Revision components</p>
      <ButtonRev1/>
      <br/>
      <ButtonRev2 message="Revbutton2">revButton2</ButtonRev2>
      <br/>
      <ButtonRev3 onstart={()=>{alert('alert button clicked')}} onstop={()=>{alert('stop revision message1')}}>Alert revMessage</ButtonRev3>
      <ButtonRev3 onstart={()=>{console.log('console button clicked')}} onstop={()=>{alert('stop revision message2')}}>console revMessage</ButtonRev3>
      <ButtonRev3 onstart={()=>{confirm('confirm button clicked')}} onstop={()=>{alert('stop revision message3')}}>confirm revMessage</ButtonRev3>
      <FormRev/>
      

    </>
  )
}

export default App
