import React, { useState } from "react";
import Banner from "../Banner";
import "./software.css";
import Getin from "../Getin";


export default function Software() {
  const [selectedOption, setSelectedOption] = useState("Manufacturing");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
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
                <p>
                  Our software development services use modern technologies to
                  update legacy applications, improving security, performance,
                  and alignment with your business goals, reducing technical
                  debt, and staying competitive.
                </p>
              </div>
            </div>
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>Custom CRM Development Services</h5>
                <p>
                  Transform your customer relationship management with our
                  Custom CRM development services, covering design, security,
                  scalability, integration, and ongoing support tailored to your
                  business.
                </p>
              </div>
            </div>
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>Agile Application Development</h5>
                <p>
                  Our agile approach to software development ensures fast
                  turnaround, adaptability, and top-notch solutions. Through
                  collaboration, iterative development, and rapid prototyping,
                  we prioritize delivering working software iteratively,
                  responding flexibly to change and enhancing user outcomes.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>Software Migration and Integration Services</h5>
                <p>
                  We understand your goals and work with your vision to enhance
                  your system's capabilities while meeting compliance standards.
                  Our software development expertise includes migration and
                  integrating third-party services to modernize your
                  infrastructure and legacy code.
                </p>
              </div>
            </div>
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>Software Product Development Services</h5>
                <p>
                  Elevate your software product's journey with our skilled
                  developers, guiding it from inception to maintenance. Partner
                  with our experienced software development company known for
                  robust roadmap strategies and risk assessment expertise,
                  ensuring a competitive edge in the market.
                </p>
              </div>
            </div>
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>API Development Services </h5>
                <p>
                  Tap into our scalable software development services for
                  powerful APIs that streamline connectivity and boost
                  application capabilities. Our full-cycle approach ensures
                  seamless integration, empowering your software with tailored
                  APIs for specific business needs.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>Software Support and Maintenance</h5>
                <p>
                  We're available 24/7 so you can develop without interruptions,
                  avoiding downtime for support and maintenance.
                </p>
              </div>
            </div>
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>Software Consulting Services</h5>
                <p>
                  Unlock the potential of your business with our seasoned
                  software consultants, offering valuable insights and expert
                  guidance. We analyze your unique business needs, understand
                  your vision, and craft tailored software solutions for growth,
                  efficiency, and profitability.
                </p>
              </div>
            </div>
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>Custom Software Development Services</h5>
                <p>
                  Tailored software solutions for your unique business needs,
                  delivered with agility and scalability. Our agile methodology
                  ensures faster delivery, timely iterations, and seamless
                  integration. Stay ahead with our empowering custom software
                  development services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Getin />
      <div className="industry">
        <div className="container">
          <h2>Our Industry-Based Software Capabilities</h2>
          <div className="custom-hr">
            <hr />
          </div>
          <h6>
            We specialize in providing industry-specific software development
            services tailored to address our clients' unique challenges.
          </h6>

          <div className="bo m-5">
            <div className="row">
              <div className="col-lg-5">
                <div className="menu">
                  <div className={selectedOption === "Manufacturing" ? "active sub" : "sub" } onClick={() => handleOptionClick("Manufacturing")} >
                    <h5>Manufacturing Software Development</h5>
                  </div>
                  <div className={ selectedOption === "Healthcare" ? "active sub" : "sub"} onClick={() => handleOptionClick("Healthcare")} >
                    <h5>Healthcare Management Software Development</h5>
                  </div>
                  <div className={selectedOption === "Banking" ? "active sub" : "sub" } onClick={() => handleOptionClick("Banking")} >
                    <h5>Banking Software Development</h5>
                  </div>
                  <div className={selectedOption === "Retail" ? "active sub" : "sub" } onClick={() => handleOptionClick("Retail")} >
                    <h5>Retail Software Development</h5>
                  </div>
                  <div className={ selectedOption === "Aviation" ? "active sub" : "sub" } onClick={() => handleOptionClick("Aviation")}>
                    <h5>Aviation Software Development</h5>
                  </div>
                  <div className={ selectedOption === "Transportation" ? "active sub" : "sub" } onClick={() => handleOptionClick("Transportation")} >
                    <h5>Transportation and Logistics Software Development</h5>
                  </div>
                  <div className={selectedOption === "Telecommunication" ? "active sub" : "sub"} onClick={() => handleOptionClick("Telecommunication")} >
                    <h5>Telecommunication Software Development</h5>
                  </div>
                  <div className={ selectedOption === "Insurance" ? "active sub" : "sub" } onClick={() => handleOptionClick("Insurance")} >
                    <h5>Insurance Software Development</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <center>
                  <img
                    className="pt-5"
                    src={`./image/software/${selectedOption.toLowerCase()}.png`}
                    alt="image"
                  />
                </center>
                <h3>{`${selectedOption} Software Development`}</h3>
                {selectedOption === "Manufacturing" && (
                  <p>
                    Maximize your manufacturing efficiency with our custom
                    software development services tailored to your needs. Our
                    solutions optimize production planning, inventory
                    management, and supply chain processes, integrating
                    industry-specific manufacturing software. Benefit from
                    real-time analytics for enhanced efficiency, cost reduction,
                    and improved productivity.
                  </p>
                )}
                {selectedOption === "Healthcare" && (
                  <p>Maximize your manufacturing efficiency with our custom
                  software development services tailored to your needs. Our
                  solutions optimize production planning, inventory
                  management, and supply chain processes, integrating
                  industry-specific manufacturing software. Benefit from
                  real-time analytics for enhanced efficiency, cost reduction,
                  and improved productivity.</p>
                )}
                {selectedOption === "Banking" && (
                  <p>Maximize your manufacturing efficiency with our custom
                  software development services tailored to your needs. Our
                  solutions optimize production planning, inventory
                  management, and supply chain processes, integrating
                  industry-specific manufacturing software. Benefit from
                  real-time analytics for enhanced efficiency, cost reduction,
                  and improved productivity.</p>
                )}
                {selectedOption === "Retail" && (
                  <p>Maximize your manufacturing efficiency with our custom
                  software development services tailored to your needs. Our
                  solutions optimize production planning, inventory
                  management, and supply chain processes, integrating
                  industry-specific manufacturing software. Benefit from
                  real-time analytics for enhanced efficiency, cost reduction,
                  and improved productivity.</p>
                )}
                {selectedOption === "Aviation" && (
                  <p>Content for Aviation Software Development.</p>
                )}
                {selectedOption === "Transportation" && (
                  <p>Content for Transport Software Development.</p>
                )}
                {selectedOption === "Telecommunication" && (
                  <p>Content for Tele Software Development.</p>
                )}
                {selectedOption === "Insurance" && (
                  <p>Content for Insurance Software Development.</p>
                )}
              </div>
            </div>
          </div>
         
        </div>
      </div>

      {/* this seaction css mobile.css under */}
      <div className="recruit">
        <div className="container">
          <h2 className="pt-5">
            Recruit Mobile App Development Team As per Your Requirement
          </h2>
          <div className="custom-hr">
            <hr />
          </div>
          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="box">
                <h6>Premium</h6>
                <h1>$15</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <center>
                  <button>Get Started</button>
                </center>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box">
                <h6>Premium</h6>
                <h1>$15</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <center>
                  <button>Get Started</button>
                </center>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box">
                <h6>Premium</h6>
                <h1>$15</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <center>
                  <button>Get Started</button>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rede mt-5">
        <div className="container">
          <h2>
            Redefining Standards With Our Technology-Based Software Capabilities
          </h2>
          <div className="custom-hr">
            <hr />
          </div>
          <div className="row">
            <div className="col-lg-6 my-3">
              <div className="box">
                <center>
                  <img src="./image/software/ai-ml.png" alt="" />
                </center>
                <h5>AI & ML</h5>
                <p className="mt-3">
                  With our AI expertise, we elevate your Software development
                  experience by automating workflows and implementing cognitive
                  problem-solving capabilities. Our solutions include chatbots,
                  conversational UI, personalized alerts, real-time market trend
                  analysis, healthcare diagnostics, and more, enhancing user
                  experiences and driving innovation.
                </p>
              </div>
            </div>
            <div className="col-lg-6 my-3">
              <div className="box">
                <center>
                  <img src="./image/software/big-data.png" alt="" />
                </center>
                <h5>Big Data</h5>
                <p className="mt-3">
                  Leverage weblock infosoft to harness big data analytics,
                  enabling seamless data gathering, analysis, and actionable
                  insights for informed decision-making and accelerated business
                  growth. Empower your organization with scalable systems that
                  drive data-driven strategies and competitive advantage.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 my-3">
              <div className="box">
                <center>
                  <img src="./image/software/AI.png" alt="" />
                </center>
                <h5>OpenAI</h5>
                <p className="mt-3">
                  Incorporating OpenAI technologies into your software solutions
                  enables you to create intelligent systems that adapt and
                  learn, providing personalized experiences, predictive
                  analytics, and adaptive decision-making capabilities.Hire our
                  Open AI developer.
                </p>
              </div>
            </div>
            <div className="col-lg-6 my-3">
              <div className="box">
                <center>
                  <img src="./image/software/pr-vr.png" alt="" />
                </center>
                <h5>AR & VR</h5>
                <p className="mt-3">
                  Engage your customers with weblock infosoft AR/VR software
                  development services. We specialize in creating immersive
                  virtual environments, interactive simulations, and augmented
                  reality applications that boost engagement, improve training
                  outcomes, and transform customer experiences.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 my-3">
              <div className="box">
                <center>
                  <img src="./image/software/science.png" alt="" />
                </center>
                <h5>Data Science</h5>
                <p className="mt-3">
                  Harness the power of data science with our software
                  development solutions to uncover hidden insights and drive
                  data-driven decisions. Our expert team utilizes advanced
                  algorithms and statistical techniques to extract meaningful
                  patterns from complex data sets, enabling you to optimize
                  operations and fuel innovation.
                </p>
              </div>
            </div>
            <div className="col-lg-6 my-3">
              <div className="box">
                <center>
                  <img src="./image/software/vision.png" alt="" />
                </center>
                <h5>Computer Vision</h5>
                <p className="mt-3">
                  Leverage our computer vision software development expertise to
                  empower your systems with visual intelligence. Our intelligent
                  solutions analyze images and videos for object recognition,
                  facial recognition, and automated visual inspection, driving
                  efficiency and innovation across industries.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 my-3">
              <div className="box">
                <center>
                  <img src="./image/software/nlp.png" alt="" />
                </center>
                <h5>Natural Language Processing</h5>
                <p className="mt-3">
                  Leverage NLP's power to seamlessly understand human language,
                  empowering chatbots with advanced capabilities and real-time
                  sentiment analysis. Develop language-based applications that
                  elevate customer experiences, driving engagement and
                  satisfaction for your business.
                </p>
              </div>
            </div>
            <div className="col-lg-6 my-3">
              <div className="box">
                <center>
                  <img src="./image/software/internet.png" alt="" />
                </center>
                <h5>Internet of Things (IoT)</h5>
                <p className="mt-3">
                  Discover the limitless possibilities of IoT with weblock
                  infosoft expertise in IoT software development. Our innovative
                  solutions seamlessly connect devices, gather valuable data,
                  and empower intelligent decision-making. Experience enhanced
                  efficiency, automation, and a competitive edge in the digital
                  era with weblock infosoft IoT solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rise mt-5">
        <div className="container">
          <h2>
            Raise With Weblock infosoft : Your Preferred Software Development
            Company
          </h2>
          <p>
            With over 5 years of experience, we are a leading web development
            company in the USA, capable of augmenting full-size and mid-size
            teams for your custom web development projects. We provide access to
            the top 1% IT talents with core competencies in custom web app
            development.
          </p>
          <div className="row m-5">
            <div className="col-lg-6">
              <img src="./image/software/image 93.png" alt="" />
            </div>
            <div className="col-lg-6">
              <h5 className="m-4">
                Partnering with us gives you the following benefits
              </h5>
              <div className="chek ms-4 mt-5">
                <img src="./image/webdevlopment/check-mark 1.png" alt="" />
                <h6 className="mb-4"> Custom software development solutions</h6>
              </div>
              <div className="chek ms-4">
                <img src="./image/webdevlopment/check-mark 1.png" alt="" />
                <h6 className="mb-4"> 5+ years of Tech experience</h6>
              </div>
              <div className="chek ms-4">
                <img src="./image/webdevlopment/check-mark 1.png" alt="" />
                <h6 className="mb-4">
                  {" "}
                  Hands-on experience with 30+ technologies
                </h6>
              </div>
              <div className="chek ms-4">
                <img src="./image/webdevlopment/check-mark 1.png" alt="" />
                <h6 className="mb-4"> Flexible engagement models</h6>
              </div>
              <div className="chek ms-4">
                <img src="./image/webdevlopment/check-mark 1.png" alt="" />
                <h6 className="mb-4"> Excellent communication skills</h6>
              </div>
              <div className="chek ms-4">
                <img src="./image/webdevlopment/check-mark 1.png" alt="" />
                <h6 className="mb-4"> Easy exit policy</h6>
              </div>
              <button className="mt-3 ms-4">INQUIRE NOW</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
