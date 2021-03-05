import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <h1>Hazel is so cool</h1>
    </Router>
  );
}

export default App;
