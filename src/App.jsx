import { useState, Suspense, useEffect, lazy, useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const Collection = lazy(() => import("./pages/Collection"));
const About = lazy(() => import("./pages/About"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Contact = lazy(() => import("./components/Contact"));
import Home from "./pages/Home";

import { Header, Navbar, Carousel, PageLoader, PopupModal } from "./components";
import MobileNav from "./containers/MobileNav";
import "./App.css";

import useToggleCarousel from "./Hooks/useToggleCarousel";
import useToggleSidebar from "./Hooks/useToggleSidebar";
import useSmallScreen from "./Hooks/useSmallScreen";
import { usePopupModal } from "./Hooks/usePopupModal";

export default function App() {
  const { pathname } = useLocation();
  const { showCarousel } = useToggleCarousel();
  const { showSidebar } = useToggleSidebar();
  const [screenSize, setScreenSize] = useState();
  const { setIsSmall, isSmall } = useSmallScreen();
  const { showPopupModal } = usePopupModal();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 1100) {
      setIsSmall(true);
    } else {
      setIsSmall(false);
    }
  }, [screenSize]);

  useEffect(() => {
    function handleScroll(event) {
      const element = document.querySelector("html");

      if (event.deltaX !== 0 && isSmall) {
        return;
      }
      event.preventDefault();

      element.scrollLeft += event.deltaY * 7;
    }

    window.addEventListener("wheel", handleScroll);

    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  useLayoutEffect(() => {
    try {
      setTimeout(() => {
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }, 0);
    } catch (error) {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 0);
    }
  }, [pathname]);

  return (
    <>
      <Helmet>
        <link
          rel="preload"
          as="font"
          href="/src/assets/ClashDisplay-Variable.ttf"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <style>
          {`
            @font-face {
              font-family: "ClashDisplay-Variable";
              src: local("ClashDisplay-Variable"),
                url("/src/assets/ClashDisplay-Variable.ttf") format("truetype-variations");
              font-weight: 400, 500, 600, 800, 900;
              font-style: normal;
            }
          `}
        </style>
      </Helmet>
      <header>
        {pathname !== "/contact" && <Header />}
        {showSidebar && <MobileNav />}
        {showCarousel && <Carousel />}
        {showPopupModal && <PopupModal />}
      </header>
      <div className="sm:max-w-none max-w-screen sm:overflow-visible overflow-hidden">
        <Routes>
          <>
            <Route
              path="/"
              element={
                <Suspense fallback={<PageLoader />}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/collection"
              element={
                <Suspense fallback={<PageLoader />}>
                  <Collection />
                </Suspense>
              }
            />
            <Route
              path="/about"
              element={
                <Suspense fallback={<PageLoader />}>
                  <About />
                </Suspense>
              }
            />
            <Route
              path="/faq"
              element={
                <Suspense fallback={<PageLoader />}>
                  <FAQ />
                </Suspense>
              }
            />
            <Route
              path="/contact"
              element={
                <Suspense fallback={<PageLoader />}>
                  <Contact />
                </Suspense>
              }
            />
          </>
        </Routes>
      </div>
      <footer
        className={`sm:bg-transparent ${
          pathname === "/" && "bg-black"
        } sm:fixed sm:z-[120] bottom-0 sm:inset-x-0`}
      >
        {pathname !== "/contact" && <Navbar />}
      </footer>
    </>
  );
}
