import Head from "next/head";
import Navbar from "../components/Navbar";

const FeedPage = () => {
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
      <div>
        <Navbar />
      </div>
      <div className="p-5"></div>
    </div>
  );
};

export default FeedPage;
