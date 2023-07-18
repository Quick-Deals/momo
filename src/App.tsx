import "./App.css";
import { Contact, Features, Footer, Hero, Main, Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Main>
        <Hero />
        <Features />
        <Contact />
      </Main>

      <Footer />
    </>
  );
}

export default App;
