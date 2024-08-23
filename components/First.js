/**@format */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles.module.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

function first({className}) {
  return (
    <div className={className} style={{}}>
        <div className={styles["index-page"]}>
        
    <main className={styles.main}>
    <header id="header" className={`${styles.header} d-flex align-items-center fixed-top`}>
    <div className={`container-fluid container-xl position-relative d-flex align-items-center justify-content-between`}>

      <a href="index.html" className={`${styles.logo} d-flex align-items-center`}>
         {/* Uncomment the line below if you also wish to use an image logo  */}
         {/* <img src="assets/img/logo.png" alt=""> */}
        <h1 className={`sitename`}>Selecao</h1>
      </a>

      <nav id="navmenu" className={styles.navmenu}>
        <ul>
          <li><a href="#hero" className={styles.active}>Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li className={styles.dropdown}><a href="#"><span>Dropdown</span> <i className={`bi bi-chevron-down toggle-dropdown`}></i></a>
            <ul>
              <li><a href="#">Dropdown 1</a></li>
              <li className={styles.dropdown}><a href="#"><span>Deep Dropdown</span> <i className={`bi bi-chevron-down toggle-dropdown`}></i></a>
                <ul>
                  <li><a href="#">Deep Dropdown 1</a></li>
                  <li><a href="#">Deep Dropdown 2</a></li>
                  <li><a href="#">Deep Dropdown 3</a></li>
                  <li><a href="#">Deep Dropdown 4</a></li>
                  <li><a href="#">Deep Dropdown 5</a></li>
                </ul>
              </li>
              <li><a href="#">Dropdown 2</a></li>
              <li><a href="#">Dropdown 3</a></li>
              <li><a href="#">Dropdown 4</a></li>
            </ul>
          </li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <i className={`${styles["mobile-nav-toggle"]} d-xl-none bi bi-list`}></i>
      </nav>

    </div>
  </header>
  <section id="hero" className={`${styles.hero} ${styles.section} ${styles["dark-background"]}`}>

<div id="hero-carousel" data-bs-interval="5000" className={`container carousel carousel-fade`} data-bs-ride="carousel">

 
  <div className={`carousel-item active`}>
    <div className={styles["carousel-container"]}>
      <h2 className={`animate__animated animate__fadeInDown`}>Welcome to <span>Selecao</span></h2>
      <p className={`animate__animated animate__fadeInUp`}>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
      <a href="#about" className={`${styles["btn-get-started"]} animate__animated animate__fadeInUp scrollto`}>Read More</a>
    </div>
  </div>

  
  <div className={`carousel-item`}>
    <div className={styles["carousel-container"]}>
      <h2 className={`animate__animated animate__fadeInDown`}>Lorem Ipsum Dolor</h2>
      <p className={`animate__animated animate__fadeInUp`}>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
      <a href="#about" className={`${styles["btn-get-started"]} animate__animated animate__fadeInUp scrollto`}>Read More</a>
    </div>
  </div>

  
  <div className={`carousel-item`}>
    <div className={styles["carousel-container"]}>
      <h2 className={`animate__animated animate__fadeInDown`}>Sequi ea ut et est quaerat</h2>
      <p className={`animate__animated animate__fadeInUp`}>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
      <a href="#about" className={`${styles["btn-get-started"]} animate__animated animate__fadeInUp scrollto`}>Read More</a>
    </div>
  </div>

  <a className={styles["carousel-control-prev"]} href="#hero-carousel" role="button" data-bs-slide="prev">
    <span className={`${styles["carousel-control-prev-icon"]} bi bi-chevron-left`} aria-hidden="true"></span>
  </a>

  <a className={styles["carousel-control-next"]} href="#hero-carousel" role="button" data-bs-slide="next">
    <span className={`${styles["carousel-control-next-icon"]} bi bi-chevron-right`} aria-hidden="true"></span>
  </a>

</div>


</section>

      <section id="about" className={`${styles.about} ${styles.section}`}>


<div className={`${styles.sectionTitle} container`} data-aos="fade-up">
  <h2>About</h2>
  <p>Who we are</p>
</div>

<div className={`container`}>
  <div className={`row gy-4`}>

    <div className={`col-lg-6 ${styles.content}`} data-aos="fade-up" data-aos-delay="100">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
      <ul>
        <li><i className={`bi bi-check2-circle`}></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
        <li><i className={`bi bi-check2-circle`}></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
        <li><i className={`bi bi-check2-circle`}></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo</span></li>
      </ul>
    </div>

    <div className={`col-lg-6`} data-aos="fade-up" data-aos-delay="200">
      <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
      <a href="#" className={`${styles.readMore}`}><span>Read More</span><i className={`bi bi-arrow-right`}></i></a>
    </div>

  </div>

</div>

</section>
<section id="features" className={`${styles.features} ${styles.section}`}>

<div className={`container`}>

  <ul className={`nav ${styles["nav-tabs"]} row  d-flex`} data-aos="fade-up" data-aos-delay="100">
    <li className={`nav-item col-3`}>
      <a className={`${styles["nav-link"]} ${styles.active} show`} data-bs-toggle="tab" data-bs-target="#features-tab-1">
        <i className={`bi bi-binoculars`}></i>
        <h4 className={`d-none d-lg-block`}>Modi sit est dela pireda nest</h4>
      </a>
    </li>
    <li className={`nav-item col-3`}>
      <a className={`${styles["nav-link"]}`} data-bs-toggle="tab" data-bs-target="#features-tab-2">
        <i className={`bi bi-box-seam`}></i>
        <h4 className={`d-none d-lg-block`}>Unde praesenti mara setra le</h4>
      </a>
    </li>
    <li className={`nav-item col-3`}>
      <a className={styles["nav-link"]} data-bs-toggle="tab" data-bs-target="#features-tab-3">
        <i className={`bi bi-brightness-high`}></i>
        <h4 className={`d-none d-lg-block`}>Pariatur explica nitro dela</h4>
      </a>
    </li>
    <li className={`nav-item col-3`}>
      <a className={styles["nav-link"]} data-bs-toggle="tab" data-bs-target="#features-tab-4">
        <i className={`bi bi-command`}></i>
        <h4 className={`d-none d-lg-block`}>Nostrum qui dile node</h4>
      </a>
    </li>
  </ul>

  <div className={styles["tab-content"]} data-aos="fade-up" data-aos-delay="200">

    <div className={`${styles["tab-pane"]} fade active show`} id="features-tab-1">
      <div className={`row`}>
        <div className={`col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0`}>
          <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
          <p className={`fst-italic`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </p>
          <ul>
            <li><i className={`bi bi-check2-all`}></i>
              <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
            </li>
            <li><i className={`bi bi-check2-all`}></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit</span>.</li>
            <li><i className={`bi bi-check2-all`}></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li>
          </ul>
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
        <div className={`col-lg-6 order-1 order-lg-2 text-center`}>
          <img src="./img/working-1.jpg" alt="" className={`img-fluid`}/>
        </div>
      </div>
    </div>

  </div>

</div>

</section>
<section id="call-to-action" className={`${styles["call-to-action"]} ${styles["section"]} ${styles["dark-background"]}`}>

      <div className={`container`}>

        <div className={`row`} data-aos="zoom-in" data-aos-delay="100">
          <div className={`col-xl-9 text-center text-xl-start`}>
            <h3>Call To Action</h3>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className={`col-xl-3 ${styles["cta-btn-container"]} text-center`}>
            <a className={`${styles["cta-btn"]} align-middle`} href="#">Call To Action</a>
          </div>
        </div>

      </div>

    </section>
  <section id="services" className={`${styles.services} ${styles.section}`}>


    <div className={`container ${styles["section-title"]}`} data-aos="fade-up">
      <h2>Services</h2>
      <p>What we do offer</p>
    </div>

  <div className={`container`}>

    <div className={`row gy-4`}>

      <div className={`col-lg-4 col-md-6`} data-aos="fade-up" data-aos-delay="100">
        <div className={`${styles["service-item"]}  position-relative`}>
          <div className={styles.icon}>
            <i className={`bi bi-cash-stack`} style={{color: "#0dcaf0"}}></i>
          </div>
          <a href="service-details.html" className={`stretched-link`}>
            <h3>Nesciunt Mete</h3>
          </a>
          <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
        </div>
      </div>

      <div className={`col-lg-4 col-md-6`} data-aos="fade-up" data-aos-delay="200">
        <div className={`${styles["service-item"]} position-relative`}>
          <div className={styles.icon}>
            <i className={`bi bi-calendar4-week`} style={{color: "#fd7e14"}}></i>
          </div>
          <a href="service-details.html" className={`stretched-link`}>
            <h3>Eosle Commodi</h3>
          </a>
          <p>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</p>
        </div>
      </div>

      <div className={`col-lg-4 col-md-6`} data-aos="fade-up" data-aos-delay="300">
        <div className={`${styles["service-item"]} position-relative`}>
          <div className={styles.icon}>
            <i className={`bi bi-chat-text`} style={{color: "#20c997"}}></i>
          </div>
          <a href="service-details.html" className={`stretched-link`}>
            <h3>Ledo Markt</h3>
          </a>
          <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</p>
        </div>
      </div>

      <div className={`col-lg-4 col-md-6`} data-aos="fade-up" data-aos-delay="400">
        <div className={`${styles["service-item"]} position-relative`}>
          <div className={styles.icon}>
            <i className={`bi bi-credit-card-2-front`} style={{color: "#df1529"}}></i>
          </div>
          <a href="service-details.html" className={`stretched-link`}>
            <h3>Asperiores Commodit</h3>
          </a>
          <p>Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.</p>
        </div>
      </div>

      <div className={`col-lg-4 col-md-6`} data-aos="fade-up" data-aos-delay="500">
        <div className={`${styles["service-item"]} position-relative`}>
          <div className={styles.icon}>
            <i className={`bi bi-globe`} style={{color: "#6610f2"}}></i>
          </div>
          <a href="service-details.html" className={`stretched-link`}>
            <h3>Velit Doloremque</h3>
          </a>
          <p>Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.</p>
        </div>
      </div>

      <div className={`col-lg-4 col-md-6`} data-aos="fade-up" data-aos-delay="600">
        <div className={`${styles["service-item"]} position-relative`}>
          <div className={styles.icon}>
            <i className={`bi bi-clock`} style={{color: "#f3268c"}}></i>
          </div>
          <a href="service-details.html" className={`stretched-link`}>
            <h3>Dolori Architecto</h3>
          </a>
          <p>Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.</p>
        </div>
      </div>

  </div>

</div>

</section>
<section id="portfolio" className={`${styles["portfolio"]} ${styles.section}`}>


<div className={`container ${styles["section-title"]}`} data-aos="fade-up">
  <h2>Portfolio</h2>
  <p>What we've done</p>
</div>
<div className={`container`}>

  <div className={`isotope-layout`} data-default-filter="*" data-layout="masonry" data-sort="original-order">

    <ul className={`${styles["portfolio-filters"]} isotope-filters`} data-aos="fade-up" data-aos-delay="100">
      <li data-filter="*" className={styles["filter-active"]}>All</li>
      <li data-filter=".filter-app">App</li>
      <li data-filter=".filter-product">Card</li>
      <li data-filter=".filter-branding">Web</li>
    </ul>

    <div className={`row gy-4 isotope-container`} data-aos="fade-up" data-aos-delay="200">

      <div className={`col-lg-4 col-md-6 ${styles["portfolio-item"]} isotope-item filter-app`}>
        <img src="./img/masonry-portfolio/masonry-portfolio-1.jpg" className={`img-fluid`} alt=""/>
        <div className={styles["portfolio-info"]}>
          <h4>App 1</h4>
          <p>Lorem ipsum, dolor sit</p>
          <a href="./img/masonry-portfolio/masonry-portfolio-1.jpg" title="App 1" data-gallery="portfolio-gallery-app" className={`glightbox preview-link ${styles["preview-link"]}`}><i className={`bi bi-zoom-in`}></i></a>
          <a href="portfolio-details.html" title="More Details" className={styles["details-link"]}><i className={`bi bi-link-45deg`}></i></a>
        </div>
      </div>
      <div className={`col-lg-4 col-md-6 ${styles["portfolio-item"]} isotope-item filter-product`}>
        <img src="./img/masonry-portfolio/masonry-portfolio-2.jpg" className={`img-fluid`} alt=""/>
        <div className={styles["portfolio-info"]}>
          <h4>Product 1</h4>
          <p>Lorem ipsum, dolor sit</p>
          <a href="./img/masonry-portfolio/masonry-portfolio-2.jpg" title="Product 1" data-gallery="portfolio-gallery-product" className={`glightbox preview-link ${styles["preview-link"]}`}><i className={`bi bi-zoom-in`}></i></a>
          <a href="portfolio-details.html" title="More Details" className={styles["details-link"]}><i className={`bi bi-link-45deg`}></i></a>
        </div>
      </div>

      <div className={`col-lg-4 col-md-6 ${styles["portfolio-item"]} isotope-item filter-branding`}>
        <img src="./img/masonry-portfolio/masonry-portfolio-3.jpg" className={`img-fluid`} alt=""/>
        <div className={styles["portfolio-info"]}>
          <h4>Branding 1</h4>
          <p>Lorem ipsum, dolor sit</p>
          <a href="./img/masonry-portfolio/masonry-portfolio-3.jpg" title="Branding 1" data-gallery="portfolio-gallery-branding" className={`glightbox preview-link ${styles["preview-link"]}`}><i className={`bi bi-zoom-in`}></i></a>
          <a href="portfolio-details.html" title="More Details" className={styles["details-link"]}><i className={`bi bi-link-45deg`}></i></a>
        </div>
      </div>

      <div className={`col-lg-4 col-md-6 ${styles["portfolio-item"]} isotope-item filter-app`}>
        <img src="./img/masonry-portfolio/masonry-portfolio-4.jpg" className={`img-fluid`} alt=""/>
        <div className={styles["portfolio-info"]}>
          <h4>App 2</h4>
          <p>Lorem ipsum, dolor sit</p>
          <a href="./img/masonry-portfolio/masonry-portfolio-4.jpg" title="App 2" data-gallery="portfolio-gallery-app" className={`glightbox preview-link ${styles["preview-link"]}`}><i className={`bi bi-zoom-in`}></i></a>
          <a href="portfolio-details.html" title="More Details" className={styles["details-link"]}><i className={`bi bi-link-45deg`}></i></a>
        </div>
      </div>

      <div className={`col-lg-4 col-md-6 ${styles["portfolio-item"]} isotope-item filter-product`}>
        <img src="./img/masonry-portfolio/masonry-portfolio-5.jpg" className={`img-fluid`} alt=""/>
        <div className={styles["portfolio-info"]}>
          <h4>Product 2</h4>
          <p>Lorem ipsum, dolor sit</p>
          <a href="./img/masonry-portfolio/masonry-portfolio-5.jpg" title="Product 2" data-gallery="portfolio-gallery-product" className={`glightbox preview-link ${styles["preview-link"]}`}><i className={`bi bi-zoom-in`}></i></a>
          <a href="portfolio-details.html" title="More Details" className={styles["details-link"]}><i className={`bi bi-link-45deg`}></i></a>
        </div>
      </div>

      <div className={`col-lg-4 col-md-6 ${styles["portfolio-item"]} isotope-item filter-branding`}>
        <img src="./img/masonry-portfolio/masonry-portfolio-6.jpg" className={`img-fluid`} alt=""/>
        <div className={styles["portfolio-info"]}>
          <h4>Branding 2</h4>
          <p>Lorem ipsum, dolor sit</p>
          <a href="./img/masonry-portfolio/masonry-portfolio-6.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" className={`glightbox preview-link ${styles["preview-link"]}`}><i className={`bi bi-zoom-in`}></i></a>
          <a href="portfolio-details.html" title="More Details" className={styles["details-link"]}><i className={`bi bi-link-45deg`}></i></a>
        </div>
      </div>

      <div className={`col-lg-4 col-md-6 ${styles["portfolio-item"]} isotope-item filter-app`}>
        <img src="./img/masonry-portfolio/masonry-portfolio-7.jpg" className={`img-fluid`} alt=""/>
        <div className={styles["portfolio-info"]}>
          <h4>App 3</h4>
          <p>Lorem ipsum, dolor sit</p>
          <a href="./img/masonry-portfolio/masonry-portfolio-7.jpg" title="App 3" data-gallery="portfolio-gallery-app" className={`glightbox preview-link ${styles["preview-link"]}`}><i className={`bi bi-zoom-in`}></i></a>
          <a href="portfolio-details.html" title="More Details" className={styles["details-link"]}><i className={`bi bi-link-45deg`}></i></a>
        </div>
      </div>

      <div className={`col-lg-4 col-md-6 ${styles["portfolio-item"]} isotope-item filter-product`}>
        <img src="./img/masonry-portfolio/masonry-portfolio-8.jpg" className={`img-fluid`} alt=""/>
        <div className={styles["portfolio-info"]}>
          <h4>Product 3</h4>
          <p>Lorem ipsum, dolor sit</p>
          <a href="./img/masonry-portfolio/masonry-portfolio-8.jpg" title="Product 3" data-gallery="portfolio-gallery-product" className={`glightbox preview-link ${styles["preview-link"]}`}><i className={`bi bi-zoom-in`}></i></a>
          <a href="portfolio-details.html" title="More Details" className={styles["details-link"]}><i className={`bi bi-link-45deg`}></i></a>
        </div>
      </div>

      <div className={`col-lg-4 col-md-6 ${styles["portfolio-item"]} isotope-item filter-branding`}>
        <img src="./img/masonry-portfolio/masonry-portfolio-9.jpg" className={`img-fluid`} alt=""/>
        <div className={styles["portfolio-info"]}>
          <h4>Branding 3</h4>
          <p>Lorem ipsum, dolor sit</p>
          <a href="./img/masonry-portfolio/masonry-portfolio-9.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" className={`glightbox preview-link ${styles["preview-link"]}`}><i className={`bi bi-zoom-in`}></i></a>
          <a href="portfolio-details.html" title="More Details" className={styles["details-link"]}><i className={`bi bi-link-45deg`}></i></a>
        </div>
      </div>

    </div>

  </div>

</div>

</section>
<section id="testimonials" className={`${styles.testimonials} ${styles.section}`}>
      <div className={`container ${styles["section-title"]}`} data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>What they are saying about us</p>
      </div>

      <div className={`container`} data-aos="fade-up" data-aos-delay="100">

        <div className={`swiper init-swiper`}>
          {/* <script type="application/json" className="swiper-config">
            {
              "loop": true,
              "speed": 600,
              "autoplay": {
                "delay": 5000
              },
              "slidesPerView": "auto",
              "pagination": {
                "el": ".swiper-pagination",
                "type": "bullets",
                "clickable": true
              },
              "breakpoints": {
                "320": {
                  "slidesPerView": 1,
                  "spaceBetween": 40
                },
                "1200": {
                  "slidesPerView": 3,
                  "spaceBetween": 10
                }
              }
            }
          </script> */}
          <div className={styles["swiper-wrapper"]}>

            <div className={styles["swiper-slide"]}>
              <div className={styles["testimonial-item"]}>
                <img src="./img/testimonials/testimonials-1.jpg" className={styles["testimonial-img"]} alt=""/>
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
                <div className={styles.stars}>
                  <i className={`bi bi-star-fill`}></i><i className={`bi bi-star-fill`}></i><i className={`bi bi-star-fill`}></i><i className={`bi bi-star-fill`}></i><i className={`bi bi-star-fill`}></i>
                </div>
                <p>
                  <i className={`bi bi-quote ${styles["quote-icon-left"]}`}></i>
                  <span>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</span>
                  <i className={`bi bi-quote ${styles["quote-icon-right"]}`}></i>
                </p>
              </div>
            </div>

            <div className={styles["swiper-slide"]}>
              <div className={styles["testimonial-item"]}>
                <img src="./img/testimonials/testimonials-2.jpg" className={styles["testimonial-img"]} alt=""/>
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
                <div className={styles.stars}>
                  <i className={`bi bi-star-fill`}></i><i className={`bi bi-star-fill`}></i><i className={`bi bi-star-fill`}></i><i className={`bi bi-star-fill`}></i><i className={`bi bi-star-fill`}></i>
                </div>
                <p>
                  <i className={`bi bi-quote ${styles["quote-icon-left"]}`}></i>
                  <span>Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.</span>
                  <i className={`bi bi-quote ${styles["quote-icon-right"]}`}></i>
                </p>
              </div>
            </div>

            <div className={styles["swiper-slide"]}>
              <div className={styles["testimonial-item"]}>
                <img src="./img/testimonials/testimonials-3.jpg" className={styles["testimonial-img"]} alt=""/>
                <h3>Jena Karlis</h3>
                <h4>Store Owner</h4>
                <div className={styles.stars}>
                  <i className={`bi bi-star-fill`}></i><i className={`bi bi-star-fill`}></i><i className={`bi bi-star-fill`}></i><i className={`bi bi-star-fill`}></i><i className={`bi bi-star-fill`}></i>
                </div>
                <p>
                  <i className={`bi bi-quote ${styles["quote-icon-left"]}`}></i>
                  <span>Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.</span>
                  <i className={`bi bi-quote ${styles["quote-icon-right"]}`}></i>
                </p>
              </div>
            </div>

            <div className={styles["swiper-slide"]}>
              <div className={styles["testimonial-item"]}>
                <img src="./img/testimonials/testimonials-4.jpg" className={styles["testimonial-img"]} alt=""/>
                <h3>Matt Brandon</h3>
                <h4>Freelancer</h4>
                <div className={styles.stars}>
                  <i className={`bi bi-star-fill`}></i><i className={`bi bi-star-fill`}></i><i className={`bi bi-star-fill`}></i><i className={`bi bi-star-fill`}></i><i className={`bi bi-star-fill`}></i>
                </div>
                <p>
                  <i className={`bi bi-quote ${styles["quote-icon-left"]}`}></i>
                  <span>Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.</span>
                  <i className={`bi bi-quote ${styles["quote-icon-right"]}`}></i>
                </p>
              </div>
            </div>

            <div className={styles["swiper-slide"]}>
              <div className={styles["testimonial-item"]}>
                <img src="./img/testimonials/testimonials-5.jpg" className={styles["testimonial-img"]} alt=""/>
                <h3>John Larson</h3>
                <h4>Entrepreneur</h4>
                <div className={styles.stars}>
                  <i className={`bi bi-star-fill`}></i><i className={`bi bi-star-fill`}></i><i className={`bi bi-star-fill`}></i><i className={`bi bi-star-fill`}></i><i className={`bi bi-star-fill`}></i>
                </div>
                <p>
                  <i className={`bi bi-quote ${styles["quote-icon-left"]}`}></i>
                  <span>Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.</span>
                  <i className={`bi bi-quote ${styles["quote-icon-right"]}`}></i>
                </p>
              </div>
            </div>

          </div>
          <div className={styles["swiper-pagination"]}></div>
        </div>

      </div>

    </section>
    <section id="pricing" className={`${styles.pricing} ${styles.section}`}>

    
      <div className={`container ${styles["section-title"]}`} data-aos="fade-up">
        <h2>Pricing</h2>
        <p>What they are saying about us</p>
      </div>

      <div className={`container`}>

        <div className={`row gy-3`}>

          <div className={`col-xl-3 col-lg-6`} data-aos="fade-up" data-aos-delay="100">
            <div className={styles["pricing-item"]}>
              <h3>Free</h3>
              <h4><sup>$</sup>0<span> / month</span></h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li className={styles.na}>Pharetra massa</li>
                <li className={styles.na}>Massa ultricies mi</li>
              </ul>
              <div className={styles["btn-wrap"]}>
                <a href="#" className={styles["btn-buy"]}>Buy Now</a>
              </div>
            </div>
          </div>

          <div className={`col-xl-3 col-lg-6`} data-aos="fade-up" data-aos-delay="200">
            <div className={`${styles["pricing-item"]} ${styles["featured"]}`}>
              <h3>Business</h3>
              <h4><sup>$</sup>19<span> / month</span></h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li className={styles.na}>Massa ultricies mi</li>
              </ul>
              <div className={styles["btn-wrap"]}>
                <a href="#" className={styles["btn-buy"]}>Buy Now</a>
              </div>
            </div>
          </div>

          <div className={`col-xl-3 col-lg-6`} data-aos="fade-up" data-aos-delay="400">
            <div className={styles["pricing-item"]}>
              <h3>Developer</h3>
              <h4><sup>$</sup>29<span> / month</span></h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li>Massa ultricies mi</li>
              </ul>
              <div className={styles["btn-wrap"]}>
                <a href="#" className={styles["btn-buy"]}>Buy Now</a>
              </div>
            </div>
          </div>

          <div className={`col-xl-3 col-lg-6`} data-aos="fade-up" data-aos-delay="400">
            <div className={styles["pricing-item"]}>
              <span className={styles.advanced}>Advanced</span>
              <h3>Ultimate</h3>
              <h4><sup>$</sup>49<span> / month</span></h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li>Massa ultricies mi</li>
              </ul>
              <div className={styles["btn-wrap"]}>
                <a href="#" className={styles["btn-buy"]}>Buy Now</a>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
    
    <section id="faq" className={`${styles.faq} ${styles.section}`}>
      
      <div className={`container ${styles["section-title"]}`} data-aos="fade-up">
        <h2>Frequently Asked Questions</h2>
        <p>Frequently Asked Questions</p>
      </div>

      <div className={`container`} data-aos="fade-up">
        <div className={`row`}>
          <div className={`col-12`}>
            <div className={styles["custom-accordion"]} id="accordion-faq">
              <div className={styles["accordion-item"]}>
                <h2 className={`mb-0`}>
                  <button className={`btn ${styles["btn-link"]}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapse-faq-1">
                    How to download and register?
                  </button>
                </h2>

                <div id="collapse-faq-1" className={`collapse show`} aria-labelledby="headingOne" data-parent="#accordion-faq">
                  <div className={styles["accordion-body"]}>
                    Far far away, behind the word mountains, far from the countries
                    Vokalia and Consonantia, there live the blind texts. Separated
                    they live in Bookmarksgrove right at the coast of the Semantics,
                    a large language ocean.
                  </div>
                </div>
              </div>
              

              <div className={styles["accordion-item"]}>
                <h2 className={`mb-0`}>
                  <button className={`btn ${styles["btn-link"]} collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapse-faq-2">
                How to create your paypal account?
              </button>
            </h2>
            <div id=" collapse-faq-2" className={`collapse`} aria-labelledby="headingTwo" data-parent="#accordion-faq">
                    <div className={styles["accordion-body"]}>
                      A small river named Duden flows by their place and supplies it
                      with the necessary regelialia. It is a paradisematic country, in
                      which roasted parts of sentences fly into your mouth.
                    </div>
              </div>
            </div>
            

            <div className={styles["accordion-item"]}>
              <h2 className={`mb-0`}>
                <button className={`btn ${styles["btn-link"]} collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapse-faq-3">
                  How to link your paypal and bank account?
                </button>
              </h2>

              <div id="collapse-faq-3" className={`collapse`} aria-labelledby="headingThree" data-parent="#accordion-faq">
                <div className={styles["accordion-body"]}>
                  When she reached the first hills of the Italic Mountains, she
                  had a last view back on the skyline of her hometown
                  Bookmarksgrove, the headline of Alphabet Village and the subline
                  of her own road, the Line Lane. Pityful a rethoric question ran
                  over her cheek, then she continued her way.
                </div>
              </div>
            </div>
           

          </div>
        </div>
      </div>
      </div>
      
    </section>
    <section id="team" className={`${styles.team} ${styles.section}`}>

      
      <div className={`container ${styles["section-title"]}` }data-aos="fade-up">
        <h2>Team</h2>
        <p>Our Hardworking Team</p>
      </div>
      <div className={`container`}>

        <div className={`row gy-4`}>

          <div className={`col-lg-3 col-md-6 d-flex align-items-stretch`} data-aos="fade-up" data-aos-delay="100">
            <div className={styles["team-member"]}>
              <div className={styles["member-img"]}>
                <img src="./img/team/team-1.jpg" className={`img-fluid`} alt=""/>
                <div className={styles.social}>
                  <a href=""><i className={`bi bi-twitter-x`}></i></a>
                  <a href=""><i className={`bi bi-facebook`}></i></a>
                  <a href=""><i className={`bi bi-instagram`}></i></a>
                  <a href=""><i className={`bi bi-linkedin`}></i></a>
                </div>
              </div>
              <div className={styles["member-info"]}>
                <h4>Walter White</h4>
                <span>Chief Executive Officer</span>
              </div>
            </div>
          </div>

          <div className={`col-lg-3 col-md-6 d-flex align-items-stretch`} data-aos="fade-up" data-aos-delay="200">
            <div className={styles["team-member"]}>
              <div className={styles["member-img"]}>
                <img src="./img/team/team-2.jpg" className={`img-fluid`} alt=""/>
                <div className={styles.social}>
                  <a href=""><i className={`bi bi-twitter-x`}></i></a>
                  <a href=""><i className={`bi bi-facebook`}></i></a>
                  <a href=""><i className={`bi bi-instagram`}></i></a>
                  <a href=""><i className={`bi bi-linkedin`}></i></a>
                </div>
              </div>
              <div className={styles["member-info"]}>
                <h4>Sarah Jhonson</h4>
                <span>Product Manager</span>
              </div>
            </div>
          </div>

          <div className={`col-lg-3 col-md-6 d-flex align-items-stretch`} data-aos="fade-up" data-aos-delay="300">
            <div className={styles["team-member"]}>
              <div className={styles["member-img"]}>
                <img src="./img/team/team-3.jpg" className={`img-fluid`} alt=""/>
                <div className={styles.social}>
                  <a href=""><i className={`bi bi-twitter-x`}></i></a>
                  <a href=""><i className={`bi bi-facebook`}></i></a>
                  <a href=""><i className={`bi bi-instagram`}></i></a>
                  <a href=""><i className={`bi bi-linkedin`}></i></a>
                </div>
              </div>
              <div className={styles["member-info"]}>
                <h4>William Anderson</h4>
                <span>CTO</span>
              </div>
            </div>
          </div>

          <div className={`col-lg-3 col-md-6 d-flex align-items-stretch`} data-aos="fade-up" data-aos-delay="400">
            <div className={styles["team-member"]}>
              <div className={styles["member-img"]}>
                <img src="./img/team/team-4.jpg" className={`img-fluid`} alt=""/>
                <div className={styles.social}>
                  <a href=""><i className={`bi bi-twitter-x`}></i></a>
                  <a href=""><i className={`bi bi-facebook`}></i></a>
                  <a href=""><i className={`bi bi-instagram`}></i></a>
                  <a href=""><i className={`bi bi-linkedin`}></i></a>
                </div>
              </div>
              <div className={styles["member-info"]}>
                <h4>Amanda Jepson</h4>
                <span>Accountant</span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
    <section id="recent-posts" className={`${styles["recent-posts"]} ${styles.section}`}>

      
      <div className={`container ${styles["section-title"]}`} data-aos="fade-up">
        <h2>Recent Posts</h2>
        <p>Recent Blog Posts<br/></p>
      </div>

      <div className={`container`}>

        <div className={`row gy-4`}>

          <div className={`col-xl-4 col-md-6`} data-aos="fade-up" data-aos-delay="100">
            <article>

              <div className={styles["post-img"]}>
                <img src="./img/blog/blog-1.jpg" alt="" className={`img-fluid`}/>
              </div>

              <p className={styles["post-category"]}>Politics</p>

              <h2 className={styles.title}>
                <a href="blog-details.html">Dolorum optio tempore voluptas dignissimos</a>
              </h2>

              <div className={`d-flex align-items-center`}>
                <img src="./img/blog/blog-author.jpg" alt="" className={`img-fluid ${styles["post-author-img"]} flex-shrink-0`}/>
                <div className={`post-meta`}>
                  <p className={`post-author`}>Maria Doe</p>
                  <p className={styles["post-date"]}>
                    <time dateTime="2022-01-01">Jan 1, 2022</time>
                  </p>
                </div>
              </div>

            </article>
          </div>

          <div className={`col-xl-4 col-md-6`} data-aos="fade-up" data-aos-delay="200">
            <article>

              <div className={styles["post-img"]}>
                <img src="./img/blog/blog-2.jpg" alt="" className={`img-fluid`}/>
              </div>

              <p className={`post-category`}>Sports</p>

              <h2 className={styles.title}>
                <a href="blog-details.html">Nisi magni odit consequatur autem nulla dolorem</a>
              </h2>

              <div className={`d-flex align-items-center`}>
                <img src="./img/blog/blog-author-2.jpg" alt="" className={`img-fluid ${styles["post-author-img"]} flex-shrink-0`}/>
                <div className={`post-meta`}>
                  <p className={styles["post-author"]}>Allisa Mayer</p>
                  <p className={styles["post-date"]}>
                    <time dateTime="2022-01-01">Jun 5, 2022</time>
                  </p>
                </div>
              </div>

            </article>
          </div>

          <div className={`col-xl-4 col-md-6`} data-aos="fade-up" data-aos-delay="300">
            <article>

              <div className={styles["post-img"]}>
                <img src="./img/blog/blog-3.jpg" alt="" className={`img-fluid`}/>
              </div>

              <p className={styles["post-category"]}>Entertainment</p>

              <h2 className={styles.title}>
                <a href="blog-details.html">Possimus soluta ut id suscipit ea ut in quo quia et soluta</a>
              </h2>

              <div className={`d-flex align-items-center`}>
                <img src="./img/blog/blog-author-3.jpg" alt="" className={`img-fluid ${styles["post-author-img"]} flex-shrink-0`}/>
                <div className={`post-meta`}>
                  <p className={styles["post-author"]}>Mark Dower</p>
                  <p className={styles["post-date"]}>
                    <time dateTime="2022-01-01">Jun 22, 2022</time>
                  </p>
                </div>
              </div>

            </article>
          </div>

        </div>

      </div>

    </section>
    <section id="contact" className={`${styles.contact} ${styles.section}`}>

      
      <div className={`container ${styles["section-title"]}`} data-aos="fade-up">
        <h2>Contact</h2>
        <p>Contact Us</p>
      </div>

      <div className={`container`} data-aos="fade" data-aos-delay="100">

        <div className={`row gy-4`}>

          <div className={`col-lg-4`}>
            <div className={`${styles["info-item"]} d-flex`} data-aos="fade-up" data-aos-delay="200">
              <i className={`bi bi-geo-alt flex-shrink-0`}></i>
              <div>
                <h3>Address</h3>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>

            <div className={`${styles["info-item"]} d-flex`} data-aos="fade-up" data-aos-delay="300">
              <i className={`bi bi-telephone flex-shrink-0`}></i>
              <div>
                <h3>Call Us</h3>
                <p>+1 5589 55488 55</p>
              </div>
            </div>

            <div className={`${styles["info-item"]} d-flex`} data-aos="fade-up" data-aos-delay="400">
              <i className={`bi bi-envelope flex-shrink-0`}></i>
              <div>
                <h3>Email Us</h3>
                <p>info@example.com</p>
              </div>
            </div>

          </div>

          <div className={`col-lg-8`}>
            <form action="forms/contact.php" method="post" className={styles["php-email-form"]} data-aos="fade-up" data-aos-delay="200">
              <div className={`row gy-4`}>

                <div className={`col-md-6`}>
                  <input type="text" name="name" className={`form-control`} placeholder="Your Name" required=""/>
                </div>

                <div className={`col-md-6 `}>
                  <input type="email" className={`form-control`} name="email" placeholder="Your Email" required=""/>
                </div>

                <div className={`col-md-12`}>
                  <input type="text" className={`form-control`} name="subject" placeholder="Subject" required=""/>
                </div>

                <div className={`col-md-12`}>
                  <textarea className={`form-control`} name="message" rows="6" placeholder="Message" required=""></textarea>
                </div>

                <div className={`col-md-12 text-center`}>
                  <div className={styles.loading}>Loading</div>
                  <div className={styles["error-message"]}></div>
                  <div className={styles["sent-message"]}>Your message has been sent. Thank you!</div>

                  <button type="submit">Send Message</button>
                </div>

              </div>
            </form>
          </div>

        </div>

      </div>

    </section>
    </main>
    <footer id="footer" className={`${styles.footer} ${styles["dark-background"]}`}>
    <div className={`container`}>
      <h3 className={`sitename`}>Selecao</h3>
      <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
      <div className={`${styles["social-links"]} d-flex justify-content-center`}>
        <a href=""><i className={`bi bi-twitter-x`}></i></a>
        <a href=""><i className={`bi bi-facebook`}></i></a>
        <a href=""><i className={`bi bi-instagram`}></i></a>
        <a href=""><i className={`bi bi-skype`}></i></a>
        <a href=""><i className={`bi bi-linkedin`}></i></a>
      </div>
      <div className={`container`}>
        <div className={styles.copyright}>
          <span>Copyright</span> <strong className={`px-1 sitename`}>Selecao</strong> <span>All Rights Reserved</span>
        </div>
        <div className={styles.credits}>
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </div>
  </footer>
        </div>
    
    </div>
  )
}

export default first