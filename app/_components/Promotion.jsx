import Image from "next/image";

const Promotion = () => {
  return (
    <section className="section is-medium has-background-white">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column is-5">
            <div
              id="promo-2-1"
              className="box has-background-light has-text-right"
            >
              <div className="content" style={{ padding: "80px 35px 50px" }}>
                <h4
                  className="title is-uppercase is-4 mb-0"
                  style={{ color: "#6f5e4d" }}
                >
                  Get Your Free
                </h4>
                <h4
                  className="title is-uppercase is-2"
                  style={{ color: "#6f5e4d" }}
                >
                  Cheese Fries
                </h4>
                <button className="button is-radiusless btn-red has-text-white is-uppercase">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div className="column is-7">
            <div
              id="promo-2-2"
              className="box has-background-light has-text-right"
            >
              <div className="content" style={{ padding: "80px 35px 50px" }}>
                <h4
                  className="title is-uppercase is-4 mb-0"
                  style={{ color: "#6f5e4d" }}
                >
                  Crispy Chicken
                </h4>
                <h4
                  className="title is-uppercase is-2"
                  style={{ color: "#6f5e4d" }}
                >
                  Burger Is Back!
                </h4>
                <button className="button is-radiusless btn-red has-text-white is-uppercase">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
