import SubBanner from "../components/Otherban";

function Contact() {
  return (
    <>
   <SubBanner name="Contact Us" page=" Contact" />
    <section className="all-sec-p">
      <div className="container">
        <div className="row">
            <div className="col-md-6 align-content-center">
              <p className="section-title mb-2">● Book Your Table</p>
              <h1 className="sec-head">SECURE YOUR SPOT AND <br /> SAVOR A GOURMET <span> EXPERIENCE</span></h1>
              <div className="text-white reserve-timing">
                <h6>Our Timings</h6>
                <div>
                <div>
                <p>Mon-Thu</p>
                <p>Fri-Sat</p>
                <p>Sun</p>
              </div>
              <div>
                <p>11:00 AM - 9:30 PM</p>
                <p>9:00 AM - 10:00 PM</p>
                <p>Closed</p>
              </div>
              </div>
              
              </div>
              

            </div>
            <div className="col-md-6">
              <div className="reserve-form">
                <form action="#" method="post">
                  <label htmlFor="res-name">Your Name</label>
                  <input type="text" name="res-name" />
                  <div className="row mt-4">
                    <div className="col-md-6">
                      <label htmlFor="res-email">Email Address</label>
                      <input type="email" name="res-email" />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="res-phone">Phone Number</label>
                      <input type="tel" name="res-phone"/>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-md-4">
                      <label htmlFor="res-date">Date</label>
                      <input type="date" name="res-date" />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="res-time">Time</label>
                      <input type="time" name="res-time" />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="res-person">No. of Persons</label>
                      <input type="number" name="res-person"/>
                    </div>
                  </div>
                  <button type="submit" className="order-btn btn-black mt-4">Reserve Now →</button>
                </form>
              </div>
            </div>
          </div>
      </div>
    </section>
    <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12613.729797458318!2d-122.42324155608372!3d37.7799039917192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1756127156327!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
    </>
  );
}

export default Contact;