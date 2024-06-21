import './App.css';

import Navbar from './components/Navbar';

import Create from './components/Create';
import Update from './components/Update';
import Read from './components/Read';

import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path = "/" element = {<Create/>}/>
        <Route exact path = "/all" element = {<Read/>}/>
        <Route exact path = "/:id" element = {<Update/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
