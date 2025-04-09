const Information = () => {
  return (
    <section className="section is-small has-background-white">
      <div className="columns is-vcentered">
        <div className="column">
          <figure className="image">
            <img src="/images/about-01-img.png" />
          </figure>
        </div>
        <div className="column">
          <h2 className="title h2-sm coffee-color mb-5 is-uppercase">
            Nothing brings people together like a good burger
          </h2>
          <p className="subtitle p-md grey-color">
            Porta semper lacus cursus, feugiat primis ultrice a ligula risus
            auctor an tempus feugiat dolor lacinia cubilia curae at integer orci
            congue and metus in mollislorem primis gravida
          </p>
          <div className="level">
            <div className="level-item has-text-centered">
              <div>{/* fastfood icons goes here */}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Information;
