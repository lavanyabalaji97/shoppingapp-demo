import '../Explore/Explore.css'
import twohorses from '../../Asserts/twohorses.webp'
function Explore() {
    return (
        <div className='container'>
            <div className="row mt-5">
                <div className="col-lg-8 col-md-4 col-12">
                    <div className='d-flex justify-content-between first_content'>
                        <h1 className='explore_heading'>Explore Our collections</h1>
                        <a href="" className='shop_now'>Shop Now</a>
                    </div>
                    <div className="d-lg-flex justify-content-between">
                        <ul className='list_items'>
                            <li><a href="">Women</a></li>
                            <li><a href="">Kids</a></li>
                            <li><a href="">Work</a></li>
                        </ul>
                        <ul className='list_items'>
                            <li><a href="">Men</a></li>
                            <li><a href="">Home & Living</a></li>
                            <li><a href="">Gifts</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4">
                   <img src={twohorses} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Explore