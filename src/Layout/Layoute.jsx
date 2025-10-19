import "./Layout.css";

// header and footer
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="main-contents">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
