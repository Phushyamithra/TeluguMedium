import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StoryPage from './components/Pages/StoryPage';
import ShopPage from './components/Pages/ShopPage';
import ContactPage from './components/Pages/ContactPage';
import AccountPage from './components/Pages/AccountPage';
import WishListPage from './components/Pages/WishListPage';
import HomePage from './components/Pages/HomePage';

const App=()=> {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/shop" element={<ShopPage/>} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/wishlist" element={<WishListPage/>}/>
          {/* <Route path="/product/:id" element={<Product />} /> 
          <Route path="/per-type/:type" element={<PerType />} />  */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
