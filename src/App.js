import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about/AboutPage';
import ContactPage from './pages/contact/ContactPage';
import Navbar from './components/pure/Navbar';



import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/js/index.esm.js'




function App() {
  return (
    <Router>
      <div className='bg-app'>
        <Navbar/>
          <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='about' element={<AboutPage/>}/>
          <Route path='contact' element={<ContactPage/>}/>

          <Route path='*' element={<h1>Page not found</h1>}></Route>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
