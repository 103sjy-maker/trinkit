import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedProduct from "@/components/FeaturedProduct";
import Instagram from "@/components/Instagram";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <FeaturedProduct />
      <Instagram />
      <Footer />
    </main>
  );
}
