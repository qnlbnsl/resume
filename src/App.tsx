import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Article from './Pages/Article';

import TabBar from './Components/TabBar';
import NotFound from './Components/NotFound';
import Footer from './Components/Footer';

// import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss';
import WorkTimeline from './Pages/WorkTimeline';
import Hobbies from './Pages/Hobbies';
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
                        <Route path="/projects" element={<Projects pageType='blog'/>} />
                        <Route path="/projects/categories" element={<Projects pageType='blog' />} />
                        <Route path="/projects/search" element={<Projects pageType='search' />} />
                        <Route path="/projects/:slug" element={<Article />} />
                        <Route path="/projects/categories/:slug" element={<Projects pageType='category' />} />
                        <Route path="/projects/tag/:slug" element={<Projects pageType='tag' />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
                < Footer />
            </div>
        </Router>
    );
}

export default App;
