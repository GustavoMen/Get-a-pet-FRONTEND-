import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

/* Components */
import Navbar from './components/layout/Navbar' 
import Footer from './components/layout/Footer' 
import Container from './components/layout/Container'

/* Pages */
import Login from './components/pages/auth/Login'
import Register from './components/pages/auth/Resgister'
import Home from './components/pages/Home'


function App() {
  return (
    <Router>
     <Navbar /> 
     <Container>
          <Switch>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/register">
             <Register />
            </Route>

            <Route path="/" exact>
              <Home />
            </Route>

          </Switch>
        </Container>
      <Footer />
    </Router>
  );
}

export default App;
