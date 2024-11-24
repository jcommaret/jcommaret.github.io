// Images
import img from '../../assets/img/images';

import './index.scss';

function Blog() {
  return (
      <article className="blog active" data-page="blog">
        <header>
          <h2 className="page-title">Blog</h2>
        </header>
        <section className="blog-posts">
          <ul className="blog-posts-list">
            <li className="blog-post-item">
              <a href="#">
                <figure className="blog-banner-box">
                  <img src={img.blogImage1} alt="Design conferences in 2022" loading="lazy"/>
                </figure>
                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">Design</p>
                    <span className="dot"></span>
                    <time dateTime="2022-02-23">Fab 23, 2022</time>
                  </div>
                  <h3 className="h3 blog-item-title">Design conferences in 2022</h3>
                  <p className="blog-text">
                    Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
                  </p>
                </div>
              </a>
            </li>

            <li className="blog-post-item">
              <a href="#">
                <figure className="blog-banner-box">
                  <img src={img.blogImage2} alt="Best fonts every designer" loading="lazy"/>
                </figure>
                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">Design</p>
                    <span className="dot"></span>
                    <time dateTime="2022-02-23">Fab 23, 2022</time>
                  </div>

                  <h3 className="h3 blog-item-title">Best fonts every designer</h3>

                  <p className="blog-text">
                    Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.
                  </p>

                </div>

              </a>
            </li>

            <li className="blog-post-item">
              <a href="#">

                <figure className="blog-banner-box">
                  <img src={img.blogImage3} alt="Design digest #80" loading="lazy" />
                </figure>

                <div className="blog-content">

                  <div className="blog-meta">
                    <p className="blog-category">Design</p>

                    <span className="dot"></span>

                    <time dateTime="2022-02-23">Fab 23, 2022</time>
                  </div>

                  <h3 className="h3 blog-item-title">Design digest #80</h3>

                  <p className="blog-text">
                    Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.
                  </p>

                </div>

              </a>
            </li>

            <li className="blog-post-item">
              <a href="#">

                <figure className="blog-banner-box">
                  <img src={img.blogImage4} alt="UI interactions of the week" loading="lazy"/>
                </figure>

                <div className="blog-content">

                  <div className="blog-meta">
                    <p className="blog-category">Design</p>

                    <span className="dot"></span>

                    <time dateTime="2022-02-23">Fab 23, 2022</time>
                  </div>

                  <h3 className="h3 blog-item-title">UI interactions of the week</h3>

                  <p className="blog-text">
                    Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.
                  </p>

                </div>

              </a>
            </li>

            <li className="blog-post-item">
              <a href="#">

                <figure className="blog-banner-box">
                  <img src={img.blogImage5} alt="The forgotten art of spacing" loading="lazy" />
                </figure>

                <div className="blog-content">

                  <div className="blog-meta">
                    <p className="blog-category">Design</p>

                    <span className="dot"></span>

                    <time dateTime="2022-02-23">Fab 23, 2022</time>
                  </div>

                  <h3 className="h3 blog-item-title">The forgotten art of spacing</h3>

                  <p className="blog-text">
                    Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>

                </div>

              </a>
            </li>

            <li className="blog-post-item">
              <a href="#">

                <figure className="blog-banner-box">
                  <img src={img.blogImage6} alt="Design digest #79" loading="lazy" />
                </figure>

                <div className="blog-content">

                  <div className="blog-meta">
                    <p className="blog-category">Design</p>

                    <span className="dot"></span>

                    <time dateTime="2022-02-23">Fab 23, 2022</time>
                  </div>
                  <h3 className="h3 blog-item-title">Design digest #79</h3>
                  <p className="blog-text">
                    Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </section>
      </article>
    );
}
export default Blog;
