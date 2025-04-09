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
            <div className="card">
              <div className="card-image">
                <figure className="image">
                  <img src="/images/menu/burger-11.jpg" alt="Crispy Chicken" />
                </figure>
              </div>
            </div>
          </div>
          <div className="column is-one-quarter">
            <div className="card">
              <div className="card-image">
                <figure className="image">
                  <img src="/images/menu/burger-12.jpg" alt="ultimate Bacon" />
                </figure>
              </div>
            </div>
          </div>
          <div className="column is-one-quarter">
            <div className="card">
              <div className="card-image">
                <figure className="image">
                  <img src="/images/menu/burger-13.jpg" alt="Black Sheep" />
                </figure>
              </div>
            </div>
          </div>
          <div className="column is-one-quarter">
            <div className="card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src="/images/menu/burger-14.jpg"
                    alt="Double Burger"
                    className="img-fluid"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
        {/* Second Column Row */}
        <div className="columns is-desktop">
          <div className="column is-one-quarter">
            <div className="card">
              <div className="card-image">
                <figure className="image">
                  <img src="/images/menu/burger-15.jpg" alt="Turkey Burger" />
                </figure>
              </div>
            </div>
          </div>
          <div className="column is-one-quarter">
            <div className="card">
              <div className="card-image">
                <figure className="image">
                  <img src="/images/menu/burger-16.jpg" alt="Smokey House" />
                </figure>
              </div>
            </div>
          </div>
          <div className="column is-one-quarter">
            <div className="card">
              <div className="card-image">
                <figure className="image">
                  <img src="/images/menu/burger-17.jpg" alt="Classic Burger" />
                </figure>
              </div>
            </div>
          </div>
          <div className="column is-one-quarter">
            <div className="card">
              <div className="card-image">
                <figure className="image">
                  <img src="/images/menu/burger-18.jpg" alt="Vegan Burger" />
                </figure>
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
