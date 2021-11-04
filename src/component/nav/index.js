import React from 'react'
import IconWhatsapp from '../../icons/IconWhatsapp'

export default function Nav() {


    return (
        <nav className="fh5co-nav" role="navigation">
            <div className="container">
                <div className="fh5co-top-logo">
                    <div id="fh5co-logo"><a href="/#"><img className="ml-3 logo" src="/MAZADESIGN-5.png" /></a></div>
                </div>
                <div className="fh5co-top-menu menu-1 text-center">
                    <ul>
                        <li ><a id="link-local" href="/#about">Sobre mi</a></li>
                        <li><a id="link-local2" href="/#services">Servicios</a></li>
                        <li><a id="link-local3" href="/#portfolio">Portafolio</a></li>
                        <li><a id="link-local5" href="/contact">Contacto</a></li>

                    </ul>
                </div>
                <div className="fh5co-top-social menu-1 text-right">
                    {/* <ul className="fh5co-social">
                        <li><a href="https://www.instagram.com/maza_ve/"><i className="icon-instagram" style={{ color: '#0059a3' }}></i></a></li>
                    </ul> */}
                    <ul className="fh5co-social">
                        <li><a href="https://wa.me/5804241917939"> <IconWhatsapp height={20} /></a> </li>
                    </ul>
                </div>
            </div >
        </nav >
    )
}
