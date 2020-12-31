import Image from "next/image";

const BestSeller = () => {
  return (
    <section className="section-content">
      <div>
        <h1>Best Seller</h1>
      </div>
      <div>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              All
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Bags
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Sneakers
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Belt
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Sunglasses
            </a>
          </li>
        </ul>
      </div>
      <div className="container d-flex flex-row justify-content-center">
        <div className="p-2">
          <div className="card card-deck mb-3 text-center border-0">
            <style jsx>{`
              .card {
                width: 18rem;
              }
            `}</style>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <Image
                src="/shoe1.jpg"
                alt="Picture of shoe1"
                width={500}
                height={300}
              />
              <p className="card-text">Some quick example text</p>
              <a href="#" className="btn btn-primary">
                View Product
              </a>
            </div>
          </div>
        </div>
        <div className="p-2">
          <div className="card card-deck mb-3 text-center border-0">
            <style jsx>{`
              .card {
                width: 18rem;
              }
            `}</style>
            {/* <img src="..." className="card-img-top" alt="..." /> */}
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <Image
                src="/shoe2.jpg"
                alt="Picture of shoe1"
                width={500}
                height={300}
              />
              <p className="card-text">Some quick example text</p>
              <a href="#" className="btn btn-primary">
                View Product
              </a>
            </div>
          </div>
        </div>
        <div className="p-2">
          <div className="card card-deck mb-3 text-center border-0">
            <style jsx>{`
              .card {
                width: 18rem;
              }
            `}</style>
            {/* <img src="..." className="card-img-top" alt="..." /> */}
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <Image
                src="/shoe2.jpg"
                alt="Picture of shoe1"
                width={500}
                height={300}
              />
              <p className="card-text">Some quick example text</p>
              <a href="#" className="btn btn-primary">
                View Product
              </a>
            </div>
          </div>
        </div>

        <div className="p-2">
          <div className="card card-deck mb-3 text-center border-0">
            <style jsx>{`
              .card {
                width: 18rem;
              }
            `}</style>
            {/* <img src="..." className="card-img-top" alt="..." /> */}
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <Image
                src="/shoe2.jpg"
                alt="Picture of shoe1"
                width={500}
                height={300}
              />
              <div className="info-wrap">
                <p className="card-text">Some quick example text</p>
                <div className="rating-wrap">
                  <ul className="rating-stars">
                    <li className="stars-active">
                      <i class="far fa-star"></i>
                      <i class="far fa-star"></i>
                      <i class="far fa-star"></i>
                      <i class="far fa-star"></i>
                      <i class="far fa-star"></i>
                    </li>
                  </ul>
                  <span className="label-rating text-muted">12 Reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
