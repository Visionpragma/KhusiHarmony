import React, { useState } from 'react';
import { TextField,makeStyles } from '@mui/material';
import { Container } from 'react-bootstrap';

function RegistrationPage() {
  const [name, setName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [address, setAddress] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleMobileNoChange = (event) => {
    setMobileNo(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform registration logic with the form data
    // For example, send an API request to register the user
    console.log('Registration data:', { name, mobileNo, address });
    // Reset the form fields
    setName('');
    setMobileNo('');
    setAddress('');
  };

  return (
    <div>
      <h1>Add Tenant</h1>
      <Container>
      <form className='classes.root' noValidate autoComplete='off'>
        <TextField id="outlined-basic" label="FlatNo" fullWidth/>
        <TextField id="outlined-basic" label="Name" fullWidth/>
        <TextField id="outlined-basic" label="MobileNo" fullWidth/>
        <TextField id="outlined-basic" label="Address" fullWidth/>

      </form>
      </Container>
    </div>
  );
}

export default RegistrationPage;
