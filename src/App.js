import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StoryPage from './components/Pages/StoryPage';
import ShopPage from './components/Pages/ShopPage';
import ContactPage from './components/Pages/ContactPage';
import AccountPage from './components/Pages/AccountPage';
import WishListPage from './components/Pages/WishListPage';
import HomePage from './components/Pages/HomePage';
import LoginPage from './components/Pages/LoginPage';
import ListPage from './components/Pages/ListPage';
import { ProductDetailPage } from './components/Pages/ProductDetailPage';
import ReadPage from './components/Pages/ReadPage';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/wishlist" element={<WishListPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/productdetail/:productId" element={<ProductDetailPage />} />
          <Route path='/read' element={<ReadPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
