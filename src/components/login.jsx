import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const  navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {

    try {
      const response = await axios.post('http://localhost:2000/login', { email, password });
      const { firstName } = response.data;
      dispatch({ type: 'SET_USER', payload: firstName }); 
       if(response.data) {
        navigate('/')
       }       
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const redirecter = () => {
    navigate('/register');
  }

  return (
    
    <div style={{ display:"flex",flexDirection:"column",alignItems:"center",gap:"10px",backgroundImage:"url(pic.jpg)",color:"white" , backgroundRepeat:"no-repeat", backgroundSize:"cover", height:'780px', width:"1600px"}} >
      <h2 style={{fontSize:"70px", color:"violet"}}>Login</h2>
      <div style={{border:"3px solid darkgreen", padding:"10px", borderRadius:"3px", }}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <br></br>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      </div>
      <br></br>
      <button style={{ fontSize:"20px", color:"white", backgroundColor:"black", alignContent:"center"}}onClick={handleSubmit}>Login</button> 
<br></br>
      <button style={{ fontSize:"20px", color:"white", backgroundColor:"black", alignContent:"center"}}onClick={redirecter}>signup</button> 


    </div>

  );
};

export default Login;
