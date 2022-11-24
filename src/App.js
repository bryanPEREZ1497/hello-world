import './App.css';
import Card from './components/Card';
import Cat from './components/Cat';
import Counter from './components/Counter';
import Dogs from './components/Dogs';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Barra from './components/Navbar';
import Watch from './components/Watch';
import { Route, Routes, BrowserRouter as Router, Navigate } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Navbar from './components/Navbar';
import Tarea8 from './pages/Tarea8';

const me = {
  name: 'Bryan Pérez',
  phone: '0987654321',
  description: 'Soy desarrollador web, y me encanta salir al aire libre a correr y hacer calistenia',
  image: 'https://media-exp1.licdn.com/dms/image/C4E03AQEOnvJHoG3gew/profile-displayphoto-shrink_800_800/0/1651948362172?e=1674086400&v=beta&t=ecOzNWR34Iy9mLybeHVNmUNsphhVUG-viKDzrJg9xkw',
}

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/tarea' element={<Tarea8 />} />
          <Route path='/*' element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
