import React from 'react'

export default function Services() {
  return (
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
                <div className="service-text">
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia corrupti blanditiis voluptate esse quasi magni alias qui nesciunt ullam at!
                    </p>
                </div>
            </article>
            <article className="service">
                <span className="service-icon">
                    <i className="fas fa-tree fa-fw"></i>
                </span>
                <div className="service-info">
                    <h4 className="service-title">endless biking</h4>
                </div>
                <div className="service-text">
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia corrupti blanditiis voluptate esse quasi magni alias qui nesciunt ullam at!
                    </p>
                </div>
            </article>
            <article className="service">
                <span className="service-icon">
                    <i className="fas fa-socks fa-fw"></i>
                </span>
                <div className="service-info">
                    <h4 className="service-title">amazing comfort</h4>
                </div>
                <div className="service-text">
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia corrupti blanditiis voluptate esse quasi magni alias qui nesciunt ullam at!
                    </p>
                </div>
            </article>
        </div>
    </section>
  )
}
