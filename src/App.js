import './App.css';
import { Header } from './components/header/header';
import Portfolio from './components/portfolio/portfolio';
import Services from './components/services/services';

function App() {
  
  return (
    <div className="App">
      <Header />
      <Services/>
      <Portfolio/>
     
    </div>
  );
}

export default App;
