import { useState } from "react";
import Head from "next/head";
import fetch from "node-fetch";
import { ToastContainer, toast } from "react-toastify";

import Navbar from "../components/Nav";
import HomeContainer from "../components/HomeContainer";
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";

export default function Home() {
  const [sumary, setSummary] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  async function handleClick(url) {
    if (!url) {
      toast("Please provide a url!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        type: "error",
      });
      return;
    }
    setIsFetching(true);

    try {
      const response = await fetch(`/api/hello?url=${url}`);
      const body = await response.json();
      if (response.status === 400) {
        toast(body.error, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          type: "error",
        });
        setIsFetching(false);
        return;
      }

      setSummary(body.sumary);
      setIsFetching(false);
    } catch (_) {
      toast("Error on request, check your url and try again", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        type: "error",
      });
      setIsFetching(false);
    }
  }

  return (
    <div style={{ height: "100%" }}>
      <Head>
        <title>Summaryze DEV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <HomeContainer />
      <div className="container">
        <SearchBar onClick={handleClick} />
        <Tabs markdown={sumary} isFetching={isFetching} />
      </div>
      <ToastContainer />
    </div>
  );
}
