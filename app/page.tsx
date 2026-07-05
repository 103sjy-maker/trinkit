import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <Hero />
        <ComingSoon />
        <Footer />
      </main>
    </>
  );
}
