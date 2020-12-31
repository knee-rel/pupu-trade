import Link from 'next/link'

const Footer = () => {
  return (
    <div className="container py-3">
      <section className="footer-top padding-y">
        <div className="row">
          <div className="col-md col-6">
            <h6>Information</h6>
            <ul className="list-unstyled">
              <Link href='/about-us'>
                <li>
                  <a>About Us</a>
                </li>
              </Link>
              <Link href='/information'>
                <li>
                  <a>Information</a>
                </li>
              </Link>
              <Link href='/privacy'>
                <li>
                  <a>Privacy</a>
                </li>
              </Link>
              <Link href='/terms-conditions'>
                <li>
                  <a>Terms and Conditions</a>
                </li>
              </Link>
            </ul>
          </div>

          <div className="col-md col-6">
            <h6>Service</h6>
            <ul className="list-unstyled">
              <li>
                <a>Nike</a>
              </li>
              <li>
                <a>Adidas</a>
              </li>
              <li>
                <a>Adidas</a>
              </li>
              <li>
                <a>Adidas</a>
              </li>
            </ul>
          </div>
          <div className="col-md col-6">
            <h6>My Account</h6>
            <ul className="list-unstyled">
              <li>
                <a>Nike</a>
              </li>
              <li>
                <a>Adidas</a>
              </li>
              <li>
                <a>Adidas</a>
              </li>
              <li>
                <a>Adidas</a>
              </li>
            </ul>
          </div>
          <div className="col-md col-6">
            <h6>Our Offers</h6>
            <ul className="list-unstyled">
              <li>
                <a>Nike</a>
              </li>
              <li>
                <a>Adidas</a>
              </li>
              <li>
                <a>Adidas</a>
              </li>
              <li>
                <a>Adidas</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="footer-bottom row">
        <div className="col-md-2">
          <p className="text-muted">© 2020 Trade</p>
        </div>
        <div className="col-md-2 text-md-right text-muted">
          <i className="fab fa-lg fa-cc-visa"></i>
          <i className="fab fa-lg fa-cc-paypal"></i>
          <i className="fab fa-lg fa-cc-mastercard"></i>
        </div>
      </section>
    </div>
  );
};

export default Footer;
