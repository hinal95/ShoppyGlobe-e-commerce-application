import { Link } from 'react-router-dom';


const Header = () => (
  <nav className="header">
    <div className="header__logo">🛒 ShopEasy</div>
    <div className="header__links">
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
    </div>
  </nav>
);

export default Header;
