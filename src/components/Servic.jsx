import './Com.css'
import { IoMdStar } from 'react-icons/io';
const Servic = (props) => {
    return (
        <>
            <section>
                <div className='sevric-seo'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col '>
                                <div className='ig-sev position-relative '>
                                    <img src={props.seimg} alt='' style={{ width: "100%" }}></img>
                                    <h5 className='se-nam position-absolute'>{props.sename}</h5>
                                </div>
                                <div className='demo'>
                                    <img src={props.imgour} alt='' style={{ width: "100%" }}></img>
                                    <div className='sm-dita'>
                                        <p className='  text text-warning'><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></p>

                                        <h6 className='our-p-nam '>{props.oupname}</h6>
                                        <p className='price r'>{props.ourprice}</p>

                                    </div>

                                </div>

                                <div className='demp-2 position-relative text-center'>
                                    <img src={props.fromig} alt='' style={{ width: "100%" }}></img>
                                    <spna className="date">{props.date}</spna>
                                    <h5 className='gold-name'>{props.gldname} </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
{/* =============================================================================== */}
          




        </>
    )
}
export default Servic