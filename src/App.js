import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about/AboutPage';
import ContactPage from './pages/contact/ContactPage';
import MediaPage from './pages/media/MediaPage'
import PhotosPage from './pages/photos/PhotosPage'
import Navbar from './components/pure/Navbar';
import Footer from './components/pure/Footer';


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
          <Route path='media' element={<MediaPage/>}/>
          <Route path='photos' element={<PhotosPage/>}/>

          <Route path='*' element={<h1>Page not found</h1>}></Route>
          </Routes>
          <Footer/>
      </div>
    </Router>
  );
}

export default App;
