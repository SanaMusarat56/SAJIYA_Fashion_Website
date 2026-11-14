import CartDrawer from "./components/cart/CartDrawer";
import SignupPage from "./components/SignupPage";
import SigninPage from "./components/SigninPage";
import CheckoutPage from "./components/cart/CheckoutPage";
import CartView from "./components/cart/CartView";
import HeroSection from "./components/HeroSection";

import Bridals from "./components/home/Bridals";
import Formals from "./components/home/Formals";
import Menswear from "./components/home/Menswear";
import NewArrivals from "./components/home/newArrivals";
import Pret from "./components/home/Pret";
import ProductGrid from "./components/home/ProductGrid";
import Trends from "./components/home/Trends";
import Unstitched from "./components/home/Unstitched";

import AnnouncementBar from "./components/layout/AnnouncementBar";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";

import { Routes, Route, useLocation } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import ScrollToTop from "./components/ScrollToTop";
import JinanDetails from "./pages/jinanDetails";
import JinanCollections from "./pages/jinanCollections";
import EidPretDetails from "./pages/EidPretDetails";
import EidPretCollections from "./pages/eidPretCollections";
import ZanCollections from "./pages/ZanCollections";
import ZanDetails from "./pages/ZanDetails";
import NargisCollections from "./pages/NargisCollections";
import NargisDetails from "./pages/NargisDetails";
import BridalCollections from "./pages/BridalCollections";
import BridalDetails from "./pages/BridalDetails";
import ParisaCollections from "./pages/ParisaCollections";
import ParisaDetails from "./pages/ParisaDetails";
import Bridal26Collections from "./pages/Bridal26Collections";
import Bridal26Details from "./pages/Bridal26Details";
import ReharNagarCollections from "./pages/ReharNagarCollections";
import ReharNagarDetails from "./pages/ReharNagarDetails";
import NargisFormalCollections from "./pages/NargisFormalsCollections";
import NargisFormalDetail from "./pages/NargisFormalDetail";
import DilrubaFormalCollection from "./pages/DilrubaFormalCollection";
import DilrubaFormalDetail from "./pages/DilrubaFormalDetail";
import MehrabFormalCollections from "./pages/MehrabFormalCollections";
import MehrabFormalDetails from "./pages/MehrabFormalDetails";
import SitarayCollections from "./pages/SitarayCollections";
import SitarayDetails from "./pages/SitarayDetails";
import PretSS26Collections from "./pages/PretSS26Collections";
import PretSS26Details from "./pages/PretSS26Details";
import BarmalaCollections from "./pages/BarmalaCollections";
import BarmalaDetails from "./pages/BarmalaDetails";
import LawnCollections from "./pages/LawnCollections";
import LawnDetails from "./pages/LawnDetails";
import KhaddarCollections from "./pages/KhaddarCollections";
import KhaddarDetails from "./pages/KhaddarDetails";
import FestiveCollections from "./pages/FestiveCollections";
import FestiveDetails from "./pages/FestiveDetails";
import KarandiCollections from "./pages/KarandiCollections";
import KarandiDetails from "./pages/KarandiDetails";
import NargisMenswearCollections from "./pages/NargisMenswearCollections";
import NargisMenswearDetails from "./pages/NargisMenswearDetails";
import PayDolCollections from "./pages/PayDolCollections";
import PayDolDetails from "./pages/PayDolDetails";
import BasicNotBasicCollections from "./pages/BasicNotBasicCollections";
import BasicNotBasicDetails from "./pages/BasicNotBasicDetails";

import About from "./footerPages/About";
import FAQ from "./footerPages/FAQ";
import BrandPolicy from "./footerPages/BrandPolicy";

const NO_CHROME_ROUTES = ["/SignupPage", "/SigninPage", "/CheckoutPage"]
function App() {
  const location = useLocation();
  const hideChrome = NO_CHROME_ROUTES.includes(location.pathname);
  return (
    <>
      <ScrollToTop />
      <CartDrawer />
      {!hideChrome && (
      <>
      <Header />
      <Navbar />
      <AnnouncementBar />
      </>
      )}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <ProductGrid />
              <NewArrivals />
              <Bridals />
              <Formals />
              <Pret />
              <Unstitched />
              <Menswear />
              <Trends />
            </>
          }
        />
        <Route path="/SignupPage" element={<SignupPage/>} />
        <Route path="/SigninPage" element={<SigninPage/>} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/Cart" element={<CartView/>} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/jinan" element={<JinanCollections />} />
        <Route path="/jinan/:id" element={<JinanDetails />} />
        <Route path="/eidPret" element={<EidPretCollections />} />
        <Route path="/eidPret/:id" element={<EidPretDetails />} />
        <Route path="/Zan" element={<ZanCollections />} />
        <Route path="/Zan/:id" element={<ZanDetails />} />
        <Route path="/Nargis" element={<NargisCollections />} />
        <Route path="/Nargis/:id" element={<NargisDetails />} />
        <Route path="/Bridal" element={<BridalCollections />} />
        <Route path="/Bridal/:id" element={<BridalDetails />} />
        <Route path="/Parisa/" element={<ParisaCollections />} />
        <Route path="/Parisa/:id" element={<ParisaDetails />} />
        <Route path="/Bridal26" element={<Bridal26Collections />} />
        <Route path="/Bridal26/:id" element={<Bridal26Details />} />
        <Route path="/ReharNagar" element={<ReharNagarCollections />} />
        <Route path="/ReharNagar/:id" element={<ReharNagarDetails />} />
        <Route path="/NargisFormal" element={<NargisFormalCollections />} />
        <Route path="/NargisFormalDetail/:id" element={<NargisFormalDetail />} />
        <Route path="/DilrubaFormalCollection" element={<DilrubaFormalCollection />} />
        <Route path="/DilrubaFormalDetail/:id" element={<DilrubaFormalDetail />} />
        <Route path="/MehrabFormal" element={<MehrabFormalCollections />} />
        <Route path="/MehrabFormalDetail/:id" element={<MehrabFormalDetails />} />
        <Route path="/SitarayCollections" element={<SitarayCollections/>} />
        <Route path="/SitarayFormalDetail/:id" element={<SitarayDetails/>} />
        <Route path="/PretSS26" element={<PretSS26Collections/>} />
        <Route path="/PretSS26Details/:id" element={<PretSS26Details/>} />
        <Route path="/BarmalaCollections" element={<BarmalaCollections/>} />
        <Route path="/Barmala/:id" element={<BarmalaDetails/>} />
        <Route path="/Lawn" element={<LawnCollections/>} />
        <Route path="/Lawn/:id" element={<LawnDetails/>} />
        <Route path="/Khaddar" element={<KhaddarCollections/>} />
        <Route path="/Khaddar/:id" element={<KhaddarDetails/>} />
        <Route path="/Festive" element={<FestiveCollections/>} />
        <Route path="/Festive/:id" element={<FestiveDetails/>} />
        <Route path="/Karandi" element={<KarandiCollections/>} />
        <Route path="/Karandi/:id" element={<KarandiDetails/>} />
        <Route path="/NargisMenswear" element={<NargisMenswearCollections/>} />
        <Route path="/NargisMenswear/:id" element={<NargisMenswearDetails/>} />
        <Route path="/PayDol" element={<PayDolCollections/>} />
        <Route path="/PayDol/:id" element={<PayDolDetails/>} />
        <Route path="/BasicNotBasic" element={<BasicNotBasicCollections/>} />
        <Route path="/BasicNotBasic/:id" element={<BasicNotBasicDetails/>} />

        <Route path="/About" element={<About/>} />
        <Route path="/FAQ" element={<FAQ/>} />
        <Route path="/BrandPolicy" element={<BrandPolicy/>} />
      </Routes>
      {!hideChrome && <Footer />}

    </>
  );
}

export default App;
