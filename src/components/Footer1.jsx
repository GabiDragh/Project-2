import './Footer1.css';
import fb from '../assets/images/facebook.png'
import twitter from '../assets/images/twitter.png'
import linkedin from '../assets/images/linkedin.png'
import github from '../assets/images/github.png'
import React from 'react';

const footer1=()=>{
    return (
        <div className='footer1'>
            <div className='sb_footer1 section_padding'>
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
                            <p>Mission</p>
                            </a>
                            <a href='https://www.edx.org/boot-camps'>
                            <p> EdX Bootcamp </p>
                            </a>
                            <a href='/about'>
                            <p>Help Centre</p>
                            </a>
                    </div>
                    <div className='sb_footer1-links_div'>
                        <h4>Partners</h4>
                        <a href='https://github.com/GabiDragh'>
                            <p>Gabi</p>
                            </a>
                        <a href='https://github.com/SobolewskiMaciej'>
                            <p>Maciej</p>
                            </a>
                            <a href='https://github.com/Jean-003'>
                            <p>Jean</p>
                            </a>
                            <a href='https://github.com/sherinbinny'>
                            <p>Sherin</p>
                            </a>
                            <a href='https://github.com/mohammed45a'>
                            <p>Mohammed</p>
                            </a>
                    </div>
                    <div className='sb_footer1-links_div'>
                        <h4>Company</h4>
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
                                    <a href='https://www.facebook.com/'>
                                    <p><img src={fb} alt=''/></p>
                                    </a>
                                    <a href='https://twitter.com/'>
                                    <p><img src={twitter} alt=''/></p>
                                    </a>
                                    <a href='https://www.linkedin.com/'>
                                    <p><img src={linkedin} alt=''/></p>
                                    </a>
                                    <a href='https://github.com/'>
                                    <p><img src={github} alt=''/></p>
                                    </a>
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

