import Link from "next/link";
import Image from "next/image";
import styles from '../styles/pageSale.module.css'

const MainImg = () => {
  return (
    <div className= "position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
      <div className='col-md-5 p-lg-5 mx-auto my-5'>
        <h1 className="display-4 font-weight-normal">Hot Sale!</h1>
        <p className="lead font-weight-normal">Lorem ipsum lorem</p>
        <Link href="#">
          <a className="btn btn-outline-secondary">Shop Now</a>
        </Link>
      </div>
      {/* <div className="  col-md-5 p-lg-5 mx-auto my-5"></div> */}
    </div>
  );
};
export default MainImg;

