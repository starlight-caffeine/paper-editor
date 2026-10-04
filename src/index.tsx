import { render } from "preact";
import { LocationProvider, Router, Route } from "preact-iso";
import Landing from "./pages/Landing";
import Editor from "./pages/Project/Editor.js";
import { NotFound } from "./pages/_404.jsx";
import { Header } from "./components/Header.js";
import Research from "./pages/Project/Research";
import "./style.css";
import Proofread from "./pages/Project/Proofread";

export function App() {
  return (
    <LocationProvider>
      <main>
		    <Header/>
        <Router>
          <Route path="/" component={Landing} />
          <Route path="/project/:id/edit" component={Editor} />
          <Route path="/project/:id/research" component={Research} />
          <Route path="/project/:id/proofread" component={Proofread} />
          <Route path="/project/:id/deliver" component={NotFound} />
          <Route default component={NotFound} />
        </Router>
      </main>
    </LocationProvider>
  );
}

render(<App />, document.getElementById("app")!);
