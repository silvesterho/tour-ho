export const pageLinks = [
  {id: 1, href: '#home', text: 'home'},
  {id: 2, href: '#about', text: 'about'},
  {id: 3, href: '#services', text: 'services'},
  {id: 4, href: '#tours', text: 'tours'},
];

export const socialLinks = [
  {id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook'},
  {id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter'},
  {id: 3, href: 'https://www.twitter.com', icon: 'fab fa-youtube'},
]

export const services = [
    {id: 1, 
        item: 'fas fa-wallet fa-fw', 
        title:'saving money',
        text: 'Saving money 
      Lorem ipsum dolor sit amet 
      consectetur adipisicing elit. Quisquam, quidem.'
        
        text: 'home'},
    {id: 2, href: '#about', text: 'about'},
    {id: 3, href: '#services', text: 'services'},
    {id: 4, href: '#tours', text: 'tours'},
  ];

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