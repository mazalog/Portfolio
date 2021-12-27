import Nav from "../../component/nav"
import React, { useEffect, useState } from 'react'
import useWorks from "../../hooks/useWorks"
import Footer from "../../component/footer"
import Spinner from '../../component/Spinner'

export default function PorfolioDetailPage({ params }) {
    const { SingleWork } = useWorks()
    const data = SingleWork(decodeURI(params.title))
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 700)
    }, [])

    return (
        <>
            <div id="page">
                <Nav />
                <div id="fh5co-author">
                    <div className="container">
                        <div className="row top-line animate-box">
                            {
                                loading ? <div style={{ minHeight: '45vh', alignContent: 'center', justifyContent: 'center', alignItems: 'center', display: "flex" }}> <Spinner /> </div> : <>
                                    <div className="col-md-6  fh5co-heading animate-box" >
                                        <img src={data.img1} className="img-responsive img-r" alt="WebImg" />
                                    </div>
                                    <div className="col-md-6  text-left fh5co-heading">
                                        <h2>{data.title}</h2>
                                        <p>{data.category}</p>
                                        <p>{data.description}</p>
                                        <div className="role">
                                            <h3>Role</h3>
                                            <ul>
                                                <li>{data.role}</li>
                                                <li>{data.role2}</li>
                                            </ul>
                                        </div>
                                        {
                                            data.category === 'Web' ? <p style={{color:'#fff'}} ><a href={data.direction} className="btn btn-primary btn-outline">Visitar</a></p> : <></>
                                        }
                                    </div>
                                    <div className="row ">
                                        <div className="col-md-8 col-md-offset-2" style={{ marginTop: '2%', padding: '5%' }}>
                                            {
                                                data.img2 ? <p className="animate-box"> <img src={data.img2} className="img-responsive img-r" alt="WebImg" /> </p> : <></>
                                            }
                                            {
                                                data.img3 ? <p className="animate-box"><img src={data.img3} class=" img-r img-responsive" alt="WebImg" /></p> : <></>
                                            }
                                            {
                                                data.description ? <div className="testimony animate-box">
                                                    {/* <blockquote>
                                                        <p>&ldquo;{data.description}&rdquo;</p>
                                                        <p className="person"><cite>&mdash; {data.autor}</cite> {data.ocupation}</p>
                                                    </blockquote> */}
                                                </div> : <></>
                                            }

                                            {
                                                data.img4 ? <p className="animate-box"><img src={data.img4} className=" img-r img-responsive" alt="Diseño web" /></p> : <></>
                                            }
                                            {
                                                data.img5 ? <p className="animate-box"><img src={data.img5} className=" img-r img-responsive" alt="Diseño web" /></p> : <></>
                                            }
                                        </div>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

            <div className="gototop js-top">
                <a href="#" className="js-gotop"><i className="icon-arrow-up"></i></a>
            </div>
        </>
    )
}