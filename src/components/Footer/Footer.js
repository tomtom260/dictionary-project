import React from "react"
import "./Footer.css"

function Footer() {
  return (
    <footer>
      <div className="footer__left">
        <div className="footer__col">
          <h2>Lessons</h2>
          <p className="footer__items">Learn English</p>
          <p className="footer__items">Learn French</p>
          <p className="footer__items">Learn Spanish</p>
          <p className="footer__items">Learn Amharic</p>
        </div>
        <div className="footer__col">
          <h2>Support</h2>
          <p className="footer__items">Donate</p>
          <p className="footer__items">Volunteer</p>
          <p className="footer__items">Help</p>
        </div>
        <div className="footer__col">
          <h2>Community</h2>
          <p className="footer__items">Add Dicitonary Entries</p>
          <p className="footer__items">Translate English</p>
          <p className="footer__items">Translate French</p>
          <p className="footer__items">Translate Spanish</p>
          <p className="footer__items">Translate Amharic</p>
        </div>
      </div>
      <div className="footer__right">
        <h2>stay connected</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis vero
          eligendi impedit sequi ullam molestiae sed perspiciatis vitae esse
          illo cupiditate, quibusdam quisquam. Maxime similique error sunt,
          aliquid perferendis ab.
        </p>
        <input
          placeholder="Email Address"
          type="text"
          className="footer__subscribe"
        />
        <button className="button footer__button">subscribe</button>
      </div>
    </footer>
  )
}

export default Footer
