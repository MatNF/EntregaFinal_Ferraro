import React from "react";
import HeroBanner from "./HeroBanner";
import ItemListContainer from "./ItemListContainer";
import FooterBanner from "./FooterBanner";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="layout">
      <main>
        <HeroBanner />
        <ItemListContainer />
      </main>
      <footer>
        <FooterBanner />
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
