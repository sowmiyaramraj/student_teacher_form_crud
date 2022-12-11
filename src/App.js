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
import Viewprofile from './modules/viewprofile';
import Updateprofile from "./modules/updateprofile";
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
        <Route path="/updatestudent/:userId" element={<Updatestudent/>}/>
        <Route path="/updatementor/:userId" element={<Updatementor/>}/>
        <Route path="/deletestudent" element={<Deletestudent/>}/>
        <Route path="/deletementor" element={<Deletementor/>}/>
        <Route path="/profile/:userId" element={<Viewprofile/>}/>
        <Route path="/updateprofile/:userId" element={<Updateprofile/>}/>

      </Routes>
    </Router>
  </div>
  );
}

export default App;
