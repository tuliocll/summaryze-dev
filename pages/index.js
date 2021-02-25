import { useState, useEffect } from "react";
import Head from "next/head";

export default function Home() {
  const [counter, setCounter] = useState(30);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);

    if (counter === 0) {
      window.location.href = "https://summaryze-forem.vercel.app/";
    }
  }, [counter]);

  return (
    <div style={{ height: "100%" }}>
      <Head>
        <title>[OLD]Summaryze DEV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <h1>We moved!</h1>
        <span>Summaryze DEV now is Summaryze Forem</span>
        <a href="https://summaryze-forem.vercel.app/">
          Click here and go to the new site (you will be redirected in {counter}
          s)
        </a>
      </div>
    </div>
  );
}
