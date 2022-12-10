import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Listmentor from "./modules/listmentor";
import Liststudent from "./modules/liststudent";
import Signupstudent from "./modules/signupstudent";
import Signupmentor from "./modules/signupmentor";
import Updatestudent from "./modules/updatestudent";
import Updatementor from "./modules/updatementor";
import Deletestudent from "./modules/deletestudent";
import Deletementor from "./modules/deletementor";
import Dashboard from "./modules/dashboard";
function App() {
  return (
  <div>
    <Router>
      <Routes>
      <Route path="/" element={<Dashboard/>}/>
        <Route path="/signupstudent" element={<Signupstudent/>}/>
        <Route path="/signupmentor" element={<Signupmentor/>}/>
        <Route path="/liststudent" element={<Liststudent/>}/>
        <Route path="/listmentor" element={<Listmentor/>}/>
        <Route path="/updatestudent" element={<Updatestudent/>}/>
        <Route path="/updatementor" element={<Updatementor/>}/>
        <Route path="/deletestudent" element={<Deletestudent/>}/>
        <Route path="/deletementor" element={<Deletementor/>}/>
      </Routes>
    </Router>
  </div>
  );
}

export default App;
