import "../Trending/Trending.css"
import Button from '../Button/Button'
import Icons from "../Icons/Icons";

function Trending(props:any) {
    return (
        <div className='container'>
            <div className="row d-lg-flex justify-content-evenly top-space mt-5">
                <div className="col-md-12 col-12 my-3">
                    <p className='small-title'>For this season</p>
                    <div className='d-flex justify-content-between bottom-space'>
                        <h3 className="big_title">Trending & New<i className="bi bi-plus"></i></h3>
                        <div className="d-none d-md-inline-block">
                            <Button />
                        </div>
                    </div>
                </div>
                {
                   props.items.map((item: any) => {
                        return <div className="cards_items" key={item.id}>
                            <Icons />
                            <a href="#">
                                <img src={item.img} className="card-img-top" alt="..." /></a>
                            <span className="line">
                                <hr />
                            </span>
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

export default Trending