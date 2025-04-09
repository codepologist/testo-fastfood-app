import { HeartIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

const Menu = () => {
  return (
    <section className="section is-small has-background-white">
      <div className="container has-text-centered mb-6">
        <h2 className="title h2-xl has-text-centered mt-0 mb-2 is-uppercase red-color">
          Explore Our Menu
        </h2>
        <p className="subtitle menu-section-title has-text-centered">
          Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor
          primis libero tempus, blandit a cursus varius magna
        </p>
      </div>
      <div className="container">
        {/* First Column Row */}
        <div className="columns is-desktop">
          <div className="column is-one-quarter">
            <div
              className="card has-background-white"
              style={{
                border: "1px solid #e5e5e5",
                borderRadius: "6px",
              }}
            >
              <div className="card-image">
                <figure className="image">
                  <img src="/images/menu/burger-11.jpg" alt="Crispy Chicken" />
                </figure>
              </div>
              <header className="card-header" style={{ boxShadow: "none" }}>
                <h5 className="card-header-title is-uppercase h5-sm is-family-secondary coffee-color">
                  Crispy Chicken
                </h5>
                <button className="card-header-icon" aria-label="more options">
                  <span className="icon">
                    <HeartIcon className="" />
                  </span>
                </button>
              </header>
              <div className="card-content pt-0 pl-4">
                <div className="content">
                  Chicken breast, chilli sauce, tomatoes, pickles, coleslaw
                </div>
                <div className="content">
                  <div className="columns is-vcentered">
                    <div className="column">
                      <button
                        className="button is-clipped btn-color is-uppercase is-family-secondary yellow-color"
                        style={{
                          fontSize: "1.25rem",
                          lineHeight: 1,
                          fontWeight: 700,
                          letterSpacing: "-0.5px",
                          backgroundColor: "#642f21",
                          borderColor: "transparent",
                        }}
                      >
                        $8.50
                      </button>
                    </div>
                    <div className="column">
                      <button
                        className="button is-small is-family-secondary"
                        style={{
                          fontSize: "0.9rem",
                          color: "#000000",
                          lineHeight: 1,
                          fontWeight: 700,
                          letterSpacing: "-0.5px",
                          backgroundColor: "#f7be27",
                          borderColor: "transparent",
                        }}
                      >
                        <span className="icon">
                          <ShoppingBagIcon className="" />
                        </span>
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-one-quarter">
            <div
              className="card has-background-white"
              style={{
                border: "1px solid #e5e5e5",
                borderRadius: "6px",
              }}
            >
              <div className="card-image">
                <figure className="image">
                  <img src="/images/menu/burger-12.jpg" alt="Crispy Chicken" />
                </figure>
              </div>
              <header className="card-header" style={{ boxShadow: "none" }}>
                <h5 className="card-header-title is-uppercase h5-sm is-family-secondary coffee-color">
                  Ultra Bacon
                </h5>
                <button className="card-header-icon" aria-label="more options">
                  <span className="icon">
                    <HeartIcon className="" />
                  </span>
                </button>
              </header>
              <div className="card-content pt-0 pl-4">
                <div className="content">
                  House beef patty, cheddar cheese, bacon, onion, mustard
                </div>
                <div className="content">
                  <div className="columns is-vcentered">
                    <div className="column">
                      <button
                        className="button is-clipped btn-color is-uppercase is-family-secondary yellow-color"
                        style={{
                          fontSize: "1.25rem",
                          lineHeight: 1,
                          fontWeight: 700,
                          letterSpacing: "-0.5px",
                          backgroundColor: "#642f21",
                          borderColor: "transparent",
                        }}
                      >
                        $9.99
                      </button>
                    </div>
                    <div className="column">
                      <button
                        className="button is-small is-family-secondary"
                        style={{
                          fontSize: "0.9rem",
                          color: "#000000",
                          lineHeight: 1,
                          fontWeight: 700,
                          letterSpacing: "-0.5px",
                          backgroundColor: "#f7be27",
                          borderColor: "transparent",
                        }}
                      >
                        <span className="icon">
                          <ShoppingBagIcon className="" />
                        </span>
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-one-quarter">
            <div
              className="card has-background-white"
              style={{
                border: "1px solid #e5e5e5",
                borderRadius: "6px",
              }}
            >
              <div className="card-image">
                <figure className="image">
                  <img src="/images/menu/burger-13.jpg" alt="Black Sheep" />
                </figure>
              </div>
              <header className="card-header" style={{ boxShadow: "none" }}>
                <h5 className="card-header-title is-uppercase h5-sm is-family-secondary coffee-color">
                  Black Sheep
                </h5>
                <button className="card-header-icon" aria-label="more options">
                  <span className="icon">
                    <HeartIcon className="" />
                  </span>
                </button>
              </header>
              <div className="card-content pt-0 pl-4">
                <div className="content">
                  American cheese, tomato relish, avocado, lettuce, red onion
                </div>
                <div className="content">
                  <div className="columns is-vcentered">
                    <div className="column">
                      <button
                        className="button is-clipped btn-color is-uppercase is-family-secondary yellow-color"
                        style={{
                          fontSize: "1.25rem",
                          lineHeight: 1,
                          fontWeight: 700,
                          letterSpacing: "-0.5px",
                          backgroundColor: "#642f21",
                          borderColor: "transparent",
                        }}
                      >
                        $8.50
                      </button>
                    </div>
                    <div className="column">
                      <button
                        className="button is-small is-family-secondary"
                        style={{
                          fontSize: "0.9rem",
                          color: "#000000",
                          lineHeight: 1,
                          fontWeight: 700,
                          letterSpacing: "-0.5px",
                          backgroundColor: "#f7be27",
                          borderColor: "transparent",
                        }}
                      >
                        <span className="icon">
                          <ShoppingBagIcon className="" />
                        </span>
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-one-quarter">
            <div
              className="card has-background-white"
              style={{
                border: "1px solid #e5e5e5",
                borderRadius: "6px",
              }}
            >
              <div className="card-image">
                <figure className="image">
                  <img src="/images/menu/burger-14.jpg" alt="Double Burger" />
                </figure>
              </div>
              <header className="card-header" style={{ boxShadow: "none" }}>
                <h5 className="card-header-title is-uppercase h5-sm is-family-secondary coffee-color">
                  Double Burger
                </h5>
                <button className="card-header-icon" aria-label="more options">
                  <span className="icon">
                    <HeartIcon className="" />
                  </span>
                </button>
              </header>
              <div className="card-content pt-0 pl-4">
                <div className="content">
                  2 beef patties, cheddar cheese, mustard, pickles, tomatoes
                </div>
                <div className="content">
                  <div className="columns is-vcentered">
                    <div className="column">
                      <button
                        className="button is-clipped btn-color is-uppercase is-family-secondary yellow-color"
                        style={{
                          fontSize: "1.25rem",
                          lineHeight: 1,
                          fontWeight: 700,
                          letterSpacing: "-0.5px",
                          backgroundColor: "#642f21",
                          borderColor: "transparent",
                        }}
                      >
                        $10.35
                      </button>
                    </div>
                    <div className="column">
                      <button
                        className="button is-small is-family-secondary"
                        style={{
                          fontSize: "0.9rem",
                          color: "#000000",
                          lineHeight: 1,
                          fontWeight: 700,
                          letterSpacing: "-0.5px",
                          backgroundColor: "#f7be27",
                          borderColor: "transparent",
                        }}
                      >
                        <span className="icon">
                          <ShoppingBagIcon className="" />
                        </span>
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Second Column Row */}
        <div className="columns is-desktop">
          <div className="column is-one-quarter">
            <div
              className="card has-background-white"
              style={{
                border: "1px solid #e5e5e5",
                borderRadius: "6px",
              }}
            >
              <div className="card-image">
                <figure className="image">
                  <img src="/images/menu/burger-15.jpg" alt="Turkey Burger" />
                </figure>
              </div>
              <header className="card-header" style={{ boxShadow: "none" }}>
                <h5 className="card-header-title is-uppercase h5-sm is-family-secondary coffee-color">
                  Turkey Burger
                </h5>
                <button className="card-header-icon" aria-label="more options">
                  <span className="icon">
                    <HeartIcon className="" />
                  </span>
                </button>
              </header>
              <div className="card-content pt-0 pl-4">
                <div className="content">
                  Turkey, cheddar cheese, onion, lettuce, tomatoes, pickles
                </div>
                <div className="content">
                  <div className="columns is-vcentered">
                    <div className="column">
                      <button
                        className="button is-clipped btn-color is-uppercase is-family-secondary yellow-color"
                        style={{
                          fontSize: "1.25rem",
                          lineHeight: 1,
                          fontWeight: 700,
                          letterSpacing: "-0.5px",
                          backgroundColor: "#642f21",
                          borderColor: "transparent",
                        }}
                      >
                        $8.95
                      </button>
                    </div>
                    <div className="column">
                      <button
                        className="button is-small is-family-secondary"
                        style={{
                          fontSize: "0.9rem",
                          color: "#000000",
                          lineHeight: 1,
                          fontWeight: 700,
                          letterSpacing: "-0.5px",
                          backgroundColor: "#f7be27",
                          borderColor: "transparent",
                        }}
                      >
                        <span className="icon">
                          <ShoppingBagIcon className="" />
                        </span>
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-one-quarter">
            <div
              className="card has-background-white"
              style={{
                border: "1px solid #e5e5e5",
                borderRadius: "6px",
              }}
            >
              <div className="card-image">
                <figure className="image">
                  <img src="/images/menu/burger-16.jpg" alt="Smokey House" />
                </figure>
              </div>
              <header className="card-header" style={{ boxShadow: "none" }}>
                <h5 className="card-header-title is-uppercase h5-sm is-family-secondary coffee-color">
                  Smokey House
                </h5>
                <button className="card-header-icon" aria-label="more options">
                  <span className="icon">
                    <HeartIcon className="" />
                  </span>
                </button>
              </header>
              <div className="card-content pt-0 pl-4">
                <div className="content">
                  Beef patty, cheddar cheese, onion, lettuce, tomatoes, pickles
                </div>
                <div className="content">
                  <div className="columns is-vcentered">
                    <div className="column">
                      <button
                        className="button is-clipped btn-color is-uppercase is-family-secondary yellow-color"
                        style={{
                          fontSize: "1.25rem",
                          lineHeight: 1,
                          fontWeight: 700,
                          letterSpacing: "-0.5px",
                          backgroundColor: "#642f21",
                          borderColor: "transparent",
                        }}
                      >
                        $9.50
                      </button>
                    </div>
                    <div className="column">
                      <button
                        className="button is-small is-family-secondary"
                        style={{
                          fontSize: "0.9rem",
                          color: "#000000",
                          lineHeight: 1,
                          fontWeight: 700,
                          letterSpacing: "-0.5px",
                          backgroundColor: "#f7be27",
                          borderColor: "transparent",
                        }}
                      >
                        <span className="icon">
                          <ShoppingBagIcon className="" />
                        </span>
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-one-quarter">
            <div
              className="card has-background-white"
              style={{
                border: "1px solid #e5e5e5",
                borderRadius: "6px",
              }}
            >
              <div className="card-image">
                <figure className="image">
                  <img src="/images/menu/burger-17.jpg" alt="Classic Burger" />
                </figure>
              </div>
              <header className="card-header" style={{ boxShadow: "none" }}>
                <h5 className="card-header-title is-uppercase h5-sm is-family-secondary coffee-color">
                  Classic Burger
                </h5>
                <button className="card-header-icon" aria-label="more options">
                  <span className="icon">
                    <HeartIcon className="" />
                  </span>
                </button>
              </header>
              <div className="card-content pt-0 pl-4">
                <div className="content">
                  Beef, cheddar cheese, ketchup, mustard, pickles, onion
                </div>
                <div className="content">
                  <div className="columns is-vcentered">
                    <div className="column">
                      <button
                        className="button is-clipped btn-color is-uppercase is-family-secondary yellow-color"
                        style={{
                          fontSize: "1.25rem",
                          lineHeight: 1,
                          fontWeight: 700,
                          letterSpacing: "-0.5px",
                          backgroundColor: "#642f21",
                          borderColor: "transparent",
                        }}
                      >
                        $7.95
                      </button>
                    </div>
                    <div className="column">
                      <button
                        className="button is-small is-family-secondary"
                        style={{
                          fontSize: "0.9rem",
                          color: "#000000",
                          lineHeight: 1,
                          fontWeight: 700,
                          letterSpacing: "-0.5px",
                          backgroundColor: "#f7be27",
                          borderColor: "transparent",
                        }}
                      >
                        <span className="icon">
                          <ShoppingBagIcon className="" />
                        </span>
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-one-quarter">
            <div
              className="card has-background-white"
              style={{
                border: "1px solid #e5e5e5",
                borderRadius: "6px",
              }}
            >
              <div className="card-image">
                <figure className="image">
                  <img src="/images/menu/burger-18.jpg" alt="Vegan Burger" />
                </figure>
              </div>
              <header className="card-header" style={{ boxShadow: "none" }}>
                <h5 className="card-header-title is-uppercase h5-sm is-family-secondary coffee-color">
                  Vergan Burger
                </h5>
                <button className="card-header-icon" aria-label="more options">
                  <span className="icon">
                    <HeartIcon className="" />
                  </span>
                </button>
              </header>
              <div className="card-content pt-0 pl-4">
                <div className="content">
                  Mushroom patty, vegan cheese, lettuce, tomatoes, avocado
                </div>
                <div className="content">
                  <div className="columns is-vcentered">
                    <div className="column">
                      <button
                        className="button is-clipped btn-color is-uppercase is-family-secondary yellow-color"
                        style={{
                          fontSize: "1.25rem",
                          lineHeight: 1,
                          fontWeight: 700,
                          letterSpacing: "-0.5px",
                          backgroundColor: "#642f21",
                          borderColor: "transparent",
                        }}
                      >
                        $8.95
                      </button>
                    </div>
                    <div className="column">
                      <button
                        className="button is-small is-family-secondary"
                        style={{
                          fontSize: "0.9rem",
                          color: "#000000",
                          lineHeight: 1,
                          fontWeight: 700,
                          letterSpacing: "-0.5px",
                          backgroundColor: "#f7be27",
                          borderColor: "transparent",
                        }}
                      >
                        <span className="icon">
                          <ShoppingBagIcon className="" />
                        </span>
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of Second Column Row */}
      </div>
    </section>
  );
};

export default Menu;
