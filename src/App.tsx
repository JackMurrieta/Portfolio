import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import JackMain from "./pages/main/main";
import TechStack from "./pages/techStack/techStack";
import ProjectsSection from "./pages/projects/projects";
import About from "./pages/about/about";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <JackMain />
        <TechStack />
        <ProjectsSection />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App;
