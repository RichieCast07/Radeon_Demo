import { useState, useEffect, useContext, createContext } from 'react'
import './App.css'
const userContext= createContext();
function App() {
  //const [count, setCount] = useState(0);
   //const [data, setData]= useState([]);
   

    /*useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json)
      .then((data) => setData(data));
    }, []); */
  return (
    <>
     <userContext.Provider value="Jugador1">
      <Navbar/>
     </userContext.Provider>
    </>
  )
}

function Navbar(){
  return(
    <div>
      <UserProfile/>
    </div>
  )
}

function UserProfile(){
  const user = useContext(userContext);
  return <h1>Bienvenido, {user}</h1>
}

export default App
