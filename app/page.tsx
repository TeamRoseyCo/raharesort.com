import Hero from "./components/sections/Hero";
import QuickNav from "./components/sections/QuickNav";
import Welcome from "./components/sections/Welcome";
import Rooms from "./components/sections/Rooms";
import Amenities from "./components/sections/Amenities";
import Gallery from "./components/sections/Gallery";
import Cta from "./components/sections/Cta";
import Newsletter from "./components/sections/Newsletter";
import Footer from "./components/sections/Footer";
import ExitIntentPopup from "./components/ExitIntentPopup";

export default function Home() {
  return (
    <main>
      <Hero />
      <QuickNav />
      <Welcome />
      <Rooms />
      <Amenities />
      <Gallery />
      <Cta />
      <Newsletter />
      <Footer />
      <ExitIntentPopup />
    </main>
  );
}
