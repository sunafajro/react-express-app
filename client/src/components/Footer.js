import React from 'react';

const Footer = (props) => (
    <footer className="footer">
      <div className="container">
        <p className="text-muted">Created by { props.author } 2017</p>
      </div>
    </footer>
)

export default Footer;