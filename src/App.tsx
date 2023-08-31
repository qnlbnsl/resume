import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TabBar from './Components/TabBar';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import NotFound from './Components/NotFound';
import './App.css';
import Footer from './Components/Footer';

// import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss';
import WorkTimeline from './Components/WorkTimeline';
import Hobbies from './Components/Hobbies';
function App() {
    return (
        <Router>
            <div className="App">
                <TabBar />
                <div className="App-body">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/work" element={<WorkTimeline />} />
                        <Route path="/hobbies" element={<Hobbies />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
                < Footer />
            </div>
        </Router>
    );
}

export default App;
