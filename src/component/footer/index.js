import React from 'react'
import IconWhatsapp from '../../icons/IconWhatsapp'

export default function Footer() {
    return (
        <footer id="fh5co-footer" role="contentinfo">
            <div className="container">
                <div className="row copyright">
                    <div className="col-md-12 text-center">
                        <p>
                            {/* <small className="block">&copy; 2021 mazacloud.web.app</small> */}
                        </p>

                        <ul className="fh5co-social-icons">
                            {/* <li><a href="https://www.instagram.com/maza_ve/"><i className="icon-instagram"></i></a></li> */}
                            <li><a href="https://wa.me/5804241917939"> <IconWhatsapp height={20} /> </a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}