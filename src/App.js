import './App.css';
import Layout from './components/widgets/layout.js'

import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';

import Home from './page/Home.js';
import Contact from './page/Contact.js';
import Mentalhealth from './page/MentalHealth.js';
import News from './page/News.js';
import NineQ from './page/NineQ.js';
import Happy from './page/happy.js';
import Stress from './page/Stress.js';


function App() {
  return (
    <Router>
    <div className="App">
      <section>  
        <Routes >
              <Route 

                  path="/"
                  element={
                    <Layout>< Home /></Layout>
                  }
              />
              <Route 
                  path="/contact"
                  element={
                    <Layout>< Contact /></Layout>
                  }
              />
              <Route 
                  path="/mentalhealth"
                  element={
                    <Layout>< Mentalhealth /></Layout>
                  }
              />
              <Route 
                  path="/news"
                  element={
                    <Layout>< News /></Layout>
                  }
              />
              <Route 
                  path="/nineq"
                  element={
                    <Layout>< NineQ /></Layout>
                  }
              />
              <Route 
                  path="/happy"
                  element={
                    <Layout>< Happy /></Layout>
                  }
              />
              <Route 
                  path="/stress"
                  element={
                    <Layout>< Stress /></Layout>
                  }
              />
          </Routes>
        </section>
    </div>
    </Router>
  );
}

export default App;
