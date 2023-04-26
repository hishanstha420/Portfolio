import Header from './components/Header/header'
import Home from './components/Home/Home';
import About from './components/About/About';
import { Skills } from './components/Skills/Skill';
import { Project } from './components/Projects/Project';
import { Contact } from './components/Contact/Contact';
import './App.css'

function App() {

  return (
    <div className="App">
     <Header />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
      
    </div>
  )
}

export default App;
