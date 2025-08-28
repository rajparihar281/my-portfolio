import Header from "./components/header";
import Footer from "./components/footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
export default function Home() {
  return (
    <div>
      <Header /> {/* Use the Header component */}
      <Hero /> {/* 2. Use the Hero component */}
      <Projects />
      <Footer /> {/* Use the Footer component */}
    </div>
  );
}
