import "./About.css"
function About() {
  return (
    <>
    <div className="container pb-5">
    <div
      className=" row d-flex justify-content-around mt-5 gap-5"
      style={{ flexWrap: "wrap" }}
    >
      <div className="  col-md-12 col-lg-6 order-md-2 " style={{ flex: 1 }}>
        <h4>About Us</h4>
        <h6>Discover Our Team's Story</h6>
        <p>
          We are a team of passionate individuals who are dedicated to providing
          high-quality products and services to our customers.Our company was
          founded in 2015 with the mission of making people's lives easier and
          more enjoyable.Since then,we have been working hard to develop
          innovative slutions that meet the needs of our customers.
        </p>

        <div className="d-flex justify-content-around">
          <div className="bg-dark rounded-circle d-flex align-items-center justify-content-center icons size ">
            <i class="fa-brands fa-facebook-f text-white"></i>
          </div>
          <div className="bg-dark rounded-circle d-flex align-items-center justify-content-center icons size">
            <i class="fa-brands fa-instagram text-white"></i>
          </div>
          <div className="bg-dark rounded-circle d-flex align-items-center justify-content-center icons size">
            <i class="fa-brands fa-twitter text-white"></i>
          </div>
          <div className="bg-dark rounded-circle d-flex align-items-center justify-content-center icons size">
            <i class="fa-brands fa-pinterest text-white"></i>
          </div>
          <div className="bg-dark rounded-circle d-flex align-items-center justify-content-center  icons size">
            <i class="fa-brands fa-google text-white"></i>
          </div>
          <div className="bg-dark rounded-circle d-flex align-items-center justify-content-center  icons size">
            <i class="fa-brands fa-youtube text-white"></i>
          </div>
        </div>
        <p className="mt-3"><strong>Thank you for choosing Cozy-Corner!</strong></p>
        <a className="btn btn-dark learn-more mt-3">LEARN MORE</a>
      </div>
      <div
        className="col-md-12 col-lg-6  image d-flex align-items-center order-lg-2  "
        style={{ flex: 1, overflow: "hidden" }}
      >
        <img className="img-fluid"
          src={"https://static.vecteezy.com/system/resources/previews/008/247/823/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-search-vector.jpg"
          }
          width={450}
        ></img>
      </div>
    </div>
    

     </div>
    </>
  )
}

export default About;
