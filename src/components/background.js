import '../css/background.css';
import { Routes, Route } from 'react-router-dom';
import Calculator from './calculator';
import NavBar from './navigation';
import Home from './home';
import Quotes from './quote';

const Background = () => (
  // Background animation
  <div className="background">
    <div>
      <div className="cube" />
      <div className="cube" />
      <div className="cube" />
      <div className="cube" />
      <div className="cube" />
    </div>
    <header>
      <NavBar />
    </header>
    <main className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quotes" element={<Quotes />} />
      </Routes>
    </main>
  </div>
);

export default Background;
