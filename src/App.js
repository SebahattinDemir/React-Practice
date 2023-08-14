
import './App.css';

import User from './components/user';

const friends = [
  {
    id:1,
    name: "Ahmet",
  },
  {
    id:2,
    name:"Elif",
  },
  {
    id:3,
    name:"John",
  },
];

function App(){
  return(
    <>
      
      <User 
      name="Ali" 
      surname="Veli" 
      isLoggedIn={true} 
      age={30} 
      friends={friends}
      adress={{
        title: 'Antalya',
        zip: 7100
      }}
      />

    </>
  )
}

export default App;
