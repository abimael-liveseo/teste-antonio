import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import MosaicoPartnar from "./components/MosaicoPartnar.jsx";
import BestService from "./components/BestService.jsx";
import Lista from "./components/Lista.jsx";
import ImagemLista from "./components/ImagemLista.jsx";
import Footer from "./components/footer/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="flex w-full flex-col justify-center items-center m-auto">
      <App />
      <div className="flex relative top-3 w-4/5 mx-auto mt-7">
        <Header />
      </div>
      <div className="w-full h-[59.75rem] bg-section-hero">
        <Hero />
      </div>
      <div className="flex justify-center w-4/5 h-44">
        <MosaicoPartnar />
      </div>
      <div className="flex">
      <BestService />
      </div>
      <div className="flex flex-row">
        <div className="w-1/4">
        <Lista />
        </div>
        <div className="w-4/5">
          <ImagemLista />
        </div>
      </div>
      <div className="w-full">
      <Footer />
      </div>
    </div>
  </React.StrictMode>
);
