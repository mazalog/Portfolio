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
                        <li ><a id="link-local" href="/#about"><b>Home</b></a></li>
                        <li><a id="link-local3" href="/#portfolio"><b>Proyectos</b></a></li>
                        <li><a id="link-local5" href="/contact"><b>Contacto</b></a></li>

                    </ul>
                </div>
 
            </div >
        </nav >
    )
}
