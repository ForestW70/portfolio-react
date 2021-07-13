import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header';
import AboutMe from './components/aboutMe';
import Projects from './components/projects';
import Blog from './components/blog';
import Contact from './components/contact';
import Resume from './components/resume';
import Footer from './components/footer';

// import logo from './logo.svg';
import './assets/css/App.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="meat">
        <Route exact path="/about">
          <AboutMe />
        </Route>

        <Route exact path="/archive">
          <Projects />
        </Route>

        <Route exact path="/blog">
          <Blog />
        </Route>

        <Route exact path="/resume">
          <Resume />
        </Route>

      </div>
        <Contact />
        <Footer />
    </Router>
  );
}

export default App;
