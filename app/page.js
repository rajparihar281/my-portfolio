import Header from "./components/header";
import Footer from "./components/footer";
export default function Home() {
  return (
    <div>
      <Header /> {/* Use the Header component */}
      <main>
        <h2>Welcome!</h2>
        <p>This is the main section of my portfolio.</p>
      </main>
      <Footer /> {/* Use the Footer component */}
    </div>
  );
}
