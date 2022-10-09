import './App.css';
import { OrderCard } from './OrderCard';
import topBackground from "./assets/images/pattern-background-desktop.svg"

function App() {
  return (
    
      <div className="App"> 
      <img alt="top background" src={topBackground} className="Desktop"></img>
        <OrderCard></OrderCard>
      </div>
   
  );
}

export default App;
