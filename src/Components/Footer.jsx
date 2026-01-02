
import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer>
          <div className="footer-col">
            <h4>Politics</h4>
          </div>

          <div className="footer-col">
            <h4>Education</h4>
          </div>

          <div className="footer-col">
            <h4>Bussiness</h4>
          </div>


          <div className="footer-col">
            <h4>Follow us</h4>
            <div className="links">
              <a href="https://www.facebook.com/shivamsahu1577"><i className="fab fa-facebook-f"></i></a>
              <a href="https://x.com/Abhishe62526101"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="https://www.linkedin.com/in/abhishek-sahu-a5a3472a4/"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </footer>
      </>
    )
  }
}
