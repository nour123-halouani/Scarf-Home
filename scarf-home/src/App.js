import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FixedBar from "./components/headers/fixedBar";
import Navbar from "./components/headers/navBar";
import Home from "./pages/home";
import Promotion from "./pages/promotion";
import Collections from "./pages/collections";
import CollectionItems from "./pages/collectionItems";
import Item from "./pages/item";
import Tutorials from "./pages/tutoriels";
import SignUp from "./pages/signUp";
import Footer from "./components/footer/footer";
function App() {
  return (
    <div>
      <Router>
        <FixedBar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/promotions" element={<Promotion />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/tutoriels" element={<Tutorials />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/collection-items" element={<CollectionItems />} />
          <Route path="/item" element={<Item />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
