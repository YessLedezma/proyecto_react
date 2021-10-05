import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Menu from './componentes/navbar/navbar';
import Home from './componentes/home/home';
import Know_how from './componentes/know_how/know_how';
import About from './componentes/about/about';
import Contact from './componentes/contact/contact';
import Api from './componentes/api/api';
import Footer from './componentes/footer/footer';

function App() {
  return (
    <BrowserRouter>
      <Menu />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/know_how"> 
            <Know_how /> 
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/api">
            <Api />
          </Route>
        </Switch>
      <Footer />  
    </BrowserRouter>
  );
}

export default App;
