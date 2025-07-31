import aboutImg from "../img/img1.png"; 

import '../css/about.css';

function About() {
  return (
    <div className="about-scroll">
      <div style={{marginTop:'8rem',width:'100%',height:'10px'}}></div>
      <div className="about-container">
        <div className="about-row">
          <div className="about-img-col">
            <img alt="about" src={aboutImg} className="about-img" />
          </div>
          <div className="about-text-col">
            <h2 className="about-title">ABOUT</h2>
            <p className="about-desc">
              710TECH LI is dedicated to delivering innovative technology solutions that empower businesses to grow and succeed. Our team specializes in custom software development, automation, and cloud-native platforms, providing reliable and scalable services tailored to your needs. We combine technical expertise with a client-focused approach, ensuring every project is built with quality, speed, and transparency. Partner with us to transform your ideas into reality and drive your business forward with modern technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;