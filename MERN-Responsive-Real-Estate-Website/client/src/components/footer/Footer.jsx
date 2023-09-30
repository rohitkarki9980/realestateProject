import React from 'react'
import classes from './footer.module.css'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className={classes.fWrapper}>
    <div className={classes.footerContainer}>
      {/* left side */}
      <div className={classes.footerLeft}>
        <div className={classes.imageContainers}>
        <h1 className={classes.titleLogo}>NEPAL <span>HOMES</span></h1>
        </div>
        
        <span className={classes.sText}>
          Our vision is to make all people <br />
          the best place to live for them.
        </span>
      </div>
      <div className={classes.center}>
      <div className={classes.menu}>
          <span><Link to="/allProperties" className={classes.Links}>Property</Link></span>
          <span><Link className={classes.Links}>Services</Link></span>
          <span><Link className={classes.Links}>Product</Link></span>
          <span><Link className={classes.Links}>About Us</Link></span>
        </div>

      </div>

      <div className={classes.footerRight}>
        <div className={classes.post}>
        <span className={classes.pText}>Information</span>
        <span className={classes.sText}>145 New York, FL 5467, USA</span>
        </div>
       
      
      </div>
    </div>
  </div>
  );
};

export default Footer