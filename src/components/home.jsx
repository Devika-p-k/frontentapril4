import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const logout = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/login')
  }
  

  return (
    
    <div>
    <div style={{ display:"flex",flexDirection:"column",alignItems:"center",gap:"10px",backgroundImage:"url(pic.jpg)",color:"white" , backgroundRepeat:"no-repeat", backgroundSize:"cover", height:'780px', width:"1600px"}}> 
      <h1 style={{fontSize:"100px", color:"yellow"}}>Welcome</h1>
      <p> Click to Login</p>
      <button style={{fontSize:"30px", backgroundColor:"yellowgreen"}} onClick={logout}>Login</button>
    </div>
    </div>

  
  );
};

export default Home;
