import { FaRegHeart } from 'react-icons/fa'
import data from '../../Data.json'
import Button from '../Button/Button'
import '../Choices/Choices.css'


function Wonder() {
    return (
        <div className='container'>
            <div className="row d-flex justify-content-evenly">
                <div className="col-md-12 col-12 my-3 text-button">
                    <p className='small-title'>For this season</p>
                    <div className='two section d-flex justify-content-between'>
                        <h3 className="big_title">The wonder of the growing years</h3>
                        <div className="d-none d-md-inline-block">
                            <Button />
                        </div>
                    </div>
                </div>
                {
                    data.children.map((item: any) => {
                        return <div className="cards_items" key={item.id}>
                            <a href="#">
                                <FaRegHeart className='hearticon' />
                                <img src={item.img} className="card-img-top" alt="..." /></a>
                            <span className="line"><hr /></span>
                            <div className="card-body">
                                <span className='light-text'>{item.span}</span>
                                <h5 className="card-title"><a href="#">{item.title}</a></h5>
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

export default Wonder