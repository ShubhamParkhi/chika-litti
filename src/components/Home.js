import React from "react";

function Home() {
  return (
    <div>
      {/* slider section */}
      <section className="slider_section">
        <div
          id="customCarousel1"
          className="carousel slide pointer-event"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="row">
                  <div className="col-md-7 col-lg-6">
                    <div className="detail-box">
                      <h1>Taste Mein Baap!</h1>
                      <p>
                        Chicka Litti brings you the authentic desi taste which
                        we use to get earlier at our villages from our grand
                        mothers hand. With great taste, Chicka Litti offers you
                        a peaceful ambience with soothing music, selfie point
                        and great hygiene. In a nut shell a cafe vibe on street.
                        Do visit the place and gift your taste bud a flavour of
                        lifetime.
                      </p>
                      <br />
                      <div className="btn-box">
                        <a href="/" className="btn1">
                          {" "}
                          Order Now{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end slider section */}
    </div>
  );
}

export default Home;
