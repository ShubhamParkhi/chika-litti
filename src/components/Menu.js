import React from "react";

function Menu() {
  return (
    <div>
      <section className="food_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Our Menu</h2>
          </div>
          <br />
          <br />
          <div className="row grid">
            <div className="col-sm-6 col-lg-4 all pizza">
              <div className="box">
                <div>
                  <div className="img-box">
                    <img src="images/f1.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Chicka Akelapan</h5>
                    <p>
                      1 Chicken Normal Piece <br />2 litti
                    </p>
                    <div className="options">
                      <h6>₹70</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 all burger">
              <div className="box">
                <div>
                  <div className="img-box">
                    <img src="images/f2.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Chicka Akelapan Tangri</h5>
                    <p>
                      1 Chicken Tangri Piece <br />2 Litti
                    </p>
                    <div className="options">
                      <h6>₹90</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 all pizza">
              <div className="box">
                <div>
                  <div className="img-box">
                    <img src="images/f3.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Chicka Desi Lover</h5>
                    <p>
                      2 Chicken Normal Piece <br /> 2 Litti
                    </p>
                    <div className="options">
                      <h6>₹120</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 all pasta">
              <div className="box">
                <div>
                  <div className="img-box">
                    <img src="images/f4.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>chika Jodu Ka Gulaam</h5>
                    <p>
                      1 Chicken Normal Piece <br />1 Chicken Tangri Piece <br />
                      2 Litti
                    </p>
                    <div className="options">
                      <h6>₹140</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 all fries">
              <div className="box">
                <div>
                  <div className="img-box">
                    <img src="images/f5.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>chicka Tangri Lover</h5>
                    <p>
                      2 Chicken Tangri Piece <br /> 2 Litti
                      <br />
                      <br />
                    </p>
                    <div className="options">
                      <h6>₹160</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 all pizza">
              <div className="box">
                <div>
                  <div className="img-box">
                    <img src="images/f6.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>chicka Parivarik</h5>
                    <p>
                      4 Chicken Tangri Piece <br /> 4 Litti
                      <br />
                      <br />
                    </p>
                    <div className="options">
                      <h6>₹320</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-box">
          <a href="/">Order Now</a>
        </div>
      </section>
    </div>
  );
}

export default Menu;
