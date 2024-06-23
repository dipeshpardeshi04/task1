import Footer from "./component/foot";
import Header from "./component/head";
import AddPage from "./component/addpage";
import End from "./component/end";
import Hero from "./component/hero";
import Pages from "./component/pagess";
import Testimonials from "./component/testimonial";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Pages />
      <AddPage />
      <Testimonials />
      <End />
      <Footer />
    </>
  );
}

export default Home;
