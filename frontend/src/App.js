import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Feedback from './Components/Feedback';
import Planner from './Components/Planner';
import India from './Components/India';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/planner' element={<Planner />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/feedback' element={<Feedback />} />
          <Route exact path='/india' element={<India />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
