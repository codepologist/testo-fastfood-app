const Footer = () => {
  return (
    <footer className="footer has-background-white">
      <div className="container has-text-centered has-text-black">
        <div className="columns">
          <div className="column">
            <figure className="image footer-logo mb-4">
              <img src="/images/testo-logo.png" alt="Testo Logo" />
            </figure>
            <p className="title has-text-left is-6">
              &copy; 2025 Testo. All Rights Reserved
            </p>
          </div>
          <div className="column">
            <p className="title p-xl mt-1 mb-0 has-text-left">
              Los Angeles, Carlifornia.
            </p>
            <p className="title p-xl mt-1 mb-5 has-text-left">
              8721 M Central Avenue, CA 90036
            </p>
            <p className="title p-xl mt-0 mb-0 pt-2 has-text-left">
              Email: hello@yourdomain.com
            </p>
            <p className="title p-lg has-text-left">
              Call Now: <span>789-654-3210</span>
            </p>
          </div>
          <div className="column is-narrow">
            <div className="columns is-mobile">
              <div className="column is-narrow">
                <figure className="image is-64x64">
                  <img
                    src="/images/gallery/img-01.jpg"
                    style={{ borderRadius: "4px" }}
                  />
                </figure>
              </div>
              <div className="column is-narrow">
                <figure className="image is-64x64">
                  <img
                    src="/images/gallery/img-02.jpg"
                    style={{ borderRadius: "4px" }}
                  />
                </figure>
              </div>
              <div className="column is-narrow">
                <figure className="image is-64x64">
                  <img
                    src="/images/gallery/img-03.jpg"
                    style={{ borderRadius: "4px" }}
                  />
                </figure>
              </div>
            </div>
            <div className="columns is-mobile">
              <div className="column is-narrow">
                <figure className="image is-64x64">
                  <img
                    src="/images/gallery/img-04.jpg"
                    style={{ borderRadius: "4px" }}
                  />
                </figure>
              </div>
              <div className="column is-narrow">
                <figure className="image is-64x64">
                  <img
                    src="/images/gallery/img-05.jpg"
                    style={{ borderRadius: "4px" }}
                  />
                </figure>
              </div>
              <div className="column is-narrow">
                <figure className="image is-64x64">
                  <img
                    src="/images/gallery/img-06.jpg"
                    style={{ borderRadius: "4px" }}
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
