import React from 'react';
import NavBar from "../components/navbar/Navbar";
import TextField from '@material-ui/core/TextField';

const App = () => {
  
  return (
   
    <div style={{
        margin: '100',
        display: 'block',
        //width: '200'
      }}>
         <header>
    <NavBar />
</header>
<main></main>
      <h1>Set the deadline for your application</h1>
      <TextField
        id="date"
        label="Choose the day"
        type="date"
        defaultValue="2017-05-24"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  );
}
  
export default App;