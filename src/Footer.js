import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => (
  <>
    <footer className="border-top footer text-muted">
        <div className="container">
            © 2022 - FizzBuzzWeb - <Link to="/Home/Privacy">Privacy</Link>
        </div>
    </footer>
  </>
);
export default Footer;
