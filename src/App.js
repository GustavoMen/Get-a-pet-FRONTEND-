import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

/* COMPONENTS */
import Navbar from './components/layout/Navbar' 
import Footer from './components/layout/Footer' 
import Container from './components/layout/Container'
import Message from './components/layout/Message'

/* PAGES */
import Login from './components/pages/auth/Login'
import Register from './components/pages/auth/Resgister'
import Home from './components/pages/Home'
import Profile from './components/pages/User/Profile'
import MyPets from './components/pages/Pet/myPets'
import AddPet from './components/pages/Pet/AddPet'

/* CONTEXT */ 
import {UserProvider} from './context/UserContext'

function App() {
return (
  <Router>
    <UserProvider>
     <Navbar /> 
     <Message />
     <Container>
          <Routes>

            <Route path="/login" element={<Login />} />              
            <Route path="/register" element={<Register />} />
            <Route path="/user/profile" element={<Profile />} />
            <Route path="/pet/mypets" element={<MyPets />} />
            <Route path="/pet/add" element={<AddPet />} />
            <Route exact path="/" element={<Home />} />
            
            

          </Routes>
        </Container>
      <Footer />
    </UserProvider>
  </Router>
  );
}

export default App;
