import React from "react";

function About() {
  return (
    <div>
      <section className="about_section layout_padding">
        <div className="container  ">
          <div className="row">
            <div className="col-md-6 ">
              <div className="img-box">
                <img src="images/about-img.png" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
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
                            <div>
                              <div className="detail-box">
                                <h1>Taste Mein Baap!</h1>
                                <p>
                                  Chicka Litti brings you the authentic desi
                                  taste which we use to get earlier at our
                                  villages from our grand mothers hand. With
                                  great taste, Chicka Litti offers you a
                                  peaceful ambience with soothing music, selfie
                                  point and great hygiene. In a nut shell a cafe
                                  vibe on street. Do visit the place and gift
                                  your taste bud a flavour of lifetime.
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
                      <div className="carousel-item">
                        <div className="container">
                          <div className="row">
                            <div>
                              <div className="detail-box">
                                <h1>Taste Mein Baap!</h1>
                                <p>
                                  We have always found Mumbai's street food to
                                  be bragged in Bollywood Movies, challenging to
                                  it in Patna we have got our own Ganga Path
                                  way, where people from all generations gather
                                  to witness the riverside view of Ganges with
                                  beautiful Sunset and authentic taste of our
                                  Desi Street Food "Chicken Litti" by Chicka
                                  Litti located on the Ganga Pathway at Digha.
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
                      <div className="carousel-item">
                        <div className="container">
                          <div className="row">
                            <div>
                              <div className="detail-box">
                                <h1>Taste Mein Baap!</h1>
                                <p>
                                  Bihar Me Ka Ba, a satirical song released few
                                  times back created lots of buzz questioning
                                  about the developments and growth of Bihar.
                                  Answering to the question we have found a
                                  great startup named Chicka Litti by a group of
                                  young entrepreneurs aiming to convert our
                                  stereotypical taste of Litti to the modern
                                  taste which has the deep rooted values as well
                                  as appealing to new age into the main stream.
                                </p>
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
                    <div className="container">
                      <ol className="carousel-indicators">
                        <li
                          data-target="#customCarousel1"
                          data-slide-to={0}
                          className="active"
                        />
                        <li data-target="#customCarousel1" data-slide-to={1} />
                        <li data-target="#customCarousel1" data-slide-to={2} />
                      </ol>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
