import { AppProps } from "next/app";
import { Ubuntu } from "next/font/google";
import "../styles/globals.css";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default App;
