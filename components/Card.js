import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Card = () => {
  return (
    <div class="container d-flex flex-row justify-content-center">
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
    </div>
  );
};

export default Card;
