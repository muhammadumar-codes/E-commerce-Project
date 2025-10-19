import { Route, Routes } from "react-router-dom";
// pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/contact/contact";
import NotFound from "./pages/NotFound/NotFound";

//Layout
import Layout from "./Layout/Layoute";

import CountContextProvider from "./context/count";
export default function App() {
  return (
    <>
    <CountContextProvider>

      <Routes>
        <Route  element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Route>
          <Route path="*" element={<NotFound />} />
      </Routes>
    </CountContextProvider>
    </>
  );
}

