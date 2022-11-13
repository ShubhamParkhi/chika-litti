import React from "react";
// import "./styles.css";
// import "jquery-nice-select/css/style.css";
import { useEffect, useRef } from "react";
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
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                    />
                  </div>
                  <div>
                    <select
                      ref={selectRef}
                      className="form-control nice-select wide"
                    >
                      <option value selected disabled>
                        How many persons?
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
                <div id="googleMap" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Book;
