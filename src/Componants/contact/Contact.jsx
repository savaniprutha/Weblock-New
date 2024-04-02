import React from 'react'
import './contact.css'
import Header from '../header/Header'
import Footer from '../footer/Footer'

export default function Contact() {
  return (
    <>
    <Header />
        <div className="contact">
            <div className="bg">
                <h2>Contact US</h2>
                <p>get in touch and let us know we can help</p>
            </div>
        </div>
    <Footer/>
    </>
  )
}
