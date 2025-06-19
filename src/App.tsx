// App.tsx
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import VexurexBenefits from "./components/VexurexBenefits";
import { HowItWorks } from "./components/HowItWorks";
import AnimatedLines from "./components/AnimatedLines";
import ContectForm from "./components/ContectForm";
import SocialMediaAndMore from "./components/SocialMediaAndMore";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ✅ Import your wallet components
import MobileWallet from "./screens/MobileWallet";
import DesktopWallet from "./screens/DesktopWallet";
import HardwareWallet from "./screens/HardwareWallet";

// ✅ Component for external redirect to web wallet
const RedirectToWeb = () => {
  useEffect(() => {
    window.open("https://google.com", "_blank"); // <-- update this URL
  }, []);
  return null;
};

const HomePage = () => (
  <>
    <span className="one"></span>
    <span className="two"></span>
    <span className="three"></span>

    <div className="container">
      <h1 className="Vexurex" data-aos="zoom-out">
        <span className="Z">V</span>exurex
      </h1>
    </div>

    <div data-aos="fade-left">
      <div className="discriptionsText">
        <span className="longLine"></span>
        <h5 className="h5">
          ⚡ Vexurex – A Smarter Digital Currency Vexurex is a modern
          cryptocurrency built for speed, simplicity, and sustainability...
        </h5>
      </div>
    </div>

    <div data-aos="zoom-in" className="zBox">
      <div className="v-container">
        <div className="vx-wrapper">
          <span className="v-letter">V</span>
          <span className="x-letter">X</span>
        </div>
      </div>
    </div>

    <div data-aos="zoom-out" className="main-one">
      <VexurexBenefits />
    </div>
    <div data-aos="zoom-out" className="main-two">
      <HowItWorks />
    </div>
    <div className="App">
      <AnimatedLines
        count={40}
        normalSpeed={6}
        fastSpeed={4}
        dotSize={8}
        color="#4facfe"
      />
    </div>

    <div className="contectForm" data-aos="zoom-out">
      <ContectForm />
    </div>
    <div className="socialMedia">
      <SocialMediaAndMore />
    </div>
  </>
);

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/web" element={<RedirectToWeb />} /> {/* External link */}
        <Route path="/mobile" element={<MobileWallet />} />
        <Route path="/desktop" element={<DesktopWallet />} />
        <Route path="/hardware" element={<HardwareWallet />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
