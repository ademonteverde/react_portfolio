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
          <p id="intro">
            Hi, I'm Andre Carlo Demonteverde—a passionate software and web developer with a strong foundation in both front-end and back-end technologies. With hands-on experience from building dynamic web applications to contributing to full-stack development, I’m always eager to take on new challenges and bring creative solutions to life.
            <br /><br />
            My journey in tech began with an internship as a full-stack developer, where I deployed websites, worked with JavaScript and AWS, and contributed to mobile application development. Since then, I’ve honed my skills through personal projects and continuous learning, focusing on building responsive, user-friendly interfaces and optimizing server-side performance.
            <br /><br />
            I'm particularly interested in creating clean, intuitive user experiences, and I'm always exploring ways to make applications more efficient and scalable. My expertise includes working with React, Node.js, Express, and various front-end frameworks, while keeping up with the latest industry trends and best practices.
            <br /><br />
            When I’m not coding, I’m actively pursuing my goal of transitioning into a full-time web or software engineering role, contributing to exciting projects, and expanding my knowledge in areas like game development and cloud computing.
            <br /><br />
            I’m also passionate about personal growth, whether that’s through new learning opportunities, staying active, or maintaining a healthy work-life balance. I believe in setting high goals—like retiring early, achieving financial freedom, and finding a balance between professional success and personal happiness.
            <br /><br />
            Feel free to explore my projects and reach out if you’d like to collaborate or discuss new opportunities. Let’s build something amazing together!
          </p>
        </div>
      </Grid>
    </div>
  );
}

export default Home;
