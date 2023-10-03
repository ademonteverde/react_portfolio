import React from 'react';
import Grid from '@mui/material/Grid';
import '../App.css';

function Home() {
  return (
    <div className="home-container">
      <Grid className='home'>
        <div className="profile_container">
          <img src="/profile_pic.png" alt="Profile Pic" id="profile-pic" />
        </div>
        <div className="aboutme_container">
          <h2 className="homepage-title">About me</h2>
          <p id="intro">My name is Andre Carlo Demonteverde. Prior to entering the field of web development, I worked in communications and marketing research. During that time, I conducted research for the Pandemic Response Lab in New York and created product training materials for PCR testing panels. Outside of work, I enjoy activities such as surfing, ballroom dancing, and video editing. My journey into full-stack development was greatly influenced by my online hobbies and freelance work. I consistently make an effort to stay updated on the latest technologies and often delve into deep technical topics to satisfy my curiosity and expand my knowledge. I've had the privilege of collaborating with outstanding companies and musicians, helping enhance their online presence through my marketing skills. My ultimate goal is to acquire as much knowledge as possible, allowing me to channel my passions into computer science. My dream is to create groundbreaking applications and technologies that have a positive impact on people's lives, ultimately improving their quality of life. If you share any of my interests, I encourage you to reach out and connect with me. I'd love to meet like-minded individuals and hear about your experiences. I eagerly anticipate the opportunity to meet you</p>
        </div>
      </Grid>
    </div>
  );
}

export default Home;
