import React,{useState} from 'react';
import Nav from './Components/Nav/Nav';
import Context from './Context/Context';

function App() {
  const [states , updateChanges] = useState({
    "dmode" : JSON.parse(localStorage.getItem("dmode")) ,
  })

  function changeState( a) {
    updateChanges({
      "dmode" : a ,
    })
  }

  return (
    <Context.Provider value={{states , changeState}}>
      <Nav dmode={states.dmode} />
    </Context.Provider>
  );
}

export default App;
