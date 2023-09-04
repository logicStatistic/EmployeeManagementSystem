import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Employeelist from './components/Employeelist';
import Navigationbar from './components/Navigationbar';
import Registeremployee from './components/Registeremployee';

function App() {
  return  (
    <>
      <BrowserRouter>
      <Navigationbar/>
      <Routes>
        <Route index element = {<Employeelist/>} />
        <Route path = "/" element = {<Employeelist/>}></Route>
        <Route path = "/add-employee" element = {<Registeremployee/>}/>
        <Route path = "/employeelist" element = {<Employeelist/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
