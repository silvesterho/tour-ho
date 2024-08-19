// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
function App(){
    return(
      <>

<Navbar />
<section className="hero" id="home">
<div className="hero-banner">
  <h1>continue exploring</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dolorem?</p>
  <a href="#tours" className="btn hero-btn">explore tours</a>
</div>
</section>
{/* the comment becomes a function, which is normal */}
{/* <!-- this section is about us  --> */}
<section className="section" id="about">
<div className="section-title">
  <h2>about <span>us</span></h2>
</div>
<div className="section-center about-center">
  <div className="about-img">
    <img src="./images/about.jpg" alt="about" className="about-photo" />
  </div>
  <article className="about-info">
    <h3>explore the difference</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, voluptate.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, voluptate.</p>
    <a href="#" className="btn about-btn">read more</a>
  </article>
</div>
</section>

{/* <!-- this  section is our services  --> */}
<section className="section services" id="services">
<div className="section-title">
  <h2>our <span>services</span></h2>
</div>
<div className="section-center services-center">
  <article className="service">
    <span className="service-icon">
      <i className="fas fa-wallet fa-fw"></i>
    </span>
    <div className="service-info">
      <h4 className="service-title">saving money</h4>
    </div>
    <p className="service-text">
      Saving money 
      Lorem ipsum dolor sit amet 
      consectetur adipisicing elit. Quisquam, quidem.
    </p>
  </article>
  <article className="service">
    <span className="service-icon">
      <i className="fas fa-tree fa-fw"></i>
    </span>
    <div className="service-info">
      <h4 className="service-title">endless hiking</h4>
    </div>
    <p className="service-text">
      Endless Hiking  Lorem ipsum dolor sit amet 
      consectetur adipisicing elit. Quisquam, quidem.
    </p>
  </article>
  <article className="service">
    <span className="service-icon">
      <i className="fas fa-socks fa-fw"></i>
    </span>
    <div className="service-info">
      <h4 className="service-title">amazing comfort</h4>
    </div>
    <p className="service-text">
      Amazing comfort Lorem dolor
       sit amet consectetur adipisicing elit. Quisquam, quidem.
    </p>
  </article>
</div>
</section>
{/* <!-- this section is featured tours  --> */}
<section className="section" id="tours">
<div className="section-title">
  <h2>featured <span>tours</span></h2>
</div>
<div className="section-center tours-center">
  {/* <!-- first tour  card ----> */}
  <article className="tour-card">
    <div className="tour-img-container">
      <img src="./images/tour-1.jpg" className="tour-img" alt="tour-image" />
      <p className="tour-date">August 13th, 2024</p>
    </div>
    
    <div className="tour-info">
      <div className="tour-title">
        <h4>tibet adventure</h4>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.
      </p>
      <div className="tour-footer">
        <p>
          <span><i className="fas fa-map"></i></span>
          china
        </p>
        <p>6 days</p>
        <p>from $2100</p>
      </div>
    </div>
  </article>
  {/* <!-- second tour   card--> */}
  <article className="tour-card">
    <div className="tour-img-container">
      <img src="./images/tour-1.jpg" className="tour-img" alt="tour-image" />
      <p className="tour-date">Sept 13th, 2024</p>
    </div>
    <div className="tour-info">
      <div className="tour-title">
        <h4>Canton adventure</h4>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.
      </p>
      <div className="tour-footer">
        <p>
          <span><i className="fas fa-map"></i></span>
          china
        </p>
        <p>3 days</p>
        <p>from $800</p>
      </div>
    </div>
  </article>
  {/* <!-- third tour card--> */}
  <article className="tour-card">
    <div className="tour-img-container">
      <img src="./images/tour-1.jpg" className="tour-img" alt="tour-image" />
      <p className="tour-date">August 13th, 2024</p>
    </div>
    <div className="tour-info">
      <div className="tour-title">
        <h4>Hong Kong adventure</h4>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.
      </p>
      <div className="tour-footer">
        <p>
          <span><i className="fas fa-map"></i></span>
          H.K. china
        </p>
        <p>3 days</p>
        <p>from $3100</p>
      </div>
    </div>
  </article>
</div>
</section>
<footer className="section footer">
<ul className="footer-links">     
  <li><a href="#home" className="footer-link">home</a></li>
  <li><a href="#about" className="footer-link">about</a></li>
  <li><a href="#services" className="footer-link">services</a></li>
  <li><a href="#tours" className="footer-link">tour</a></li>
</ul>
<ul className="footer-icons">
  <li><a href="#" className="footer-icon"><i className="fab fa-facebook"></i></a></li>
  <li><a href="#" className="footer-icon"><i className="fab fa-twitter"></i></a></li>
  <li><a href="#" className="footer-icon"><i className="fab fa-squarespace"></i></a></li>
</ul>
<p className="copyright">
  copyright &copy; backroads travel tours company <span id="date"></span> all rights reserved
</p>
</footer>

</>
);
}

export default App;
