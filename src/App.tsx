import Header from "./components/header/header";
import JackMain from "./pages/main/main";
import ProjectsSection from "./pages/projects/projects";
import TechStack from "./pages/techStack/techStack";

function App() {
  return (
    <>
      <Header />
      <main>
        <JackMain />
        <TechStack />
        <ProjectsSection/>
      </main>
    </>
  );
}

export default App;
