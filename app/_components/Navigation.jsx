import { ShoppingBagIcon } from "@heroicons/react/24/solid";

const Navigation = () => {
  return (
    <nav className="navbar is-spaced is-transparent">
      <div className="navbar-brand">
        <a className="navbar-item">
          <img src="/images/testo-logo.png" alt="Testo Logo" />
        </a>
        <span className="navbar-burger" data-target="navbarMenuHeroA">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div id="navbarMenuHeroA" className="navbar-menu">
        <div className="navbar-end is-family-secondary is-uppercase has-text-weight-medium is-size-5">
          <a className="navbar-item has-text-white">About</a>
          <a className="navbar-item has-text-white">Our Menu</a>
          <a className="navbar-item has-text-white">Shop</a>
          <a className="navbar-item has-text-white">Blog</a>
          <a className="navbar-item has-text-white">Contact</a>
          <a className="navbar-item">
            <span>789-654-3210</span>
          </a>
          <a className="navbar-item has-text-white">
            <ShoppingBagIcon className="icon is-medium" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
