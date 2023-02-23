import React from "react";
import HeroBanner from "./HeroBanner";
import ItemListContainer from "./ItemListContainer";
import FooterBanner from "./FooterBanner";
import Footer from "./Footer";
import NewCard from "./NewCard";

const Layout = () => {
  return (
    <div className="layout">
      <main>
        <HeroBanner />
        <ItemListContainer />
        {/* <NewCard/> */}
      </main>
      <footer>
        <FooterBanner />
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
