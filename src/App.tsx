import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TabBar from './Components/TabBar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import NotFound from './Components/NotFound';
import './App.css';
import Footer from './Components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
// import './custom.scss';
function App() {
    return (
        <Router>
            <div className="App">
                <TabBar />
                <div className="App-body">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
                < Footer />
            </div>
        </Router>
    );
}

export default App;
