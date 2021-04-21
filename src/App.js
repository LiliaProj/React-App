import './App.css';
import { useState } from 'react';
import Home from './components/Home';
import ToDoList from './components/ToDoList';

function NavBar(){
  let [component, setComponent] = useState([<Home key="homeKey"/>]);

  return (
  <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand btn disabled" href="#">
          <img src="./logo2.png" alt="" width="30" height="30" className="d-inline-block align-text-top"/>
            Diary</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" href="#" onClick={()=>setComponent([<Home key="homeKey"/>])}>Home</a>
              <a className="nav-link" href="#" onClick={()=>setComponent([<ToDoList key="toDoKey"/>])}>To do list</a>
            </div>
          </div>
        </div>
      </nav>
      {component}
      <footer className="container py-5 border-top border-dark">
        <p className="">&copy; 2021&middot;Liliia Potapenko &middot;Kyiv&middot; <a href="mailto:potapenko.lilia98@gmail.com">potapenko.lilia98@gmail.com</a></p>
      </footer>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <NavBar/>
    </div>
  );
}

export default App;
