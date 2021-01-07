import Head from "next/head";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import styles from "../styles/Home.module.css";
import MainImg from "../components/MainImg";
import MainPolicy from "../components/MainPolicy";
import FeatureImg from "../components/FeatureImg";
import Search from "../components/Search";
import BestSeller from '../components/BestSeller'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        ></link>
        <script src="https://kit.fontawesome.com/8fbfa5c187.js"></script>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js"></script>
      </Head>
      <div className="mb-5">
        <Navbar />
        <MainImg />
      </div>
      <div className="p-5">
        {/* <Carousel /> */}

        <Card />
      </div>
      <div className="p-5">
        <BestSeller />
      </div>
      <div className="p-5">
        <FeatureImg />
      </div>
      <div className="p-5">
        <MainPolicy />
      </div>
      <div className="p-5">
        <Search />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
