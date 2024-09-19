import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Blog from './components/Blog';
import VoluntaryActivities from './components/VoluntaryActivities';
import Partners from './components/Partners';
import ProjectDescription from './components/ProjectDescription';
import BlogPostDetail from './components/BlogPostDetail';
import AddArticle from './components/AddArticle';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<ProjectDescription />} />
            <Route path="/voluntary-activities" element={<VoluntaryActivities />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/post/:id" element={<BlogPostDetail />} />
            <Route path="/add-article" element={<AddArticle />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
