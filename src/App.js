import './App.css';
import { Header } from './components/header/header';
import Services from './components/services/services';

function App() {
  
  return (
    <div className="App">
      <Header />
      <Services servisStr="Перечень оказываемых услуг"/>
    </div>
  );
}

export default App;
