import Header from './components/Header/Header';
import MyRoutes from './Routes';
import Footer from './components/Footer/Footer';

import './App.scss';
import './sass/main.scss'

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
