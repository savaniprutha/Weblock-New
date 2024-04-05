import React from 'react'
import './getin.css'

export default function Getin() {
  return (
    <>
    <div className="get-touch">
        <div className="container">
          <h2 className='py-5'>Get In Touch With Best Software <br /> Consulting Company</h2>
          <form action="">
          <div className="row py-5">
            <div className="col-lg-4 mb-3">
              <input
                type="name"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="col-lg-4 mb-3">
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Email Address"
                required
              />
            </div>
            <div className="col-lg-4 mb-3">
              <input
                type="number"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Phone Number"
                required
              />
            </div>
            <div class="mb-3">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder="Message"
                  rows="3"
                  required
                ></textarea>
            </div>
              <center><button className='mb-5'>INQUIRE NOW</button></center>
              <div className="col-lg-4"></div>
              <div className="col-lg-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title"><i class="fa-regular fa-envelope"></i> Info@Weblockinfosoft.com</h5>
                    <div className="custom-hr">
                <hr />
            </div>
                    <p class="card-text">Your success is assured!"</p>
                    <h6>We expedite digital product releases and ensure your success.</h6>
                  </div>
                </div>
              </div>
          </div>
          </form>
        </div>
      </div>
    
    </>
  )
}
