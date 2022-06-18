import Header from "./components/Header/Header";
import MyRoutes from "./Routes";
import Footer from "./components/Footer/Footer";

import useLocalStorage from "use-local-storage";

import "../node_modules/modern-normalize/modern-normalize.css";
import "./sass/main.scss";
import "./App.scss";

const App = () => {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  const switchTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };


  return (
    <div className="App" data-theme={theme}>
      <Header switchTheme={switchTheme} />
      <MyRoutes />
      <Footer />
    </div>
  );
};

export default App;
