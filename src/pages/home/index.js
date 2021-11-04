import Nav from "../../component/nav"
import Work from "../../component/work"
import Footer from '../../component/footer'
import useWorks from "../../hooks/useWorks"
import { useState } from "react"
import Spinner from "../../component/Spinner"
import Services from "../../component/services"
import About from "../../component/about"
import Packages from "../../component/packages"


export default function HomePage() {

    const { arrWorks } = useWorks()

    const [works, setWorks] = useState(arrWorks)
    const [loading, setLoading] = useState(false)
    const [category, setCategory] = useState('todo')

    const SearchWorks = (s) => {
        setLoading(true)
        const results = s === 'todo' ? arrWorks : arrWorks.filter(work => work.category === s)
        setWorks(results)
        setCategory(s)
        setTimeout(() => {
            setLoading(false)
        }, 2100)
    }

    return (
        <>
            <div id="page">
                <div className="bg-home">
                <About />

                <div className="container">
                        <div className="col-md-2"></div>
                        <div className="col-md-8" id="services"> <Services /></div>
                        <div className="col-md-2"></div>
                </div>
                <Nav />
                    <div id="fh5co-work">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3"></div>
                                <div id="portfolio" className="col-md-6 nav-Categorys animate-box">
                                 <h3 style={{ color: `${category === 'Web' ? 'gray' : ''}` }}>Portafolio</h3>
                                </div>
                                <div className="col-md-3"></div>
                            </div>
                            <div className="row animate-box">
                                {
                                    loading ? <div style={{ minHeight: '45vh', alignContent: 'center', justifyContent: 'center', alignItems: 'center', display: "flex" }}> <Spinner /> </div> : <>
                                        {
                                            works.map(doc =>
                                                <Work title={doc.title}
                                                    span={doc.category}
                                                    image={doc.BackgroundI}
                                                />
                                            )
                                        }
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
            <div className="gototop js-top">
                <a href="/#" className="js-gotop"><i className="icon-arrow-up"></i></a>
            </div>
        </>
    )
}