import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import CompanyLogos from "../components/sections/CompanyLogos";
import Features from "../components/sections/Features";
import Testimonials from "../components/sections/Testimonials";
import Pricing from "../components/sections/Pricing";
import BlogPosts from "../components/sections/BlogPosts";
import Newsletter from "../components/sections/Newsletter";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <CompanyLogos />
        <Features />
        <Testimonials />
        <Pricing />
        <BlogPosts />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
