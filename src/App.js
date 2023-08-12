
import './App.css';
import Header from './components/Header';

const name = "Ali";
const surname = "Veli";

function App(){
  return(
    <div>
      <h1>Hello React</h1>
      <h1>Benim adım {name}, soyadım {surname}</h1>
      <Header />
    </div>
  )
}

export default App;
