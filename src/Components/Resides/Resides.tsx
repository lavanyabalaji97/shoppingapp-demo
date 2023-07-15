import Button from "../Button/Button"
import data from '../../Data.json'
import { FaRegHeart } from "react-icons/fa"
import '../Trending/Trending.css'

function Resides() {
    return (
        <div className='container'>
            <div className="row d-flex justify-content-evenly top-space mt-5">
                <div className="col-lg-12 col-md-12 col-12 my-3">
                    <p className='small-title'>For The Home</p>
                    <div className='d-flex justify-content-between bottom-space'>
                        <h3 className="big_title">Where the heart resides</h3>
                        <div className="d-none d-md-inline-block">
                            <Button />
                        </div>
                    </div>
                </div>
                {
                    data.Homeproducts.map((item: any) => {
                        return <div className="cards_items" key={item.id}>
                            <a href="">
                                <FaRegHeart className='hearticon' />
                                <img src={item.img} className="card-img-top" alt="..." />
                            </a>
                            <div className="card-body">
                                <span className='light-text'>{item.span}</span>
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.price}</p>
                            </div>
                        </div>
                    })
                }
            </div>
            <div className="d-md-none d-sm-block col-12 mb-5">
                <button className="link w-100">See all</button>
            </div>
        </div>
    )
}

export default Resides