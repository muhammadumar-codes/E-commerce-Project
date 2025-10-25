import { Route, Routes } from "react-router-dom";
// pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/contact/contact";
import NotFound from "./pages/NotFound/NotFound";
import CartContextProvider from "./context/CartContext";
import Cart from "./pages/Cart/Cart";
//Layout
import Layout from "./Layout/Layoute";


export default function App() {
  return (
    <>

<CartContextProvider>

      <Routes>
        <Route  element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Cart" element={<Cart />} />

        </Route>
          <Route path="*" element={<NotFound />} />
      </Routes>
</CartContextProvider>


    </>
  );
}

