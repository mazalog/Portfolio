
export default function Work({ title, span, image }) {

    const route = `/w/${title}`
    return (
        <div className="col-md-4 text-center " >
            <a className="work" href={route}>
                <div className="work-grid" style={{ backgroundImage: `url(${image})`, backgroundColor: 'white' }}>
                    <div className="inner">
                        <div className="desc">
                            <h3>{title}</h3>
                            <span className="cat" style={{ color: '#013966' }}>{span}</span>
                        </div>
                    </div>
                </div>
            </a>
        </div >
    )

}