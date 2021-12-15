import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';

import About from './pages/About';
import Careers from './pages/Careers';
import Events from './pages/Events';
import Products from './pages/Products';
import Support from './pages/Support';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Header />
              <Main />
              <Footer />
            </>
          }
        ></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/careers" element={<Careers />}></Route>
        <Route exact path="/events" element={<Events />}></Route>
        <Route exact path="/products" element={<Products />}></Route>
        <Route exact path="/support" element={<Support />}></Route>
      </Routes>
    </div>
  );
}

export default App;
