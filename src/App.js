import './App.css';
import Menu from './components/Home/Menu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import FirstDetail from './components/FirstDetail/FirstDetail';
import SecondDetail from './components/SecondDetail/SecondDetail';
import ThirdDetail from './components/ThirdDetail/ThirdDetail';
import Blog from './components/Blog/Blog';


function App() {
  return (
    <div className="App">
      <Router>
        <Menu></Menu>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/home">
            <Portfolio></Portfolio>
          </Route>
          <Route path="/firstDetail">
            <FirstDetail></FirstDetail>
          </Route>
          <Route path="/secondDetail">
            <SecondDetail></SecondDetail>
          </Route>
          <Route path="/thirdDetail">
            <ThirdDetail></ThirdDetail>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
        </Switch>
      </Router >
    </div >
  );
}

export default App;
