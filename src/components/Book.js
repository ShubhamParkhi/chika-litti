import { React, useEffect, useRef } from "react";
import $ from "jquery";
window.jQuery = window.$ = $;
require("jquery-nice-select");

function Book() {
  const selectRef = useRef();

  useEffect(() => {
    $(selectRef.current).niceSelect();
  }, []);

  return (
    <div>
      <section className="book_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Book A Table</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form_container">
                <form>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full Name"
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email ID"
                    />
                  </div>
                  <div>
                    <select
                      ref={selectRef}
                      className="form-control nice-select wide"
                    >
                      <option value selected disabled>
                        How many Guests?
                      </option>
                      <option value>2</option>
                      <option value>3</option>
                      <option value>4</option>
                      <option value>5</option>
                    </select>
                  </div>
                  <div>
                    <input type="date" className="form-control" />
                  </div>
                  <div className="btn_box">
                    <button>Book Now</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <div className="map_container ">
                <iframe
                  id="googleMap"
                  title="chika Litti"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14386.554108135542!2d85.0987259!3d25.6501199!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2f610201b94af497!2sChicka%20Litti!5e0!3m2!1sen!2sin!4v1668529254973!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Book;
