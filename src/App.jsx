import Header from './components/Header/Header';
import MyRoutes from './Routes';
import Footer from './components/Footer/Footer';

import "../node_modules/modern-normalize/modern-normalize.css";
import './sass/main.scss'
import './App.scss';


function App() {
  return (
    <div className="App">
      <Header />
      <MyRoutes />
      <Footer />
    </div>
  );
}

export default App;
