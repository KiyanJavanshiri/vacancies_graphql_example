import RootRouter from "@/router";
import "@/styles.css";
import AppContainer from "./layouts/AppContainer";
import Header from "./compositions/Header";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <AppContainer>
          <RootRouter />
        </AppContainer>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
