import '../App.css';
import React from 'react';
import { useNavigate,Link,useParams } from 'react-router-dom';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Listmentor from "./listmentor";
import Liststudent from "./liststudent";
import Signupstudent from "./signupstudent";
import Signupmentor from "./signupmentor";
import Updatestudent from "./updatestudent";
import Updatementor from "./updatementor";
import Deletestudent from "./deletestudent";
import Deletementor from "./deletementor";
import Viewprofile from './viewprofile';
import Updateprofile from "./updateprofile";


function Dashboard() {
    return (
    <>       
        <h1>Welcome to Dashboard</h1>
        <h2><Link to="/" element={<Signupstudent/>}/>
        <Link to="/signupstudent" element={<Signupstudent/>}>Signup student</Link>&nbsp;<br/>
        <Link to="/signupmentor" element={<Signupmentor/>}>Signup mentor</Link>&nbsp;<br/>
        <Link to="/liststudent" element={<Liststudent/>}>List Student</Link>&nbsp;<br/>
        <Link to="/listmentor" element={<Listmentor/>}>List mentor</Link>&nbsp;<br/>
        <Link to="/updatestudent" element={<Updatestudent/>}>Update student</Link>&nbsp;<br/>
        <Link to="/updatementor" element={<Updatementor/>}>Update mentor</Link>&nbsp;<br/>
        <Link to="/deletestudent" element={<Deletestudent/>}>Delete student</Link>&nbsp;<br/>
        <Link to="/deletementor" element={<Deletementor/>}>Delete mentor</Link>&nbsp;<br/>
        <Link to="/profile" element={<Viewprofile/>}>Profile</Link>&nbsp;<br/>
        <Link to="/updateprofile" element={<Updateprofile/>}>Update Profile</Link>&nbsp;<br/>

        
        </h2>
    </>
    );
} 

export default Dashboard;