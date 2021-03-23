import React, { useState } from 'react';
import './style.css';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Project from './Pages/Projects';
import Wrapper from './components/Wrapper/Wrapper'
import { BrowserRouter } from 'react-router-dom';


const App = () => {
  const [tab, setTab] = useState("about");

  const clickAbout = () => {
    setTab("about")
  }
  const clickProjects = () => {
    setTab("projects")
  }
  // const clickContact = () => {
  //   setTab("contact")
  // }

  return (
    <BrowserRouter>
      <Wrapper>
          < NavBar SetAboutTab={clickAbout} SetProjectsTab={clickProjects} />
            {tab === "about" && < About />}
            {tab === "projects" && < Project />}
            {/* {tab ==="contact" && < Contact />} */}
        </Wrapper>
        < Footer />
    </BrowserRouter>
  );
}

export default App;
