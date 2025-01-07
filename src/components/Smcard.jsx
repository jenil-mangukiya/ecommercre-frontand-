import './Com.css';
const Smcard = (props) => {
    return (
        <>
        {/* -------------------------About compo net-------------- */}
            <section>
                <div className='crative-seo'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col'>
                                <div className='dig-img  text-center mt-5'>
                                    <img src={props.dgimg} alt=''></img>
                                </div>
                                <div className='dg-name text-center my-3'>
                                    <h4 className='d-name'>{props.dname}</h4>
                                    <p className='sm-info-3'>{props.stitle}</p>
                                </div>
                            </div>
                            {/* -------------------------- */}
                            <div className='what-do-seo'>
                                <div className='question-seo'>
                                    <img src={props.quimg} alt='' style={{ width: "100%" }}></img>
                                </div>
                                <div className='wht-qu  my-3'>
                                    <h4 className='what-do'>{props.doname}</h4>
                                    <p className='sm-info-4'>{props.whtitle}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




        </>
    )
}
export default Smcard