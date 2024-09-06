import Footer from "../components/footer/Footer";
import Landing from "./Landing";
import Plan from "./Plan";
import Testimonials from "./Testimonials";


function Home() {
  return (
    <main>
      <Landing/>
      <Testimonials/>
      <Plan/>
      <Footer/>
    </main>
  );
}

export default Home;
