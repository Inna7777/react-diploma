import './App.css';
import { Header } from './components/Header/Header';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';
import Cost from './components/Сost/Сost';
import Footer from './components/Footer/Footer';


function App() {
  
  return (
    <div className="App">
      <Header />
      <Services/>
      <Portfolio/>
      <Cost/>
      <Footer/>

           
    </div>
  );
}

export default App;
