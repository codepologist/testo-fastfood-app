import { Navigation } from ".";

const Home = () => {
  return (
    <section className="hero is-fullheight">
      {/* Hero head: will stick at the top */}
      <div className="hero-head">
        <Navigation />
      </div>
      {/* Hero content: will be in the middle */}
      <div className="hero-body">
        <div className="container" style={{ maxWidth: "60%" }}>
          <h1 className="title is-size-1-mobile has-text-weight-bold is-family-monospace title-message has-text-centered">
            Good Time, Great Taste!
          </h1>
          <p className="subtitle has-text-weight-normal has-text-white has-text-centered">
            Enjoy the food you love{" "}
            <span className="is-size-3 has-text-weight-semibold is-uppercase yellow-color">
              from $1.99
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
