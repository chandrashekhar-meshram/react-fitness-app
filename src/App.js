import React from "react";
import {Route, Routes} from "react-router-dom";
import {Box} from "@mui/material";

// import "./style.css";
import "./App.css";
import Navbar from './components/Navbar';
import Home from './pages/Home';

const App = () => {
  
  return (   
    <>  
      <Box width='400px' border="1px solid black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Box>    
      </>
  );
}

export default App;

 {/* <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p> */}
