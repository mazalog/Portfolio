import Picture from "../../images/ANDRES.jpg"
import IconWhatsapp from "../../icons/IconWhatsapp"

export default function About() {
    return (
        <>
            <div id="fh5co-author" className="fh5co-bg-section">
                <div className="container">
                    <div className="row animate-box">
                        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                            <h2>Sobre mi</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="author">
                                <div className="author-inner animate-box" style={{ backgroundImage: `url(${Picture})` }} >
                                </div>
                                <div className="desc animate-box">
                                    <span> Diseño web  &amp; Desarrollo web</span>
                                    <h3>Andrés Maza</h3>
                                    <p>Al conocer la programación simplemente me atrapo, la idea de crear soluciones agiles y elegantes a procesos ineficientes me pareció increíble. Decidí adentrarme en la programación web con PHP, bajo esta tecnología desarrolle varios proyectos usando bases de datos MYSQL dos de ellos desarrollados con un enfoque de Ingeniería de Software.

Luego de ocho meses desarrollando en el backend fortaleci mis habilidades con JavaScript para posteriormente entrar en el mundo que ofrece React.js así descubriendo lo apasionante que es el frontend para mi.

Con los conocimientos obtenidos e desarrollado varias practicas y proyectos por contratación usando tecnologias otras tecnologias como nextjs, firebase, mondodb, nodejs y express </p>
                                    <p><a href="/contact" className="btn btn-primary btn-outline">Contactar</a></p>
                                    <ul className="fh5co-social-icons">
                                        {/* <li><a href="/#"><i className="icon-instagram"></i></a></li> */}
                                        <li> <a href="https://wa.me/5804241917939"><IconWhatsapp height={20} /> </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}