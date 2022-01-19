import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import Profile from './Components/Profile/Profile'
import NotFound from './Components/NotFound/NotFound'
import Services from './Components/Services/Services'
import Contact from './Components/Contact/Contact'
import Navbar from './Components/Navbar/Navbar'
import Front from './Components/Services/Front/Front'
import Back from './Components/Services/Back/Back'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />}>
          <Route path="/services/front" element={<Front />}/>
          <Route path="/services/back" element={<Back />}/>
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
