import React, {useEffect,useState} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles.module.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Link from 'next/link'

function Second({className}) {
    const [headClicked, setheadClicked] = useState('contact')
    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 700,
          easing: "ease-out-cubic",
        });
      }, []);
  return (
    <div className={className}>
        <div className={styles["index-page"]}>
            <main className={styles.main}>
            <header id="header" className={`${styles.header} d-flex align-items-center fixed-top`} >
    <div className={`container-fluid container-xl position-relative d-flex align-items-center justify-content-between`}>

      <Link href="/" className={`${styles.logo} d-flex align-items-center`}>
         {/* Uncomment the line below if you also wish to use an image logo  */}
         <img src="./img/auraLogo.png" alt=""/>
        <h1 className={`sitename`}>Aura InfoTech</h1>
      </Link>

      <nav id="navmenu" className={styles.navmenu}>
        <ul>
          <li><Link href="/" className={headClicked==='home'?styles.active:styles.hov} onClick={()=>{setheadClicked('home')}} >Home</Link></li>
          <li><Link href="/#about" className={headClicked==='about'?styles.active:'hov'} onClick={()=>{setheadClicked('about')}} >About Us</Link></li>
          {/* <li><Link href="/#services" className={headClicked==='services'?styles.active:''} onClick={()=>{setheadClicked('services')}}>Services</Link></li>
          <li><Link href="/#portfolio" className={headClicked==='portfolio'?styles.active:''} onClick={()=>{setheadClicked('portfolio')}}>Portfolio</Link></li>
          <li><Link href="/#team" className={headClicked==='team'?styles.active:''} onClick={()=>{setheadClicked('team')}}>Team</Link></li> */}
          {/* <li><a href="blog.html" className={headClicked==='blog'?styles.active:''} onClick={()=>{setheadClicked('blog')}}>Blog</a></li> */}
          <li className={`${styles.dropdown} ${styles.hov}`}><a href="#" ><span>Services</span> <i className={`bi bi-chevron-down toggle-dropdown`}></i></a>
            <ul>
              <li><a href="#">SAP Solutions</a></li>
              <li><a href="#">SAP Services</a></li>
              <li><a href="#">Cloud</a></li>
              <li><a href="#">Enterprise Analytics with Tableau</a></li>
              <li><a href="#">Power BI</a></li>
              <li><a href="#">Technology Services</a></li>
              <li><a href="#">Business Processing</a></li>
              <li><a href="#">Consulting</a></li>
            </ul>
          </li>
          <li><a href="#contact" className={headClicked==='contact'?styles.active:'hov'} onClick={()=>{setheadClicked('contact')}} >Contact Us</a></li>
        </ul>
        <i className={`${styles["mobile-nav-toggle"]} d-xl-none bi bi-list`}></i>
      </nav>

    </div>
  </header>
  <section id="contact" className={`${styles.contact} ${styles.section}`} style={{marginTop:"100px"}}>

      
<div className={`container ${styles["section-title"]}`} data-aos="fade-up">
  <h2>Contact</h2>
  <p>Ready to Transform Your Business with SAP?</p>
</div>

<div className={`container`} data-aos="fade" data-aos-delay="100">

  <div className={`row gy-4`}>

    <div className={`col-lg-4`}>
      {/* <div className={`${styles["info-item"]} d-flex`} data-aos="fade-up" data-aos-delay="200">
        <i className={`bi bi-geo-alt flex-shrink-0`}></i>
        <div>
          <h3>Address</h3>
          <p>A108 Adam Street, New York, NY 535022</p>
        </div>
      </div> */}

      <div className={`${styles["info-item"]} d-flex`} data-aos="fade-up" data-aos-delay="300">
        <i className={`bi bi-telephone flex-shrink-0`}></i>
        <div>
          <h3>Call Us</h3>
          <p>+91 97897 20718</p>
        </div>
      </div>

      <div className={`${styles["info-item"]} d-flex`} data-aos="fade-up" data-aos-delay="400">
        <i className={`bi bi-envelope flex-shrink-0`}></i>
        <div>
          <h3>Email Us</h3>
          <p>sales@aurainfotech.sg</p>
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
      <h3 className={`sitename`}>Aura InfoTech</h3>
      {/* <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p> */}
      <div className={`${styles["social-links"]} d-flex justify-content-center`}>
        <a href=""><i className={`bi bi-twitter-x`}></i></a>
        <a href=""><i className={`bi bi-facebook`}></i></a>
        <a href=""><i className={`bi bi-instagram`}></i></a>
        <a href=""><i className={`bi bi-skype`}></i></a>
        <a href=""><i className={`bi bi-linkedin`}></i></a>
      </div>
      <div className={`container`}>
        <div className={styles.copyright}>
          <span>Copyright</span> <strong className={`px-1 sitename`}>Aura InfoTech</strong> <span>All Rights Reserved</span>
        </div>
        {/* <div className={styles.credits}>
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div> */}
      </div>
    </div>
  </footer>
        </div>
    </div>
  )
}

export default Second