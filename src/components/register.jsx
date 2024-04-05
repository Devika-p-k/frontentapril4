import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async () => {

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      console.error('Please fill in all fields');
      return;
    }
  

    if (password !== confirmPassword) {
      console.error('Passwords do not match');
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:2000/register', {
        firstName,
        lastName,
        email,
        password,
      });
      console.log(response.data); 
      if(response.data) {
        navigate('/login')
      }
    } catch (error) {
      console.error('Registration failed', error);
    }
  };
  

  return (
    <div style={{ display:"flex",flexDirection:"column",alignItems:"center",gap:"10px",backgroundColor:"lightblue",color:"white" , backgroundRepeat:"no-repeat", backgroundSize:"cover", height:'780px', width:"1600px" }}>
      <h2 style={{fontSize:"70px", color:"violet"}}><u>Register</u></h2>
     <div style={{border:"2px solid darkgreen", padding:"10px", borderRadius:"3px", }}>
      <div>
        <label style={{color:"black"}}>First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <br></br>
      <div>
        <label style={{color:"black"}}>Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <br></br>
      <div>
        <label style={{color:"black"}}>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <br></br>
      <div>
        <label style={{color:"black"}}>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <br></br>
      <div>
        <label style={{color:"black"}}>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        </div>
      </div>
      <button style={{ fontSize:"20px", color:"white", backgroundColor:"black", alignContent:"center"}}onClick={handleSubmit}>Register</button>
    
    </div>
  );
};

export default Register;
