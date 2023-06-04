import AddResume from "./components/AddResume";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ResumeState from './context/resumeState';
import ResumePage from "./components/ResumePage";

import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import MainPage from "./components/MainPage";

function App() {
  return (
    <div className="app">
    <ResumeState>
   <Router>
<Navbar/>



<Routes>

<Route exact path = "/" element = {<MainPage/>}></Route>
<Route exact path = "/addresume" element = {<AddResume/>}></Route>
<Route exact path="/api/:resumeId" element={<ResumePage/>}></Route>




</Routes>






</Router>


   
   </ResumeState>
   </div>
   
  );
}

export default App;
