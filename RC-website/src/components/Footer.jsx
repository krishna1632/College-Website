function Footer() {

  return (
    <div className="container mx-auto border">
      <footer className="footer">

        <div id="left-container" className="content-box">

          <span id="college-image-section">
            <img className="College-logo ml-14" src="src/assets/RC logo white SVG.svg" alt="collegeLogo" />
            <h2 className="college_name">Ramanujan College</h2>
            <p className="ml-12">University Of Delhi</p>
            <p>NAAC Grade A++ With CGPA 3.71</p>
          </span>
          <p className="gmail">RAMANUJANCOLLEGE2010@GMAIL.COM</p>

          <p id="no">+91934738920328</p>

          <p id="Address">CR PARK MAIN ROAD BLOCK H , KALKAJI NEW DELHI 110019</p>



        </div>


        <div id="Middle-container" className="content-box">
          <h2 className="font-semibold text-2xl ">Quick Links</h2>
          <p>Departments</p>
          <p>Centre & Cells </p>
          <p>Anti-Ragging Policy</p>
          <p>FeedBack Form</p>
          <p>Switch to Dark Mode</p>
        </div>

        <div id="right-container" className="content-box">
          <h2 className="font-semibold text-2xl ">Quick Links</h2>
          <p>Departments</p>
          <p>Centre & Cells </p>
          <p>Anti-Ragging Policy</p>
          <p>FeedBack Form</p>
          <p>Switch to Dark Mode</p>
        </div>


        {/* <div class="container">
          <div class="footer-content">
            <div class="footer-section about">
              <h3>About Us</h3>
              <p>
                We are a team of passionate developers focused on delivering high-quality software solutions.
              </p>
            </div>
            <div class="footer-section links">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div class="footer-section contact">
              <h3>Contact Us</h3>
              <p>Email: info@example.com</p>
              <p>Phone: +123 456 7890</p>
            </div>
          </div>
          <div class="footer-bottom">
            <p>&copy; 2024 Your Company Name. All rights reserved.</p>
          </div>
        </div> */}
      </footer>
    </div>




  )
}

export default Footer;