import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkedAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          message: '',
          subject: ''
        }
    }

    componentDidMount () {
        const script1 = document.createElement("script");
        const script2 = document.createElement("script");
        const script3 = document.createElement("script");
        const script4 = document.createElement("script");
        const script5 = document.createElement("script");
        const script6 = document.createElement("script");
        const script7 = document.createElement("script");
        const script8 = document.createElement("script");
        const script9 = document.createElement("script");
        const script10 = document.createElement("script");
        const script11 = document.createElement("script");

        const script_srcs = ["assets/js/bundle.min.js","assets/js/owl.carousel.min.js","assets/js/jquery.cubeportfolio.min.js", "assets/js/parallaxie.min.js", "assets/js/jquery.fancybox.js", "assets/js/jquery.fancybox.min.js", "assets/js/owl.carousel.min.js", "assets/js/mediaelement-and-player.min.js", "assets/js/tilt.jquery.js", "assets/js/contact_us.js", "assets/js/script.js"]

        script_srcs.map((src, idx) => {
            eval(`script${idx + 1}`).src = src;
            eval(`script${idx + 1}`).async = true;
            document.body.appendChild(eval(`script${idx + 1}`));
        })
    }

  render() {
    return (
      <div data-spy="scroll" data-target=".navbar" data-offset="150">

        {/* <!--  PRELOADER  --> */}
        <div class="loader-area">
            <div class='loader'>
                <div class='one'></div>
                <div class='two'></div>
                <div class='three'></div>
            </div>
        </div>

        {/* <!-- START NAVBAR SECTION -->  */}
        <header>

            {/* <!--    NAVBAR FOR LARGE SCREEN--> */}
            <nav id="my-nav1" class="navbar navbar-expand-lg navbar-light rounded-bar transparent-bar">

                <div class="logo small-screen">
                    <a href="#home" class="scroll"><img src="../assets/img/logo.png" alt="Logo Img" /></a>
                </div>

                <div class="container bg-trans-color">
                    <div class="row no-gutters w-100">
                        <div class="collapse navbar-collapse" id="navbarSupportedContent1">
                            <div class="collapse navbar-collapse">
                                <div class="col-3 col-md-2 col-lg-3 text-left p-0">
                                    <div class="logo">
                                        <a href="#home" class="scroll"><p id="top-left-title">Lay Ministry Training Center</p></a>
                                    </div>
                                </div>
                                <div class="col-6 p-0">
                                <ul id="primary" class="navbar-nav text-center">

                                    <li class="nav-item">
                                        <a class="nav-link" href="#">home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#feature">about</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#staff">staff</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#workshops">workshops</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#testimonials">testimonials</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#contact" class="btn btn-slider pink-btn rounded-pill">contact</a>
                                    </li>
                                </ul>
                                </div>

                                <div class="col-3 text-right p-0">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <a href="javascript:void(0)" class="sidemenu_btn" id="sidemenu_toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
            </nav>

            {/* <!--Side Nav--> */}
            <div class="side-menu hidden">
                <div class="inner-wrapper">
                    <span class="btn-close" id="btn_sideNavClose"><i></i><i></i></span>
                    <nav class="side-nav w-100">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link scroll" href="#home">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link scroll" href="#feature">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link scroll" href="#gallery">Work</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link scroll" href="#testimonial">Clients</a>
                            </li>
                            <li class="nav-item">
                                <a href="#contact" class="btn btn-slider white-btn rounded-pill">Contact</a>
                            </li>
                        </ul>
                    </nav>

                    <div class="side-footer w-100">
                        <div class="banner-icons">
                            <a href="#"><i class="lab la-facebook-f icons"></i></a>
                            <a href="#"><i class="lab la-twitter icons"></i></a>
                            <a href="#"><i class="lab la-instagram icons"></i></a>
                        </div>
                        <p>&copy; 2020 MegaOne. Made With Love by Themesindustry.</p>
                    </div>
                </div>
            </div>
            <a id="close_side_menu" href="javascript:void(0);"></a>
            {/* <!-- End side menu --> */}
        </header>

        <section id="home" class="home">
            <div class="container">
                <div class="row height">
                    <div class="col-12 col-md-6 height d-flex align-items-center text-left">
                        <div class="text d-flex align-items-center">
                            <div class="home-text text-black height1">
                                <h1 class="main-heading mb-0">Lay Ministry <br />Training Center</h1>
                                <h4 class="heading mb-3">Principles: Doug Smith & Ron Serpliss</h4>
                                <a href="#blog" class="btn btn-slider pink-btn rounded-pill">Our Workshops</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="large-logo">
                            <img src="../assets/img/logo_transparent.png" alt="img" />
                        </div>
                        <div class="plant1">
                            <div class="large-icon plant-home">
                                <img src="../assets/img/plant1.png" alt="img" />
                            </div>
        {/* <!--                    <div class="shadow-home">-->
        <!--                        <img src="digital-marketing/img/shadow.png" alt="img">-->
        <!--                    </div>--> */}
                        </div>

                    </div>
                </div>
            </div>

            <svg class="yellow-square" viewBox="0 0 200 655" xmlns="http://www.w3.org/2000/svg">
                <rect  x = "0" y = "32" width = "1616" height = "1616" rx="28" ry="28" fill="#EED7C5" transform = "rotate(-45 200 100)"/>
            </svg>

            <svg class="left-square small-view" viewBox="0 0 310 655" xmlns="http://www.w3.org/2000/svg">
                <rect  x = "0" y = "32" width = "1616" height = "1616" rx="48" ry="48" fill="#C89F9C" transform = "rotate(135 100 245)"/>
            </svg>

        </section>

        <section id="feature" class="feature">
            <div class="container">
                    <div class="row">
                        <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-12 text-center">
                            <div class="text">
                                <div class="home-text text-black">
                                    <h1 class="main-heading mb-4">We are Lay Ministry Training Center</h1>
                                    <p class="sub-heading mb-4">The Lay Ministry Training
                                        Center has been founded by Doug Smith and Ron Serpliss to train lay ministers to
                                        assist their clergy in ministering to the hurt, sick and troubled members of their
                                        parishes.</p>
                                        {/* Here I want to make a pop-up appear when the button below is pressed, 
                                        Maybe explaining the mission statement further */}
                                    <a href="#" class="btn btn-slider pink-btn rounded-pill">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row mt-90">
                        <iframe width="870" height="560" src="https://youtube.com/embed/S-ByBylsNis" title="Introductory Video"></iframe>
                    </div>
                </div>
        </section>

        <section id="stats" class="stats">

            <svg class="left-square stats" viewBox="0 0 310 655" xmlns="http://www.w3.org/2000/svg">
                <rect  x = "0" y = "32" width = "1616" height = "1616" rx="48" ry="48" fill="#C89F9C" transform = "rotate(135 100 245)" />
            </svg>

        </section>

        <section id="staff" class="team">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-8 col-lg-6">
                        <div class="team-text text-black">
                            <h1 class="main-heading mb-3">Our Principles</h1>
                            
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12 col-md-9 col-lg-8">

                        <div id="team-carousal" class="owl-carousel owl-theme team-owl mt-100 text-center">
                            <div class="item">
                                <div class="team-tittle text-center mt-3 mb-3">
                                    <div class="name-img">
                                        <img src="../assets/img/Doug.jpg" alt="img" />
                                    </div>
                                    <h3 class="name mb-0 text-center">Doug Smith</h3>
                                    <a href="../assets/img/dougs-bio.png" class="cbp-lightbox" data-cbp-lightbox="bios">Click here for Doug's bio.</a>
                                </div>
                            </div>
                            <div class="item">
                                <div class="team-tittle text-center mt-3 mb-3">
                                    <div class="name-img">
                                        <img src="../assets/img/Ron.jpg" alt="img" />
                                    </div>
                                    <h3 class="name mb-0 text-center">Ron Serpliss</h3>
                                    <a href="../assets/img/rons-bio.png" class="cbp-lightbox" data-cbp-lightbox="bios">Click here for Ron's bio.</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <svg class="right-square team" viewBox="0 0 280 655" xmlns="http://www.w3.org/2000/svg">
                <rect  x = "0" y = "32" width = "1616" height = "1616" rx="48" ry="48" fill="#ffc107" transform = "rotate(-45 310 100)"/>
            </svg>
            <svg class="right-square team small-view" viewBox="0 0 280 655" xmlns="http://www.w3.org/2000/svg">
                <rect  x = "0" y = "32" width = "1616" height = "1616" rx="48" ry="48" fill="#fa2851" transform = "rotate(-45 310 100)"/>
            </svg>
        </section>

        <section id="design" class="design">

            <div class="col-lg-6 offset-lg-5 col-md-6 offset-md-4 col-sm-12 text-left p-0">
                <iframe width="870" height="500" src="https://youtube.com/embed/2GUZYZa7Xac" title="Christian Centering Meditation"></iframe>
            </div>

            <svg class="left-square design" viewBox="0 0 310 655" xmlns="http://www.w3.org/2000/svg">
                <rect  x = "0" y = "32" width = "1616" height = "1616" rx="48" ry="48" fill="#000" transform = "rotate(135 100 245)"/>
            </svg>

            <svg class="right-square small-view" viewBox="0 0 312 600" xmlns="http://www.w3.org/2000/svg">
                <rect  x = "0" y = "32" width = "1616" height = "1616" rx="48" ry="48" fill="#ffc107" transform = "rotate(-45 310 100)"/>
            </svg>

        </section>

        <section id="workshops" class="gallery">
            <div class="container">
                <div class="section-heading">
                    <div class="row">
                        <div class="col-lg-6 wow fadeInUp" data-wow-delay="300ms">
                            <div class="ex-detail">
                                <h1 class="main-heading">Our<br />
                                    Workshop Offerings
                                </h1>
                            </div>
                        </div>
                        <div class="col-md-12 pt-5">
                            <div id="js-filters-mosaic" class="cbp-l-filters-button wow fadeInUp" data-wow-delay="350ms">
                                <div data-filter=".current" class="cbp-filter-item">CURRENT OFFERINGS</div>
                                <div data-filter=".future" class="cbp-filter-item">FUTURE OFFERINGS</div>
                            </div>

                            <div id="js-grid-mosaic" class="cbp cbp-l-grid-mosaic">
                                <div class="cbp-item current">
                                    <a href="../assets/img/workshop-1-description.png" class="cbp-caption cbp-lightbox">
                                        <div class="cbp-caption-defaultWrap">
                                            <img src="../assets/img/workshop-1.jpg" alt="img" />
                                        </div>
                                        <div class="cbp-caption-activeWrap portfolio-hover-effect d-flex align-items-end">
                                            <div class="hover-text">
                                                <h4 class="p-hover-title">Workshop #1</h4>
                                                <p class="p-hover-des">“Ministering to Those Suffering from Grief and Loss” Click to learn more.</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div class="cbp-item future">
                                    <a href="../assets/img/workshop-2-description.png" class="cbp-caption cbp-lightbox">
                                        <div class="cbp-caption-defaultWrap">
                                            <img src="../assets/img/workshop-2.jpg" alt="img" />
                                        </div>
                                        <div class="cbp-caption-activeWrap portfolio-hover-effect d-flex align-items-end">
                                            <div class="hover-text">
                                                <h4 class="p-hover-title">Future Workshop to be Offered</h4>
                                                <p class="p-hover-des">“Ministering to People in the Final Phases of Life.” Click to Learn More</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <section id="testimonial" class="testimonial">
            <div class="container">

                <div class="row"></div>
            </div>

            <svg class="right-square test" viewBox="0 0 312 600" xmlns="http://www.w3.org/2000/svg">
                <rect  x = "0" y = "32" width = "1616" height = "1616" rx="48" ry="48" fill="#fa2851" transform = "rotate(-45 310 100)"/>
            </svg>

            <svg class="left-square gallery small-view" viewBox="0 0 310 655" xmlns="http://www.w3.org/2000/svg">
                <rect  x = "0" y = "32" width = "1616" height = "1616" rx="48" ry="48" fill="#fa2851" transform = "rotate(135 100 245)"/>
            </svg>

        </section>

        <section id="testimonials" class="blog">
            <div class="container">
                <div class="row m-0">
                    <div class="col-lg-6 offset-lg-4 col-md-12 offset-md-0 col-sm-12 text-left p-0">
                        <div class="home-text text-black">
                                <h1 class="main-heading mt-3 mb-4">Testimonials</h1>
                            </div>
                    </div>
                </div>
                    <div class="row mt-40">
                        <div class="col-lg-8 offset-lg-4 col-md-12 offset-md-0 p-0">
                            <div class="blog-owl owl-carousel owl-theme no-gutters blog-area" id="blog-carousal">

                                <div class="item blog-item">
                                    <p class="testimonial">“Doug Smith has been a speaker at the International Death, Grief and Bereavement Conference that I host on many occasions. His workshops and plenary sessions have always received excellent evaluations from those who have attended. He is not only an excellent presenter, but he is also a gem of a person who cares deeply about others. He has been one of our most sought after speakers at our Conference for many years. He is honest, open, and has excellent material to offer to those who are fortunate to be able to learn from him.”</p>
                                    <div class="blog-text text-center text-md-left">
                                        <div class="info-blog">
                                            <h4>Gerry R. Cox, PhD.</h4>
                                        </div>
                                        <div class="blog-description mb-3">
                                            <p class="sub-heading">Author, co-author and editor of over thirty books, including Promoting Resilience: Responding to Adversity, Vulnerability, and Loss (2019).</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="item blog-item">
                                    <p class="testimonial">“I have been fortunate to hear Doug Smith speak at a number of conferences and have always been very impressed with not only his extensive knowledge, but also his warmth and compassion. Doug is a very skilled educator whose empathy and humanity come shining through in all his work. I am pleased to be able to commend all that he does.”</p>
                                    <div class="blog-text text-center text-md-left">
                                        <div class="info-blog">
                                            <h4>Dr. Neil Thompson</h4>
                                        </div>
                                        <div class="blog-description mb-3">
                                            <p class="sub-heading">Co-author of Death and Dying: Sociological Perspectives (2020).</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="item blog-item">
                                    <p class="testimonial">“I have worked with Doug Smith since 2012 and see him as a mentor, dear friend and wise companion for this mysterious and excruciating journey called life. His strength and brilliance lie in his deep wounding, stark vulnerability and stellar story telling. He teaches important concepts through story, which, for me, is the best way to learn. He has been thoroughly polished by life’s losses, surprises and storms and as a result, shines with brilliance, clarity and compassion. He is the real deal; I am eternally thankful for his guidance, wisdom and essential teaching.”</p>
                                    <div class="blog-text text-center text-md-left">
                                        <div class="info-blog">
                                            <h4>Barbara Nehls-Lowe, MPH, CHES, DMin</h4>
                                        </div>
                                        <div class="blog-description mb-3">
                                            <p class="sub-heading">Program Director, University of Wisconsin, Division of Continuing Studies.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="item blog-item">
                                    <p class="testimonial">“Long after COVID becomes past-tense, an enormous need will exist for pastoral care and mental health care to deal with COVID’s spiritual residue. And many individuals will struggle with ‘God-related’ issues and trying to make sense, or meaning, of their experience. We will need laity equipped to ‘companion’ these individuals. We will need individual equipped to do this critical work and the Lay Ministry Training Center, under Doug Smith, is stepping forward to prepare individuals to ‘come alongside’ needy individuals. Doug Smith brings credentials, compassion and a deep heart to this new endeavor. With training provided by this program, you can make a difference.”</p>
                                    <div class="blog-text text-center text-md-left">
                                        <div class="info-blog">
                                            <h4>Harold Ivan Smith, DMin, FT</h4>
                                        </div>
                                        <div class="blog-description mb-3">
                                            <p class="sub-heading">author of When Your People Are Grieving (2001) and When a Child You Love Is Grieving (2012).</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

            <svg class="left-square blog" viewBox="0 0 310 655" xmlns="http://www.w3.org/2000/svg">
                <rect  x = "0" y = "32" width = "1616" height = "1616" rx="48" ry="48" fill="#ffc107" transform = "rotate(135 100 245)"/>
            </svg>

            <svg class="right-square small-blog small-view" viewBox="0 0 312 600" xmlns="http://www.w3.org/2000/svg">
                <rect  x = "0" y = "32" width = "1616" height = "1616" rx="48" ry="48" fill="#ffc107" transform = "rotate(-45 310 100)"/>
            </svg>

        </section>

        <section id="contact" class="contact">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="main-heading text-black">Interested?<br />Let's Get In Touch</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-7">
                        <form class="contact-form" id="contact-form-data" onSubmit={this.handleSubmit.bind(this)} method="POST">
                            <div class="row mt-5">
                                <div class="col-sm-12" id="result"></div>
                            </div>
                                <div class="row">
                                    <div class="col-12 col-md-5">
                                    <div class="form-group">
                                        <input class="form-control" type="text" placeholder="Your Name" required  id="candidate_name" name="userName" value={this.state.name} onChange={this.onNameChange.bind(this)}/>
                                    </div>

                                    <div class="form-group">
                                        <input class="form-control" type="email" placeholder="Email Address*" required  id="user_email" name="userEmail" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                                    </div>

                                    <div class="form-group ">
                                        <input class="form-control" type="text" placeholder="Subject" id="user_subject" name="userSubject" value={this.state.subject} onChange={this.onNameChange.bind(this)}/>
                                    </div>
                                    </div>

                                    <div class="col-12 col-md-7">
                                        <div class="form-group ">
                                            <textarea class="form-control" placeholder="Your Message" required rows="7" id="user_message" name="userMessage" value={this.state.message} onChange={this.onMessageChange.bind(this)}></textarea>
                                        </div>
                                    </div>
                                </div>

                            <button type="button" class="btn btn-slider pink-btn rounded-pill w-100 contact_btn" id="submit_btn"><i class="fa fa-spinner fa-spin mr-2 d-none" aria-hidden="true"></i> <b>Send Message</b></button>
                        </form>
                    </div>

                    <div class="col-12 col-md-5 mt-5">
                        <div class="address-part ml-3">
                            <div class="address d-flex mb-4">
                                <div class="row">
                                    <div class="col-1">
                                        <FontAwesomeIcon icon={faMapMarkedAlt} />
                                    </div>
                                    <div class="col-lg-12 offset-lg-2" id="address">
                                        <p>12 Hidden Treasure Dr<br />Palm Coast 32137</p>
                                    </div>
                                </div>
                            </div>
                            <div class="address d-flex mb-4">
                                <div class="row">
                                    <div class="col-1">
                                        <FontAwesomeIcon icon={faPaperPlane} />
                                    </div>
                                    <div class="col-lg-12 offset-lg-2" id="email">
                                        <p>ron.serpliss@layministrytrainingcenter.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="plant1">
                            <div class="plant-contact">
                                <img src="../assets/img/contact-plant.png" alt="img" />
                            </div>
                            <div class="shadow-contact">
                                <img src="../assets/img/shadow-contact.png" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>

        {/* <!--        FOOTER SECTION ROW--> */}
                <div class="row footer">
                    <div class="col-12 col-md-5">
                        <ul class="footer_ul mb-50">
                            <li class="footer_list"><i class="lab la-facebook-f fb"></i></li>
                            <li class="footer_list"><i class="lab la-twitter twt"></i></li>
                            <li class="footer_list"><i class="lab la-google-plus gogle"></i></li>
                            <li class="footer_list"><i class="lab la-linkedin-in link"></i></li>
                            <li class="footer_list"><i class="lab la-instagram inst"></i></li>
                            <li class="footer_list"><i class="las la-envelope gmail"></i></li>
                        </ul>
                        <p class="info footer_text ml-3"><i class="fas fa-copyright"></i>2020 MegaOne. Made with love by themesindustry</p>

                    </div>
                </div>

            </div>
            <svg class="right-square contact-square" viewBox="0 0 150 300" xmlns="http://www.w3.org/2000/svg">
                <rect  x = "0" y = "32" width = "1616" height = "1616" rx="18" ry="18" fill="#000" transform = "rotate(-45 310 100)"/>
            </svg>
        </section>
      </div>
    );
  }
  onNameChange(event) {
    this.setState({name: event.target.value})
  }

  onEmailChange(event) {
    this.setState({email: event.target.value})
  }

  onMessageChange(event) {
    this.setState({message: event.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();

    axios({
      method: "POST", 
      url:"http://localhost:3002/send", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success') {
        alert("Message Sent."); 
        this.resetForm()
      } else if(response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }
}


export default App;
