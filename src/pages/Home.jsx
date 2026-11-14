import { useState, useEffect } from "react";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import AnnouncementBar from "../components/layout/AnnouncementBar";

function Home() {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handlescroll = () => {
      if (window.scrollY > 88) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handlescroll);
    return () => {
      window.removeEventListener("scroll", handlescroll);
    };
  }, []);
  return (
    <>
      {!sticky && (
        <>
          <Header />
          <AnnouncementBar />
        </>
      )}
      <div className={sticky ? "fixed top-0 left-0 w-full z-999" : ""}>
        <Navbar />
      </div>
    </>
  );
}
export default Home;
