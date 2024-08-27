import React from 'react';
import vg from '../assets/pic2.png';
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from 'react-icons/ai';

const Home = () => {
  return (
  <>
    <div className='home' id="Home">
        <main>
        <h1>TechStar</h1>
        <p>To provide you better future....</p>
        </main>
    </div>

  <div className="home2" >
    <img src={vg} alt="graphics" />
    <div>
    <p>
    Techstar Company is a leading innovator in the technology industry, committed to delivering cutting-edge solutions and products that transform the way businesses operate and people live.
    </p>
    </div>
  </div>

<div className="home3" id="About">
  <div>
  <h1>Who we are?</h1>
  <p>At the heart of Techstar's mission is a dedication to excellence and customer satisfaction. We believe in building long-term relationships with our clients by providing them with innovative solutions that are not only reliable and scalable but also tailored to their specific needs.</p>
</div>
</div>

<div className="home4" id="Brands">
  <div>
    <h1>Brands</h1>
    <article>
    <div style={{ animationDelay:"0.3s"}}>
      <AiFillGoogleCircle/>
      <p>Google</p>
    </div>

    <div style={{ animationDelay:"0.5s"}}>
      <AiFillAmazonCircle/>
      <p>Amazon</p>
    </div>

    
    <div style={{ animationDelay:"0.7s"}}>
      <AiFillYoutube/>
      <p>Youtube</p>
    </div>

    <div style={{ animationDelay:"0.9s"}}>
      <AiFillInstagram/>
      <p>Instagram</p>
    </div>
    
    </article>
  </div>
</div>
  </>

  );
};

export default Home;