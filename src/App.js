import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Home from './components/home';
import Contact from './components/contact';
import Login from './components/login';
import Table from './components/table';
import Rooms from './components/rooms';
import About from './components/about';
import { Route, Routes } from "react-router-dom";
import Signup from './components/signup'
import Forgotpassword from './components/forgotpassword';
import Readmore from './components/read';






function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={ <Login/>} />
        <Route path="/" element={ <Forgotpassword/>} />
        <Route path="/signup" element={ <Signup/>} />
        <Route path="/navbar" element={ <Navbar/>} />
        <Route path="/home" element={ <Home/>} />
        <Route path="/table" element={ <Table/>} />
        <Route path="/rooms" element={ <Rooms/>} />
        <Route path="/about" element={ <About/>} />
        <Route path="/contact" element={ <Contact/>} />
        <Route path="/readmore" element={ <Readmore/>} />

      </Routes>




    </div>
  );
}

export default App;
