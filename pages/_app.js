import "../styles/globals.css";
import { DataProvider } from "../store/GlobalState";

function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <div className="container mx-auto my-6">
        <Component {...pageProps} />
      </div>
    </DataProvider>
  );
}

export default MyApp;
