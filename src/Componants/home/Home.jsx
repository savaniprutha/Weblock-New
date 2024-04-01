import React from 'react'
import "./home.css"

export default function Home() {
  return (
    <>
    <div className="container mt-5">
        <div className="row mb-5">
            <div className="col-lg-6 col-md-12">
                <div className="home">
                    <h1>Boost your Business <br />By leveraging <span>AI & ML</span> </h1>
                    <p>The development of full artificial intelligence colud <br /> spell the end of the human race.</p>
                    <button className='mt-3'>Get In Touch</button>
                </div>
            </div>
            <div className="col-lg-6 col-md-12">
                <img src="./image/home/bg.png" alt="" />
            </div>
        </div>
       
    </div>
    <div className="client">
        <div className="container">
            <img className='logo' src="./image/home/logo.png" alt="" />
            <h3>Trusted By Over 148+ Clients Around The World</h3>
        </div>
        <div className="trust">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <a class="umn col-xs-6" id="grayscale"><img className="img" src="./image/home/Untitled-16.jpg"/></a>
                    </div>
                    <div className="col-lg-2">
                        <a class="umn col-xs-6" id="grayscale"><img className="img" src="./image/home/Untitled-12.jpg"/></a>
                    </div>
                    <div className="col-lg-2">
                        <a class="umn col-xs-6" id="grayscale"><img className="img" src="./image/home/Untitled-15.jpg"/></a>
                    </div>
                    <div className="col-lg-2">
                        <a class="umn col-xs-6" id="grayscale"><img className="img" src="./image/home/Untitled-13.jpg"/></a>
                    </div>
                    
                    <div className="col-lg-2">
                        <a class="umn col-xs-6" id="grayscale"><img className="img" src="./image/home/Untitled-20.jpg"/></a>
                    </div>
                    <div className="col-lg-2">
                        <a class="umn col-xs-6" id="grayscale"><img className="img" src="./image/home/Untitled-14.jpg"/></a>
                    </div>                
                </div>
            </div>
        </div>
    </div>
    {/* <div className="all">
        <div className="row">
            <div className="col-lg-6">
            <h2><span>The numbers</span><br /> say it all</h2>

            </div>
        </div>
    </div> */}
    <div class="box">
        <div class="container">
            <img class='logo' src="./image/home/logo.png" alt="" />
            <h3>Technologies We Work With</h3>
            <div class="box-img mt-5">
                <div class="box-1">
                    <img src="./image/home/html-5.png" alt="" />
                </div>
                <div class="box-1">
                    <img src="./image/home/css-3.png" alt="" />
                </div>
                <div class="box-1">
                    <img src="./image/home/javascript.png" alt="" />
                </div>
                <div class="box-1">
                    <img src="./image/home/bootstrap.png" alt="" />
                </div>
                <div class="box-1">
                    <img src="./image/home/react.png" alt="" />
                </div>
                <div class="box-1">
                    <img src="./image/home/Frame.png" alt="" />
                </div>
                <div class="box-1">
                    <img src="./image/home/Flutter 1.png" alt="" />
                </div>
            </div>
            <div class="box-img mt-5">
                <div class="box-1">
                    <img src="./image/home/PHP-logo 1.png" alt="" />
                </div>
                <div class="box-1">
                    <img src="./image/home/mysql-official 1.png" alt="" />
                </div>
                <div class="box-1">
                    <img src="./image/home/nodejs-ar21 1.png" alt="" />
                </div>
                <div class="box-1">
                    <img src="./image/home/java.png" alt="" />
                </div>
                <div class="box-1">
                    <img src="./image/home/csharp.png" alt="" />
                </div>
                <div class="box-1">
                    <img src="./image/home/python.png" alt="" />
                </div>
                <div class="box-1">
                    <img src="./image/home/apple.png" alt="" />
                </div>
            </div>
            <div class="box-img mt-5">
                <div class="box-1">
                    <img src="./image/home/aws.png" alt="" />
                </div>
                <div class="box-1">
                    <img src="./image/home/Vector.png" alt="" />
                </div>
                <div class="box-1">
                    <img src="./image/home/clould.png" alt="" />
                </div>
                <div class="box-1">
                    <img src="./image/home/Go-Daddy.png" alt="" />
                </div>
                <div class="box-1">
                    <img src="./image/home/ibm.png" alt="" />
                </div>
                <div class="box-1">
                    <img src="./image/home/image 57.png" alt="" />
                </div>
                <div class="box-1">
                    <img src="./image/home/hostinger.png" alt="" />
                </div>
            </div>
        </div>
    </div>
    <div className="service">
        <div className="container">
            <div className="container">
                <img className='logo' src="./image/home/logo.png" alt="" />
                <h3>Our Services</h3>
                <div className="row">
                    <div className="col-lg-3 col-md-6 mt-5">
                        <div className="box">
                        <center><img src="./image/home/Frame (1).png" alt="" /></center>
                            <h5>Web Devlopment</h5>
                            <p>After designing, you will get your prototype, which will be sent ahead for the development process for the it.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-5">
                        <div className="box">
                            <center><img className='vector' src="./image/home/Vector (1).png" alt="" /></center>
                            <h5 className='mt-4'>Mobile Application</h5>
                            <p>Development of mobile application/web/blockchain started using latest tools and technologies with transparency.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-5">
                        <div className="box">
                        <center><img src="./image/home/brainstorming (1).png" alt="" /></center>
                            <h5>AI / ML</h5>
                            <p>Our company offers you all support and the team is always ready to answer every query after deployment.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-5">
                        <div className="box">
                        <center><img className='vector' src="./image/home/stock-mobile 1.png" alt="" /></center>
                            <h5>Data Analytics</h5>
                            <p>Development of mobile application/web/blockchain started using latest tools and technologies with transparency.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="process">
        <div className="container">
            <img className='logo' src="./image/home/logo.png" alt="" />
            <h3>Our Development Process</h3>
            <div class="box-img mt-5">
                <div class="box-1">
                    <center><img src="./image/home/SvgjsG1129.png" alt="" /></center>
                </div>
                <div class="box-1">
                    <center><img src="./image/home/SvgjsSvg1145.png" alt="" /></center>
                </div>
                <div class="box-1">
                    <center><img src="./image/home/Frame (2).png" alt="" /></center>
                </div>
                <div class="box-1">
                    <center><img src="./image/home/Frame (3).png" alt="" /></center>
                </div>
                <div class="box-1">
                    <center><img src="./image/home/SvgjsSvg1220.png" alt="" /></center>
                </div>
                
            </div>
        </div>

    </div>
    <div className="indu">
        <div className="container">
        <img class='logo' src="./image/home/logo.png" alt="" />
            <h3>We Serve Industries</h3>
            <div class="box-img mt-5">
                <div class="box-1">
                    <img src="./image/home/html-5.png" alt="" />
                    <h6>Retail, Ecommerce</h6>
                </div>
                <div class="box-1">
                    <img src="./image/home/css-3.png" alt="" />
                    <h6>Education & e-learning</h6>
                </div>
                <div class="box-1">
                    <img src="./image/home/javascript.png" alt="" />
                    <h6>Healthcare & Fitness</h6>
                </div>
                <div class="box-1">
                    <img src="./image/home/bootstrap.png" alt="" />
                    <h6>Logistics & Distribution</h6>
                </div>
                <div class="box-1">
                    <img src="./image/home/react.png" alt="" />
                    <h6>Social Networking</h6>
                </div>
            </div>
        </div>
    </div>

    
    </>
    
  )
}
