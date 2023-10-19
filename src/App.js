import './App.css';
import { Header } from './components/header/header';
import Portfolio from './components/portfolio/portfolio';
import Services from './components/services/services';
import Cost from './components/cost/cost';
import Footer from './components/footer/footer';


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
