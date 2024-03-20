import './footer1.css';
import fb from '../assets/images/facebook.png'
import twitter from '../assets/images/twitter.png'
import linkedin from '../assets/images/linkedin.png'
import github from '../assets/images/github.png'
import React from 'react';

const footer1=()=>{
    return (
        <div className='footer1'>
            <div className='sb_footer1 section__padding'>
                <div className='sb_footer1-links'>
                    <div className='sb_footer1-links-div'>
                        <h4>Weather Rebel</h4>
                        <a href='/application'>
                            <p> Application</p>
                            </a>
                            <a href='pricing'>
                                <p>Pricing</p>
                                </a>
                                <a href='/features'>
                                    <p>Features</p>
                        </a>
                    </div>
                    <div className='sb_footer1-links_div'>
                        <h4>About</h4>
                        <a href='/about'>
                            <p>??</p>
                            </a>
                            <a href='/about'>
                            <p> ?? </p>
                            </a>
                            <a href='/about'>
                            <p>Help Centre</p>
                            </a>
                    </div>
                    <div className='sb_footer1-links_div'>
                        <h4>Partners</h4>
                        <a href='/partners'>
                            <p>Gabi</p>
                            <p>Maciej</p>
                            <p>Jean</p>
                            <p>Sherin</p>
                            <p>Mohammed</p>
                        </a>

                    </div>
                    <div className='sb_footer1-links_div'>
                        <h4>Company</h4>
                        <a href='/about'>
                            <p>About</p>
                            </a>
                            <a href='/press'>
                            <p>Press</p>
                            </a>
                            <a href='/career'>
                            <p>Careers</p>
                            </a>
                            <a href='/contact'>
                            <p>Contact</p>
                            </a>
                            </div>
                            <div className='sb_footer1-links_div'>
                                <h4>Coming soon on</h4>
                                <div className='socialmedia'>
                                    <p><img src={fb} alt=''/></p>
                                    <p><img src={twitter} alt=''/></p>
                                    <p><img src={linkedin} alt=''/></p>
                                    <p><img src={github} alt=''/></p>
                                </div>
                            </div>
                    </div>

                    <hr></hr> {/* break between elements */}

                    <div className='sb_footer1-below'>
                        <div className='sb_footer1-copyright'>
                            <p>
                                @2024 Group10. All rights reserved.
                            </p>
                        </div>
                        <div className='sb_footer1-below-links'>
                            <a href='/terms'><div><p>Terms and Conditions</p></div></a>
                            <a href='/privacy'><div><p>Privacy</p></div></a>
                            <a href='/security'><div><p>Security</p></div></a>
                        </div>

                    </div>

                </div>
            </div>
    )
}

export default footer1;
