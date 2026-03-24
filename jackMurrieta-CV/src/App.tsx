import Header from "./components/header/header";
import JackMain from "./pages/main/main";
import TechStack from "./pages/techStack/techStack";

function App() {
  return (
    <>
      <Header />
      <main>
        <JackMain />
        <TechStack />
      </main>
    </>
  );
}

export default App;
