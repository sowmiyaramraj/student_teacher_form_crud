import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useNavigate,Link,useParams } from 'react-router-dom';
function Signupmentor() {
  let formValues = {
    id: "",
    name: "",
    age: "",
    email: "",
    gender: "",
    mobilenumber: "",
    error: {
      name: "",
      age: "",
      email: "",
      gender: "",
      mobilenumber: "",
    },
  };
  const [formData, setFormData] = useState(formValues);
  const [userData, setUserData] = useState([]);

// handle error
  const handleChange = (e) => {
    let error = { ...formData.error };
    if (e.target.value === "") {
      error[e.target.name] = `${e.target.name} is Required`;
    } else {
      error[e.target.name] = "";
    }
    setFormData({ ...formData, [e.target.name]: e.target.value, error });
  };

 


//   POST axios call

const handleSubmit = async (e) => {
    e.preventDefault();
    // Delete
    const errKeys = Object.keys(formData).filter((key) => 
    {
      if (formData[key] === "" && key != "error" && key != "id") {
        return key;
      }
    });

    if (errKeys.length >= 1) 
    {
      alert("Please fill all values");
    } 
    else 
    {
        // Create
        const response = await axios.post(
          "https://632f42ebb56bd6ac45adc26a.mockapi.io/user",
          {
            name: formData.name,
            age: formData.age,
            email: formData.email,
            gender: formData.gender,
            mobilenumber: formData.mobilenumber,
          }
        );
        setUserData([...userData, response.data]);
      }
      setFormData(formValues);
    
  };


 
  return (
    <div style={{ padding: "20px" }}>
      
  <h3> User Form </h3>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "30ch" },
        }}
        autoComplete="off"
        onSubmit={(e) => handleSubmit(e)}
      >
        <TextField
          id="name"
          label="Name"
          variant="standard"
          value={formData.name}
          name="name"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <span style={{ color: "red" }}>{formData.error.name}</span>
        <br />
        <TextField
          id="age"
          label="Age"
          variant="standard"
          type="number"
          name="age"
          value={formData.age}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <span style={{ color: "red" }}>{formData.error.age}</span>
        <br />
        <TextField
          id="email"
          type="email"
          label="Email"
          variant="standard"
          name="email"
          value={formData.email}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <span style={{ color: "red" }}>{formData.error.email}</span>
        <br />
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="gender"
          value={formData.gender}
          onChange={(e) => handleChange(e)}
        >
          <FormControlLabel value="Female" control={<Radio />} label="Female" />
          <FormControlLabel value="Male" control={<Radio />} label="Male" />
          <FormControlLabel value="Other" control={<Radio />} label="Other" />
        </RadioGroup>
        <br />
        <span style={{ color: "red" }}>{formData.error.gender}</span>
        
        <TextField
          id="mobilenumber"
          type="number"
          label="mobilenumber"
          variant="standard"
          name="mobilenumber"
          value={formData.mobilenumber}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <span style={{ color: "red" }}>{formData.error.mobilenumber}</span>
        <br />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Box>
      
    </div>
  );
}

export default Signupmentor;