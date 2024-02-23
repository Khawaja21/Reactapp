import React from "react";
import { render } from "react-dom";
// import ReactDOM from "react-dom";
// import { ReactDOM } from "react-dom";
import './index.css';       // Import your CSS file


//  card2
const cd2 = {
  textAlign: 'center',
  marginTop: '10rem',
  marginBottom: '5rem'
};

const sec1 ={
  display: 'grid',
  gridTemplatecolumns: 'repeat(1, 1fr)',
  gap: '20px',
  textAlign: 'center',
  marginBottom: '60px',
  marginBottom: '60px',
marginRight: 'auto',
marginLeft: 'auto',
maxWidth: '1200px' 
};
const style = {
  otHeadingH2: {
    color: '#222',
    marginBottom: '24px'
  }
};

// card1
const styles = {
  car1: {
    '@media (min-width: 600px)': {
      gridTemplateColumns: 'repeat(2, 1fr)'
    },
    '@media (min-width: 900px)': {
      gridTemplateColumns: 'repeat(3, 1fr)'
    }
  }
};

// Footer
const footerWrapper = {
  backgroundColor: '#0489f1',
  marginTop: '90px',
   width: '100%',
maxWidth: '1540px', 
marginLeft: 'auto', 
marginRight: 'auto'
// height: '22rem'
};


render(
  

  <>
  <div>

         {/* navBar1 */}
         <section>
         <div className="dj">
                {/* <!-- Social Icons --> */}
                <div className="ww">
                    <a className="ico" href="https://twitter.com/logigates" target="_blank">
                        {/* <!-- <span class="elementor-screen-only">Twitter</span> --> */}
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a className="ico" href="https://www.facebook.com/Logigatestech/" target="_blank">
                        {/* <!-- <span class="elementor-screen-only">Facebook-f</span> --> */}
                        // <i class="fab fa-facebook"></i>
                         <i className="fab fa-facebook-f"></i>

                    </a>
                    <a className="ico" href="https://www.linkedin.com/company/77658923/admin/feed/posts/" target="_blank">
                        {/* <!-- <span class="elementor-screen-only">Linkedin-in</span> --> */}
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
                {/* <!-- Contact Icons --> */}
                <div className="rr">
                    <a className="fo" href="tel:+966563398165">
                        <i aria-hidden="true" className="fas fa-phone-alt"></i>
                        <span className="elementor-icon-list-text">+923314578784</span>
                    </a>
                    <a className="fo"  href="mailto:info@logigates.com">
                        <i aria-hidden="true" className="fas fa-envelope"></i>
                        <span className="elementor-icon-list-text" style={{margin:'2px'}}>info@logigates.com</span>
                    </a>
                </div>
                {/* <!-- Search Form --> */}
                <div className="ss">
                    <div className="octf-search octf-btn-cta">
                        <div className="toggle-search octf-cta-icons">
                            {/* <!-- <i class="flaticon-search"></i> --> */}
                            {/* <!-- <i class="fa-solid fa-magnifying-glass"></i> --> */}
                            {/* <i class='bx bx-search'></i> */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="27" height="27" fill="white">
                                <path d="M21.71 20.29l-4.57-4.57A7.93 7.93 0 0 0 18 10c0-4.41-3.59-8-8-8s-8 3.59-8 8 3.59 8 8 8c1.61 0 3.09-.48 4.34-1.29l4.57 4.57a1 1 0 0 0 1.42-1.42zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
                                <path fill="none" d="M0 0h24v24H0z"/>
                            </svg>
                        </div>
                        <div className="h-search-form-field">
                            <div className="h-search-form-inner">
                                <form role="search" method="get" className="search-form" action="https://logigates.com/en/">
                                    <label>
                                        <span className="screen-reader-text">Search for:</span>
                                        <input type="search" className="search-field" placeholder="Search …" value="" name="s"/>
                                    </label>
                                    <button type="submit" className="search-submit">
                                        {/* <!-- <i class="flaticon-search"></i> --> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="27" height="27" fill="white">
                                            <path d="M21.71 20.29l-4.57-4.57A7.93 7.93 0 0 0 18 10c0-4.41-3.59-8-8-8s-8 3.59-8 8 3.59 8 8 8c1.61 0 3.09-.48 4.34-1.29l4.57 4.57a1 1 0 0 0 1.42-1.42zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
                                            <path fill="none" d="M0 0h24v24H0z"/>
                                        </svg>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </section>
            
            {/* navbar2 */}
               <header className="site-header sticky-top">
               <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                {/* <!-- <a class="navbar-brand" href="#">Navbar</a> --> */}
                <nav className="navbar bg-body-tertiary">
                  <div className="container">
                    <a className="navbar-brand" href="https://logigates.com/en/">
                      <img src="https://logigates.com/en/wp-content/uploads/2020/09/WhatsApp_Image_2023-06-05_at_10.45.12_PM__1_-removebg-preview-4.png"  alt="Logigates" width={240} height={80} style={{width: '86%',}}/>
                    </a>
                  </div>
                </nav>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="https://logigates.com/en/">Home</a>
                    </li>
                    {/* <!-- Solutions --> */}
                    <li className="nav-item dropdown">
                      <a className="nav-link active dropdown-toggle" href="https://logigates.com/en/solutions/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Solutions
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="https://logigates.com/en/rfid-tunnel/">RFID Tunnel</a></li>
                        <li><a className="dropdown-item" href="https://logigates.com/en/rfid-in-library-management/">                    SMART Document/ Library Management</a></li>
                        <li><a className="dropdown-item" href="https://logigates.com/en/rfid-in-warehouse-management/">                    RFID in Warehouse Management</a></li>
                        <li><a className="dropdown-item" href="https://logigates.com/en/rfid-in-fashion-retail/">RFID in Fashion Retail</a></li>
                        <li><a className="dropdown-item" href="https://logigates.com/en/smart-display/">                    Smart Display</a></li>
                        <li><a className="dropdown-item" href="https://logigates.com/en/rfid-epos/"> RFID EPOS</a></li>
                        <li><a className="dropdown-item" href="https://logigates.com/en/asset-tracking/">Asset Tracking
      </a></li>
                        <li><a className="dropdown-item" href="https://logigates.com/en/ai-parcel-sorting/">                                        AI Parcel Sorting
      </a></li>
                        <li><a className="dropdown-item" href="https://logigates.com/en/ai-product-inspection/">                                        AI Product Inspection
      </a></li>
      <li><a className="dropdown-item" href="https://logigates.com/en/laundry-tracking/">Laundry Tracking
      </a></li>
      <li><a className="dropdown-item" href="https://logigates.com/en/ai-parking-management/"> AI Parking Management
      </a></li>
      <li><a className="dropdown-item" href="https://logigates.com/en/self-services-library/">Self Services Library
      </a></li>
      <li><a className="dropdown-item" href="https://logigates.com/en/access-management/">Access Management
      </a></li>
      <li><a className="dropdown-item" href="https://logigates.com/en/manless-reatil-store/">Manless Reatil Store
      </a></li>
      <li><a className="dropdown-item" href="https://logigates.com/en/industrial-automation-solutions/">Industrial Automation Solutions
      </a></li>
      <li><a className="dropdown-item" href="https://logigates.com/en/ai-asset-auditing/">AI Asset Auditing
      </a></li>
      <li><a className="dropdown-item" href="https://logigates.com/en/robotics/">Robotics
      </a></li>
                      </ul>
                    </li>
                    {/* <!-- Industries --> */}
                    <li className="nav-item dropdown">
                      <a className="nav-link active dropdown-toggle" href="https://logigates.com/en/industries/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Industries
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="https://logigates.com/en/retail/">Retail</a></li>
                        <li><a className="dropdown-item" href="https://logigates.com/en/textile/">Textile</a></li>
                        <li><a className="dropdown-item" href="https://logigates.com/en/laundry/">Laundry</a></li>
                        <li><a className="dropdown-item" href="https://logigates.com/en/f-b/">F & B</a></li>
                        <li><a className="dropdown-item" href="https://logigates.com/en/supply-chain/">Supply Chain</a></li>
                        <li><a className="dropdown-item" href="https://logigates.com/en/textile/">Textile</a></li>
                        <li><a className="dropdown-item" href="https://logigates.com/en/petrochemicals/">Petrochemicals</a></li>
                        <li><a className="dropdown-item" href="https://logigates.com/en/agriculture/">Agriculture</a></li>
                        <li><a className="dropdown-item" href="https://logigates.com/en/oil-gas/">Oil & Gas</a></li>
      <li><a className="dropdown-item" href="https://logigates.com/en/healthcare/">Healthcare</a></li>
      <li><a className="dropdown-item" href="https://logigates.com/en/poultry/">Poultry</a></li>
      <li><a className="dropdown-item" href="https://logigates.com/en/pharma/">Pharma</a></li>
      <li><a className="dropdown-item" href="https://logigates.com/en/automotive-aerospace/">Automotive & Aerospace</a></li>
      <li><a className="dropdown-item" href="https://logigates.com/en/munufacturing/">Manufacturing</a></li>
      <li><a className="dropdown-item" href="https://logigates.com/en/education/">Education</a></li>
                        {/* <!-- <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li> --> */}
                      </ul>
                    </li>
                    {/* <!-- Services --> */}
                    <li className="nav-item dropdown">
                      <a className="nav-link active dropdown-toggle" href="https://logigates.com/en/portfolio-grid/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Services
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="https://logigates.com/en/rfid-and-iot/">RFID</a></li>
                        <li><a className="dropdown-item" href="https://logigates.com/en/ai-and-ml/">Artificial Intelligence</a></li>
                        <li><a className="dropdown-item" href="https://logigates.com/en/iot/">IOT</a></li>
                        <li><a className="dropdown-item" href="https://logigates.com/en/digitization-solution/">Digitization Solution</a></li>
                        <li><a className="dropdown-item" href="https://logigates.com/en/customized-tech-hardware/">Customized Tech Hardware</a></li>
                        <li><a className="dropdown-item" href="https://logigates.com/en/rfid-consultation/">RFID Consultation</a></li>
                        <li><a className="dropdown-item" href="https://logigates.com/en/vr-development/">VR Development</a></li>
                        <li><a className="dropdown-item" href="https://logigates.com/en/technical-support-2/">Technical Support</a></li>
                        <li><a className="dropdown-item" href="https://logigates.com/en/industrial-automation/">Industrial Automation</a></li>
      <li><a className="dropdown-item" href="https://logigates.com/en/autonation-consultancy/">Automation Consultancy</a></li>
      <li><a className="dropdown-item" href="https://logigates.com/en/software-developement-2/">Software Developement</a></li>
      
                        {/* <!-- <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li> --> */}
                      </ul>
                    </li>
                    {/* <!-- <li class="nav-item">
                      <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li> --> */}
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="https://logigates.com/en/blogs/">Blogs</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="https://logigates.com/en/company/">Company</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="https://logigates.com/en/contacts/">Contacts</a>
                    </li>
                  </ul>
                  <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{display: 'none'}}/>
                    <button className="btn" style={
{                    display: 'inline-block',
                     padding: '6px 22px',
                    backgroundColor: '#07acf5',
                    color: '#fff',
                    textDecoration: 'none',
                    borderRadius: '5px',
                    transition: 'transform 0.3s ease-in-out',
                    marginRight: '5rem'}} type="submit">Book Demo</button>
                  </form>
                </div>
              </div>
            </nav>
               </header>


         {/* sliders */}
        <section>
        <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="carousel-img" src="https://logigates.com/en/wp-content/uploads/2023/07/0985436e-fc00-49cd-8341-e64a33f17a7b-scaled.jpg" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h7>TRAINING & KEYNOTES</h7>
                        <h1>Automation Consultancy</h1>
                        <p>We Provide High Performance Networking Solutions for your IT business.</p>
                        <button className="btn btn-primary" type="button">Contact us</button>
                    </div>
                </div>
                {/* <!-- Add other carousel items similarly --> */}
                <div className="carousel-item">
                    <img width="750" height="695" src="https://logigates.com/en/wp-content/uploads/2023/07/334e2e7d-6391-4bec-a960-d73cfdcca945.jpg" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                      <h7>STRATEGIC TRANSFORMATION</h7>
                      <h1>RFID Tunnel</h1>
                      <p>Impact diverse workfores for better financial Performance</p>
                      <button className="btn btn-primary" type="button">Contact us</button>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img width="750" height="695" src="https://logigates.com/en/wp-content/uploads/2023/07/873836a2-cf96-48bc-ac5a-924cf252a38d.jpg" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                      <h1>Smart Doucument/Library management</h1>
                      <p>Knowledge exchange program for Socio- <br /> economic development of domestic and international communities</p>
                      <button className="btn btn-primary" type="button">Contact us</button>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img width="750" height="695" src="https://logigates.com/en/wp-content/uploads/2023/07/RFID-in-Warehouse-21.png" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                      <h7>STRATEGIC TRANSFORMATION</h7>
                      <h1>
                        RFID In Warehouse Management
                      </h1>
                      <p>Our Strategy consultation for rethinking current operating models</p>
                      <button className="btn btn-primary" type="button">Contact us</button>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img width="750" height="695" src="https://logigates.com/en/wp-content/uploads/2023/07/RFID-in-Retail.jpg" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                      <h1>RFID In Fashion Retail </h1>
                      <p>Accelerate transformation by using the resources and capabilities of the organisations</p>
                      <button className="btn btn-primary" type="button">Contact us</button>
                    </div>
                  </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </section>

           {/* company */}
           <section>
           <div className="ee">
            <div>
                <div className="contain">
                    <div className="opHeading">
                        <span>// about company</span>
                        <h2 className="mainHead"><strong>Your Partner in <br /> Digital Transformation</strong></h2>
                    </div>
                </div>
                <div>
                    <p>Logigates Technologies is a dynamic and forward-thinking technology company specializing in the development and implementation of innovative automation solutions. With our expertise in Radio Frequency Identification (RFID), Internet of Things (IoT), Industrial Internet of Things (IIoT), and Artificial Intelligence (AI), we are at the forefront of revolutionizing supply chain automation. As one of the leading solution providers in the industry, we offer end-to-end solutions encompassing cutting-edge hardware, advanced software, and seamless integration with existing client systems.</p>
                </div>
                <section className="gg">
                    <div>
                        <div className="iconBoxS1">
                            <div className="iconMain">
                                {/* <span className="flaticon-medal"></span> */}
                                <i class='bx bx-medal' style={{color:'#7141b1',fontSize:'4rem'}}></i>

                            </div>
                            <h5>Expertise</h5>
                            <div className="lineBox"></div>
                            <p>We've delivered multiple projects across different industries "Retail, Warehouse and Pharmaceutical etc, and benefiting them.</p>
                        </div>
                    </div>
                    <div>
                        <div className="iconBoxS1">
                            <div className="iconMain">
                                {/* <span className="flaticon-gear"></span> */}
                                <i class='bx bx-cog' style={{color: '#7141b1',fontSize:'4rem'}}></i>
                            </div>
                            <h5>Projects</h5>
                            <div className="lineBox"></div>
                            <p>We've a team of IOT, IIOT, AI , Machine Learning, Robotics, Software Engineers and Business Experts and Automation Consultants.</p>
                        </div>
                    </div>
                </section>
            </div>
            <div className="cb">
            <img width={1024} height={568} src="https://logigates.com/en/wp-content/uploads/2023/06/what-is-industry-4.0-1024x568.jpg" className="lazyLoaded" alt="#" decoding="async" />

            </div>
        </div>
           </section>


          {/* card1 */}
          <section>
            <div className="su">
            <section className="ta">
            <div className="oHeading">
                    <span>// Our Solutions</span>
                    <h2 className="mainHeading"><strong>Most Demanding Solutions</strong></h2>
                </div>

            </section>
            <section className="car1" style={styles.car1} >
            <div>
                    <a className="techBox" href="https://logigates.com/en/rfid-in-asset-management/" target="_blank">
                        <div className="iconMain">
                            <noscript>
                                <img decoding="async" src="https://logigates.com/en/wp-content/uploads/2023/06/financial-1-2.png" alt="Asset Management"/>
                            </noscript>
                            <img className=" ls-is-cached lazyloaded" decoding="async" src="https://logigates.com/en/wp-content/uploads/2023/06/financial-1-2.png" data-src="https://logigates.com/en/wp-content/uploads/2023/06/financial-1-2.png" alt="Asset Management"/>
                        </div>
                        <h5>Asset Management</h5>
                    </a>
                </div>
                <div>
                    <a className="techBox" href="https://logigates.com/en/vehicle-access/">
                        <div className="iconMain">
                            <noscript>
                                <img decoding="async" src="https://logigates.com/en/wp-content/uploads/2023/06/cargo-truck-1-1.png" alt="Vehicle Management"/>
                            </noscript>
                            <img className=" lazyLoaded" decoding="async" src="https://logigates.com/en/wp-content/uploads/2023/06/cargo-truck-1-1.png" data-src="https://logigates.com/en/wp-content/uploads/2023/06/cargo-truck-1-1.png" alt="Vehicle Management"/>
                        </div>
                        <h5>Vehicle Management</h5>
                    </a>
                </div>
                <div>
                    <a className="techBox" href="https://logigates.com/en/rfid-in-library-management/">
                        <div className="iconMain">
                            <noscript>
                                <img decoding="async" src="https://logigates.com/en/wp-content/uploads/2023/06/learning-1.png" alt="Library Management"/>
                            </noscript>
                            <img className=" lazyLoaded" decoding="async" src="https://logigates.com/en/wp-content/uploads/2023/06/learning-1.png" data-src="https://logigates.com/en/wp-content/uploads/2023/06/learning-1.png" alt="Library Management"/>
                        </div>
                        <h5>Library Management</h5>
                    </a>
                </div>
                <div>
                    <a className="techBox" href="https://logigates.com/en/rfid-in-access-management/" target="_blank" style={{marginBottom:'7rem'}}>
                        <div className="iconMain">
                            <noscript>
                                <img decoding="async" src="https://logigates.com/en/wp-content/uploads/2023/06/financial-1-2.png" alt="Access Management"/>
                            </noscript>
                            <img className=" lazyLoaded" decoding="async" src="https://logigates.com/en/wp-content/uploads/2023/06/financial-1-2.png" data-src="https://logigates.com/en/wp-content/uploads/2023/06/financial-1-2.png" alt="Access Management"/>
                        </div>
                        <h5>Access Management</h5>
                    </a>
                </div>
                <div>
                    <a className="techBox" href="https://logigates.com/en/rfid-in-warehouse-management/">
                        <div className="iconMain">
                            <noscript>
                                <img decoding="async" src="https://logigates.com/en/wp-content/uploads/2023/07/warehouse2.png" alt="Warehouse Management"/>
                            </noscript>
                            <img className=" lazyLoaded" decoding="async" src="https://logigates.com/en/wp-content/uploads/2023/07/warehouse2.png" data-src="https://logigates.com/en/wp-content/uploads/2023/07/warehouse2.png" alt="Warehouse Management"/>
                        </div>
                        <h5>Warehouse Management</h5>
                    </a>
                </div>
                <div>
                    <a className="techBox" href="https://logigates.com/en/rfid-in-fashion-retail/">
                        <div className="iconMain">
                            <noscript>
                                <img decoding="async" src="https://logigates.com/en/wp-content/uploads/2023/07/entrepreneur1.png" alt="Fashion Retail"/>
                            </noscript>
                            <img className=" lazyLoaded" decoding="async" src="https://logigates.com/en/wp-content/uploads/2023/07/entrepreneur1.png" data-src="https://logigates.com/en/wp-content/uploads/2023/07/entrepreneur1.png" alt="Fashion Retail"/>
                        </div>
                        <h5>Fashion Retail</h5>
                    </a>
                </div>

            </section>
            </div>
          </section>

          {/* card2 */}
    <div style={cd2}>
            <div className="otHeading">
                <span>// our service</span>
                <h2 className="mainHeading"><strong>One-Stop Destination for <br /> Process Automation  </strong></h2>
            </div>
        </div>
        <section className="sec1" style={sec1}>
          <div className="elementorWidgtcontainer">
          <div className="iconBox s2 s2">
          <div className="iconMain">
          <noscript>
            <img decoding="async" src="https://logigates.com/en/wp-content/uploads/2023/07/rfid1.png" alt="RFID" />
          </noscript>
          <img className="lazyLoaded" decoding= "async" src="https://logigates.com/en/wp-content/uploads/2023/07/rfid1.png" dataSrc="https://logigates.com/en/wp-content/uploads/2023/07/rfid1.png" alt="RFID" />

          </div>
          <div className="contentBox">
            <h5> <a href="https://logigates.com/en/rfid-and-iot/">RFID</a></h5>
            <p>With our extensive experience and expertise in RFID technology, we offer a wide range of solutions tailored to your specific business needs.</p>
          </div>

          </div>

          </div>
          <div className="elementorWidgtcontainer">
                    <div className="iconBoxs2s2">
                        <div class="iconMain">
                            <noscript>
                                <img decoding="async" src="https://logigates.com/en/wp-content/uploads/2023/07/iot2.png" alt="IOT/IIOT"/>
                            </noscript>
                            <img className=" lazyLoaded" decoding="async" src="https://logigates.com/en/wp-content/uploads/2023/07/iot2.png" data-src="https://logigates.com/en/wp-content/uploads/2023/07/iot2.png" alt="IOT/IIOT"/>
                        </div>
                        <div className="contentBox">
                            <h5><a href="https://logigates.com/en/iot-solutions/">IOT/IIOT</a></h5>
                            <p>By leveraging the power of IoT/IIOT organizations can unlock a new realm of possibilities and pave the way for a smarter and more connected future.</p>
                        </div>
                    </div>
                </div>
                <div className="elementorWidgtcontainer">
                    <div className="iconBoxs2s2">
                        <div className="iconMain">
                            <noscript>
                                <img decoding="async" src="https://logigates.com/en/wp-content/uploads/2023/07/chip1.png" alt="Artificial Intelligence"/>
                            </noscript>
                            <img className=" lazyLoaded" decoding="async" src="https://logigates.com/en/wp-content/uploads/2023/07/chip1.png" data-src="https://logigates.com/en/wp-content/uploads/2023/07/chip1.png" alt="Artificial Intelligence"/>
                        </div>
                        <div className="contentBox">
                            <h5>
                                <a href="https://logigates.com/en/ai-and-ml/">Artificial Intelligence</a>
                            </h5>
                            <p>We specialize in harnessing the potential of AI to drive innovation, optimize processes, and elevate the performances.</p>
                        </div>
                    </div>
                </div>
                <div className="elementorWidgtcontainer">
                    <div className="iconBoxs2s2">
                        <div className="iconMain">
                            <noscript>
                                <img decoding="async" src="https://logigates.com/en/wp-content/uploads/2023/07/engineer1.png" alt="Software Developement"/>
                            </noscript>
                            <img className=" lazyLoaded" decoding="async" src="https://logigates.com/en/wp-content/uploads/2023/07/engineer1.png" data-src="https://logigates.com/en/wp-content/uploads/2023/07/engineer1.png" alt="Software Developement"/>
                        </div>
                        <div className="contentBox">
                            <h5>
                                <a href="https://logigates.com/en/software-development/">Software Developement</a>
                            </h5>
                            <p>With our expertise in cutting-edge technologies, we create software applications that empower your organization.</p>
                        </div>
                    </div>
                </div>
                <div className="elementorWidgtcontainer">
                    <div className="iconBoxs2s2">
                        <div className="iconMain">
                            <noscript>
                                <img decoding="async" src="https://logigates.com/en/wp-content/uploads/2023/07/automated1.png" alt="Automation Counsultancy"/>
                            </noscript>
                            <img className=" lazyLoaded" decoding="async" src="https://logigates.com/en/wp-content/uploads/2023/07/automated1.png" data-src="https://logigates.com/en/wp-content/uploads/2023/07/automated1.png" alt="Automation Counsultancy"/>
                        </div>
                        <div className="contentBox">
                            <h5>
                                <a href="https://logigates.com/en/autonation-consultancy/">Automation Counsultancy</a>
                            </h5>
                            <p>We provide comprehensive automation consultancy services to help businesses optimize their processes and achieve excellence.</p>
                        </div>
                    </div>
                </div>
                <div className="elementorWidgtcontainer">
                    <div className="iconBoxs2s2">
                        <div className="iconMain">
                            <noscript>
                                <img decoding="async" src="https://logigates.com/en/wp-content/uploads/2023/07/technical-support1.png" alt="Technical Support"/>
                            </noscript>
                            <img className=" lazyLoaded" decoding="async" src="https://logigates.com/en/wp-content/uploads/2023/07/technical-support1.png" data-src="https://logigates.com/en/wp-content/uploads/2023/07/technical-support1.png" alt="Technical Support"/>
                        </div>
                        <div className="contentBox">
                            <h5>
                                <a href="https://logigates.com/en/technical-support-2/">Technical Support</a>
                            </h5>
                            <p>With our comprehensive range of support, we ensure the availability and optimal performance of your vendor's hardware and software environment.</p>
                        </div>
                    </div>
                </div>
        </section>

        {/* query */}
        <section className="sectionWithBackground">
          <div>
            <div className="elementorCont">
                          <div className="ekitWidCon">
                                  <div className="ekit_heading_separetor_wraper ekit_heading_elementskit-border-divider">
                                      <div className="elementskitBorderDivider">
                                      </div>
                                  </div>
                          </div>
                      </div>
                      <section className="pi">
                      <div className="elementorBackgroundOverlay"></div>
                      <div className="columnGapDefault">
                          <div>
                              <div className="elementPopulated">
                                      <div className="elementorCont">
                                          <div className="ekitWidCon">
                                              <div>
                                                  <h2 className="ekit-heading--title elementskit-section-title ">If you have any Query Then <span><span></span></span></h2>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="elementorCont">
                                          <div className="ekitWidCon">
                                              <div className="ekitBtnWraper">
                                                   <a href="https://logigates.com/en/contacts/" className="elementskitBtn  whitespace--normal"> Contact Us </a>
                                                  </div>
                                              </div>
                                          </div>
                                  </div>
                              </div>
                          </div>
                      </section>
          </div>
        </section>

        {/* Footer */}
        <footer className="footerWrapper" style={footerWrapper}>
        <div className="cb-footer cb-col-100 cb-col">
                <div className="cb-ftr-cntnr">
                    {/* (unchanged content) */}
                    <div className="cb-col-25 cb-col" style={{marginTop:'1rem'}}>
                        <div className="text-left cb-font-16 text-bold">
                            <h3 style={{marginLeft: '26px'}}>
                                Get In Touch
                            </h3>        
                            {/* MOBILE SITE &amp; APPS  */}
                        </div>
                        <ul className="cbFtrUl" style={{listStyleType: 'none'}}>
                            <li className="cb-ftr-lst">
                                <a href="" className="text-white" title="+923314578784">
                                    <span className="cb-mobile-site cb-ico">
                                    </span>
                                    <i aria-hidden="true" className="fas fa-phone-alt"></i>
                                    <span className="cb-footer-list-rt">+923314578784</span>
                                </a>
                            </li>
                            <li className="cb-ftr-lst">
                                <a href="" className="text-white" title="info@logigates.com">
                                    <span className="cb-mobile-site cb-ico">
                                    </span>
                                    {/* <i aria-hidden="true" className="icon icon-message-2"></i> */}
                                    <i aria-hidden="true" class="fas fa-envelope"></i>
                                    <span className="cb-footer-list-rt">info@logigates.com</span>
                                </a>
                            </li>
                            <li class="cb-ftr-lst">
                                <a href="" className="text-white">
                                    <span className="cb-mobile-site cb-ico">
                                    </span>
                                    <span className="cb-footer-list-rt">_________________________</span>
                                </a>
                            </li>
                            <li className="cb-ftr-lst">
                                <a className="text-white" target="_blank" rel="noreferrer">
                                    <span className="cb-app-android cb-ico">
                                    </span>
                                    <i aria-hidden="true" className="fas fa-map-marker-alt"></i>
                                    <span className="cb-footer-list-rt">Pakistan</span>
                                </a>
                            </li>
                            <li className="cb-ftr-lst">
                                <a className="text-white" target="_blank" rel="noreferrer">
                                    <span className="cb-app-ios cb-ico">
                                    </span>
                                    <i aria-hidden="true" className="fas fa-map-marker-alt"></i>
                                    <span className="cb-footer-list-rt">Saudi Arabia</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="cb-col-25 cb-col" style={{marginTop:'1rem'}}>
                        <div className="text-left cb-font-16 text-bold"><h3 style={{marginLeft: '26px'}}>Quick links</h3></div>
                        <ul className="cbFtrUl" style={{listStyleType: 'none'}}>
                            <li className="cb-ftr-lst">
                                <a className="text-white" title="Home" href="https://logigates.com/en/?v=1703498827" target="_blank" rel="noreferrer">
                                    <span className="cb-social-fb cb-ico"></span>
                                    <span className="cb-footer-list-rt">Home</span>
                                </a>
                            </li>
                            <li className="cb-ftr-lst">
                                <a className="text-white" title="Solution" href="#" target="_blank" rel="noreferrer">
                                    <span className="cb-social-twitter cb-ico">
        
                                    </span>
                                    <span className="cb-footer-list-rt">Solution</span>
                                </a>
                            </li>
                            <li className="cb-ftr-lst">
                                <a className="text-white" title="Industries" href="#" target="_blank" rel="noreferrer">
                                    <span className="cb-social-ytbe cb-ico">
        
                                    </span>
                                    <span className="cb-footer-list-rt">Industries</span>
                                </a>
                            </li>
                            <li className="cb-ftr-lst">
                                <a className="text-white" title="Services" href="#" target="_blank" rel="noreferrer">
                                    <span className="cb-social-pinterest cb-ico">
        
                                    </span>
                                    <span className="cb-footer-list-rt">Services</span>
                                </a>
                            </li>
                            <li className="cb-ftr-lst">
                                <a className="text-white" title="Blogs" href="#" target="_blank" rel="noreferrer">
                                    <span className="cb-social-pinterest cb-ico">
        
                                    </span>
                                    <span className="cb-footer-list-rt">Blogs</span>
                                </a>
                            </li>
                            <li className="cb-ftr-lst">
                                <a className="text-white" title="Company" href="#" target="_blank" rel="noreferrer">
                                    <span className="cb-social-pinterest cb-ico">
        
                                    </span>
                                    <span className="cb-footer-list-rt">Company</span>
                                </a>
                            </li>
                            <li className="cb-ftr-lst">
                                <a className="text-white" title="Contacts" href="#" target="_blank" rel="noreferrer">
                                    <span className="cb-social-pinterest cb-ico">
        
                                    </span>
                                    <span className="cb-footer-list-rt">Contacts</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="cb-col-25 cb-col" style={{marginTop:'1rem'}}>
                        <div className="text-left cb-font-16 text-bold"><h3 style={{marginLeft: '26px',}}>Services</h3></div>
                        <ul className="cbFtrUl" style={{listStyleType: 'none'}}>
                            <li className="cb-ftr-lst">
                                <a className="text-white" title="RFID" href="/RFID">RFID</a>
                            </li>
                            <li className="cb-ftr-lst">
                                <a className="text-white" title="Artificial Intelligence" href="/info/Artificial Intelligence">Artificial Intelligence</a>
                            </li>
                            <li className="cb-ftr-lst">
                                <a className="text-white" rel="nofollow" title="IOT" href="/info/IOT">IOT</a>
                            </li>
                            <li className="cb-ftr-lst">
                                <a className="text-white" rel="nofollow" title="digitization solution" href="/info/digitization solution">digitization solution</a>
                            </li>
                            <li className="cb-ftr-lst">
                                <a className="text-white" title="Customised Solution" href="/Customisted solution" rel="noopener noreferrer">Customised Solution</a></li>
                                <li className="cb-ftr-lst">
                                    <a className="text-white" title="Industrial Automation" href="/Industrial Automation" rel="noopener noreferrer">industrial Automation</a></li>
                                    <li className="cb-ftr-lst">
                                        <a className="text-white" title="Customized Tech Hardware" href="/Customized Tech Hardware" rel="noopener noreferrer">Customised Tech Hardware</a></li>
                                        <li className="cb-ftr-lst">
                                            <a className="text-white" title="Software Development" href="/Software Development" rel="noopener noreferrer">Software Development</a></li>
                                            <li className="cb-ftr-lst">
                                                <a className="text-white" title="RFID consultation" href="/RFID consultation" rel="noopener noreferrer">RFID consultation</a></li>
                                                <li className="cb-ftr-lst">
                                                    <a className="text-white" title="VR Development" href="/VR Development" rel="noopener noreferrer">VR Development</a></li>
                            </ul>
                        </div>
                        <div className="cb-col-25 cb-col" style={{marginTop:'1rem'}}>
                            <div className="text-left cb-font-16 text-bold"><h3>FOLLOW US</h3></div>
                            {/* <ul className="cb-ftr-ul" style={{display: 'flex', listStyleType: 'none',gap: '11px',
                            marginLeft: '-31px'}}>
                                <li className="cb-ftr-lst">
                                    <a className="text-white" title="Facebook" href="https://www.facebook.com/Logigatestech/"target="_blank" rel="noreferrer">
                                        <span className="cb-social-fb cb-ico">
                                        </span>
                                        <span className="cb-footer-list-rt">
                                            facebook</span>
                                        </a>
                                    </li>
                                      <li className="cb-ftr-lst">
                                        <a className="text-white" title="Youtube" href="https://www.youtube.com/@logigatestechnologies5864" target="_blank" rel="noreferrer">
                                            <span className="cb-social-ytbe cb-ico"></span>
                                            <span className="cb-footer-list-rt">youtube</span>
                                        </a>
                                    </li>
                                    <li className="cb-ftr-lst">
                                        <a className="text-white" title="Linkedin" href="https://www.linkedin.com/company/logigates-technologies/mycompany/?viewAsMember=true" target="_blank" rel="noreferrer">
                                            <span className="cb-social-Ldn cb-ico"></span>
                                            <span className="cb-footer-list-rt">Linkedin</span>
                                        </a>
                                    </li>
                                </ul> */}
                                {/* <!-- Social Icons --> */}
      <ul className="cl">
          <li className="cb-ftr-lst">
              <a className="text-white" title="Facebook" href="https://www.facebook.com/Logigatestech/" target="_blank" rel="noreferrer">
                  <span className="cb-social-fb cb-ico">
                      {/* <!-- Add Facebook icon here --> */}
                      <i className="fab fa-facebook"></i>
                  </span>
                   {/* <span className="cb-footer-list-rt">Facebook</span> */}
              </a>
          </li>
          <li className="cb-ftr-lst">
              <a className="text-white" title="Youtube" href="https://www.youtube.com/@logigatestechnologies5864" target="_blank" rel="noreferrer">
                  <span className="cb-social-ytbe cb-ico">
                       {/* Add Youtube icon here */}
                      <i className="fab fa-youtube"></i>
                  </span>
                  {/* <span class="cb-footer-list-rt">Youtube</span> */}
              </a>
          </li>
          <li className="cb-ftr-lst">
              <a className="text-white" title="Linkedin" href="https://www.linkedin.com/company/logigates-technologies/mycompany/?viewAsMember=true" target="_blank" rel="noreferrer">
                  <span className="cb-social-Ldn cb-ico">
                       {/* Add Linkedin icon here  */}
                      <i className="fab fa-linkedin"></i>
                  </span>
                   {/* <span className="cb-footer-list-rt">Linkedin</span> */}
              </a>
          </li>
      </ul>
                            </div>
                </div>
            </div>
        </footer>

        {/* Footer 2 */}
        <section>
        <div className="model">
        <div className="theeLogo">
            <a href="https://logigates.com/en/">
                <noscript>
                    <img src="https://logigates.com/en/wp-content/uploads/2020/09/WhatsApp_Image_2023-06-05_at_10.45.12_PM__1_-removebg-preview-4.png" alt="Logigates"/>
                </noscript>
                <img className="ls-is-cached lazyloaded" src="https://logigates.com/en/wp-content/uploads/2020/09/WhatsApp_Image_2023-06-05_at_10.45.12_PM__1_-removebg-preview-4.png" data-src="https://logigates.com/en/wp-content/uploads/2020/09/WhatsApp_Image_2023-06-05_at_10.45.12_PM__1_-removebg-preview-4.png" alt="Logigates"/>
            </a>
        </div>
        <div className="te">
            <p style={{color:'#6d6d6d'}}>Copyright © 2023 <strong style={{color:'black'}}>Logigates Technologies</strong>. All Rights Reserved.</p>
        </div>
    </div>
        </section>

  </div>

    
  </>
  ,
  document.getElementById('root'));
  
  
  
  
