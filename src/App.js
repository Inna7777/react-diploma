import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/header';

function App() {
  const user = {
    name:'Inna',
    age: 40,
  }
  return (
    <div className="App">
      <Header />
      Hello, {user["name"]},{user.age} age!
    </div>
  );
}

export default App;
