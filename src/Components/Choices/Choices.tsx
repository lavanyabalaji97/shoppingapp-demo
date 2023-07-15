import Button from "../Button/Button"
import data from '../../Data.json'
import '../Trending/Trending.css'
import '../Choices/Choices.css'
import { FaRegHeart } from "react-icons/fa"
import '../Trending/Trending.css'


function Choices() {
    return (
        <div className='container'>
            <div className="row d-flex justify-content-between mt-5">
                <div className="col-md-12 col-12 my-3  text-button top-spaces">
                    <p className='small-title'>For Women</p>
                    <div className='d-flex justify-content-between bottom-space'>
                        <h3 className="big_title">Choices for  the reason</h3>
                        <div className="d-none d-md-inline-block">
                            <Button />
                        </div>
                    </div>
                </div>
                {
                    data.choice.map((item: any) => {
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
                <button className="link w-100">See All</button>
            </div>
        </div>
    )
}

export default Choices