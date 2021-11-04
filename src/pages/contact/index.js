import React, { useState } from 'react'
import Footer from '../../component/footer'
import Nav from '../../component/nav'
import emailjs from 'emailjs-com'

export default function ContactPage() {

    const [values, setValues] = useState({})

    const handleInputChange = (event) => {
        setValues({
            ...values, [event.target.name]: event.target.value
        })
    }

    const onSubmit = (event) => {
        event.preventDefault()
        emailjs.sendForm('service_4azfi58', 'template_zxlf9ar', event.target, 'user_0jSjcFonGjdJEjZxsNxyD')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        console.log(values)
        event.target.reset()
    }
    return (
        <div>
            <div id="page">
                <Nav />
                <div id="fh5co-contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2">
                                <div className="col-md-5 col-md-pull-1 animate-box">
                                    <div className="fh5co-contact-info">
                                        <h3>Informacion de contacto</h3>
                                        <ul>
                                            {/* <li className="phone"><a href="tel://1234567920">+ 1235 2355 98</a></li> */}
                                            <li className="email"><a href="mailto:info@yoursite.com">opandre123@gmail.com</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-7 animate-box">
                                    <form onSubmit={onSubmit} >
                                        <input type="hidden" name="subject" value="MAZACLOUD" />
                                        <div className="row form-group">
                                            <div className="col-md-12">
                                                <label for="fname">Nombre</label>
                                                <input type="text" id="fname" class="form-control" name="name" onChange={handleInputChange} />
                                            </div>

                                        </div>

                                        <div className="row form-group">
                                            <div className="col-md-12">
                                                <label for="email">Email</label>
                                                <input type="text" id="email" className="form-control" name="email" onChange={handleInputChange} />
                                            </div>
                                        </div>

                                        <div className="row form-group">
                                            <div className="col-md-12">
                                                <label for="message">Mensaje</label>
                                                <textarea name="message" onChange={handleInputChange} id="message" cols="30" rows="10" className="form-control"></textarea>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" class="btn btn-primary" >Enviar mensaje</button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>

            <div class="gototop js-top">
                <a href="#" class="js-gotop"><i class="icon-arrow-up"></i></a>
            </div>
        </div>
    )
}