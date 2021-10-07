import React from "react";
import Footer from "./Footer";
import Vmc from './inc/Vmc';

function Contact() {
    return(
        <div>

            <section className="py-4 bg-info">
                <div className="container">
                   <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4>Contact</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h4 className="float-end">
                                Home / Contat
                            </h4>
                        </div>
                   </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <h6>Contact form</h6>
                                    <hr />
                                    <div className="form-group">
                                        <label className="mb-1">Full Name</label>
                                        <input type="text" className="form-control" placeholder="Enter Full Name"></input>
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Phone Number</label>
                                        <input type="text" className="form-control" placeholder="Enter Full Name"></input>
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Email Address</label>
                                        <input type="text" className="form-control" placeholder="Enter Full Name"></input>
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Message</label>
                                        <textarea rows="3" className="form-control" placeholder="Type your message..."></textarea>
                                    </div>
                                    <div className="form-group py-3">
                                        <button type="button" className="btn btn-primary shadow w-100">Send Message</button>
                                    </div>
                                </div>

                                <div className="col-md-6 border-start">
                                    <h5 className="main-heading">Address Informations</h5>
                                    <div className="underline"></div>
                                    <p>
                                        <ul>
                                            <li>480 หมู่ 9 ถนนสุขุมวิท</li>
                                            <li>ต.วังกระแจะ อ.เมือง</li>
                                            <li>จ.ตราด 23000</li>
                                            <li>โทรศัพท์: 039-518-105</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our vision, mission and values */}
            <Vmc />

            <Footer />
            
        </div>
    )
}
export default Contact;