import React from 'react'
import Banner from '../Banner'
import './software.css'
import Getin from '../Getin'

export default function Software() {
  return (
    <>
    <Banner 
        heading="Software Development Services"
        desc="Weblock embodies the fusion of passion and dedication with over 835 skilled IT engineers and industry experts. Our commitment to innovation drives transformative software development services, setting us apart as a prominent player in the industry."
        desc2="We specialize in creating cutting-edge digital solutions using advanced technology. Collaborate with us to enhance and expand your software development expertise."
        button="Contact with our experts"
    />
    <div className="software mt-5">
        <div className="container">
            <h2>Software Development Services for All Industries</h2>
            <div className="custom-hr">
                <hr />
            </div>
            <div className="row">
                <div className="col-lg-4 my-3">
                    <div className="box">
                        <h5>Application Modernization</h5>
                        <p>Our software development services use modern technologies to update legacy applications, improving security, performance, and alignment with your business goals, reducing technical debt, and staying competitive.</p>
                    </div>
                </div>
                <div className="col-lg-4 my-3">
                    <div className="box">
                        <h5>Custom CRM Development Services</h5>
                        <p>Transform your customer relationship management with our Custom CRM development services, covering design, security, scalability, integration, and ongoing support tailored to your business.</p>
                    </div>
                </div>
                <div className="col-lg-4 my-3">
                    <div className="box">
                        <h5>Agile Application Development</h5>
                        <p>Our agile approach to software development ensures fast turnaround, adaptability, and top-notch solutions. Through collaboration, iterative development, and rapid prototyping, we prioritize delivering working software iteratively, responding flexibly to change and enhancing user outcomes.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 my-3">
                    <div className="box">
                        <h5>Software Migration and Integration Services</h5>
                        <p>We understand your goals and work with your vision to enhance your system's capabilities while meeting compliance standards. Our software development expertise includes migration and integrating third-party services to modernize your infrastructure and legacy code.</p>
                    </div>
                </div>
                <div className="col-lg-4 my-3">
                    <div className="box">
                        <h5>Software Product Development Services</h5>
                        <p>Elevate your software product's journey with our skilled developers, guiding it from inception to maintenance. Partner with our experienced software development company known for robust roadmap strategies and risk assessment expertise, ensuring a competitive edge in the market.</p>
                    </div>
                </div>
                <div className="col-lg-4 my-3">
                    <div className="box">
                        <h5>API Development Services </h5>
                        <p>Tap into our scalable software development services for powerful APIs that streamline connectivity and boost application capabilities. Our full-cycle approach ensures seamless integration, empowering your software with tailored APIs for specific business needs.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 my-3">
                    <div className="box">
                        <h5>Software Support and Maintenance</h5>
                        <p>We're available 24/7 so you can develop without interruptions, avoiding downtime for support and maintenance.</p>
                    </div>
                </div>
                <div className="col-lg-4  my-3">
                    <div className="box">
                        <h5>Software Consulting Services</h5>
                        <p>Unlock the potential of your business with our seasoned software consultants, offering valuable insights and expert guidance. We analyze your unique business needs, understand your vision, and craft tailored software solutions for growth, efficiency, and profitability.    </p>
                    </div>
                </div>
                <div className="col-lg-4  my-3">
                    <div className="box">
                        <h5>Custom Software Development Services</h5>
                        <p>Tailored software solutions for your unique business needs, delivered with agility and scalability. Our agile methodology ensures faster delivery, timely iterations, and seamless integration. Stay ahead with our empowering custom software development services.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Getin/>
    <div className="industry">
        <div className="container">
            <h2>Our Industry-Based Software Capabilities</h2>
            <div className="custom-hr">
                <hr />
            </div>
            <h6>We specialize in providing industry-specific software development services tailored to address our clients' unique challenges.</h6>
        </div>
    </div>

    {/* this seaction css mobile.css under */}
    <div className="recruit">
          <div className="container">
            <h2 className='pt-5'>Recruit Mobile App Development Team As per Your Requirement</h2>
            <div className="custom-hr">
                <hr />
            </div>
            <div className="row mt-5">
              <div className="col-lg-4">
                <div className="box">
                  <h6>Premium</h6>
                  <h1>$15</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <center><button>Get Started</button></center>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="box">
                  <h6>Premium</h6>
                  <h1>$15</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <center><button>Get Started</button></center>
                </div>
              </div><div className="col-lg-4">
                <div className="box">
                  <h6>Premium</h6>
                  <h1>$15</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <center><button>Get Started</button></center>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
