import './App.css';
import { Switch, Route } from "react-router-dom";
import Navbar from './components/NavBar';
import HomeComponent from './components/HomeComponent';
import AboutComponent from './components/AboutComponent';
import DietComponent from './components/DietComponent';
import PhotosComponent from './components/PhotosComponent';
import ContactComponent from './components/ContactComponent';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomeComponent} />
        <Route path="/about" component={AboutComponent} />
        <Route path="/diet" component={DietComponent} />
        <Route path="/photos" component={PhotosComponent} />
        <Route path="/contact" component={ContactComponent} />
      </Switch>
    </>
  );
}

export default App;
