import { Carousel } from 'react-bootstrap';
import './Com.css';
import { Link } from 'react-router-dom';


const Carosal = () => {
    return (
        <>
            <section>
                <Carousel fade>
                    <Carousel.Item>

                        <div className='slide my-2 position-relative '>
                            <img text="First slide" src={require("../img/ig_1.jpg")} alt='' />
                            <div className='caro-title position-absolute'>
                                <h1 className='spring  animate__animated animate__backInLeft'>Pearls Spring<br />Collection</h1>
                                <p className='new-peral  d-md-block d-none animate__animated animate__backInRight'>New pearl earrings and more from $99 </p>

                                <button className='shp-now  border-1 rounded-4 py-1 px-4 d-md-block d-none animate__animated animate__backInRight'> <Link to='/shop' style={{ color: 'white' }}>
                                    Shop Now
                                </Link></button>

                            </div>
                        </div>
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='slide my-2 position-relative'>
                            <img text="Second slide" src={require("../img/ig_2.jpg")} alt='' />
                            <div className='caro-title position-absolute'>
                                <h1 className='spring animate__animated animate__backInLeft'>Famliy Jewelery<br />Collection</h1>
                                <p className='new-peral d-md-block d-none animate__animated animate__backInRight'>Designer Jewellry Necklaces-Bracelets-Earings </p>
                                <button className='shp-now  border-1 rounded-4 py-1 px-4 d-md-block d-none animate__animated animate__backInRight'>
                                    <Link to='/shop' style={{ color: 'white' }}>
                                        Shop Now
                                    </Link>
                                </button>
                            </div>
                        </div>
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='slide my-2 position-relative'>
                            <img text="Third slide" src={require("../img/ig_3.jpg")} alt='' />
                            <div className='caro-title  position-absolute'>
                                <h1 className='spring my-3  animate__animated animate__backInLeft'>Diamonds<br />Collection</h1>
                                <p className='new-peral my-3 d-md-block d-none animate__animated animate__backInRight'>Shukra Yogam & Silver Power Silver Saving Schemes.</p>
                                <button className='shp-now  border-1 rounded-4 py-1 px-4 d-md-block d-none animate__animated animate__backInRight'>
                                    <Link to='/shop' style={{ color: 'white' }}>
                                        Shop Now
                                    </Link>
                                </button>   
                            </div>
                        </div>
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </section>
        </>
    )
}
export default Carosal