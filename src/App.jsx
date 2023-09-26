import { useState } from "react";
import Home from "./components/home";
import Gameplay from "./components/GamePlay";


function App(props) {

  const[isclicked, afterClicked] = useState(true);

  function toggleHandler(){
       afterClicked(Clicked => !Clicked);
  }
 
  return (
    <>
    {  isclicked ? <Home toggle = {toggleHandler}/> : <Gameplay/>  }
    </>
  )
}

export default App;
