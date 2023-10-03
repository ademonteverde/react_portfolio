import { useState } from 'react';
import '../App.css';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    message: '',
    emailAddress: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { message, emailAddress } = formData;
    const recipient = 'andre.demonteverde@gmail.com';
    const body = encodeURIComponent(message);
    const sender = emailAddress;

    const mailtoUrl = `mailto:${recipient}?subject=&body=${body}&from=${sender}`;
    window.location.href = mailtoUrl;

    // Clear form fields
    setFormData({ fullName: '', message: '', emailAddress: '' });
  };

  return (
    <Container maxWidth="sm">
      <h2 className="contact-title">Contact Me</h2>
      <form onSubmit={handleFormSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              variant="outlined"
              InputProps={{
                style: {
                  background: 'white',
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleInputChange}
              variant="outlined"
              InputProps={{
                style: {
                  background: 'white',
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              variant="outlined"
              multiline
              rows={6}
              InputProps={{
                style: {
                  background: 'white', 
                },
              }}
            />
          </Grid>
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ width: '100%' }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default Contact;
