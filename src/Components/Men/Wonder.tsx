import data from '../../Data.json'
import Button from '../Button/Button'

function Wonder() {
    return (
        <div className='container'>
            <div className="row d-flex justify-content-evenly">
                <div className="col-lg-12 col-md-9 col-12 my-3">
                    <p className='small-title'>For this season</p>
                    <div className='two section d-flex justify-content-between'>
                        <h3 className="big_title">Trending & New</h3>
                        <div className="d-none d-lg-inline-block">
                            <Button />
                        </div>
                    </div>
                </div>
                {
                    data.children.map((item: any) => {
                        return <div className="cards_items" key={item.id}>
                            <a href="#"><img src={item.img} className="card-img-top" alt="..." /></a>
                            <span className="line"><hr /></span>
                            <div className="card-body">
                                <h5 className="card-title"><a href="#">{item.title}</a></h5>
                                <p className="card-text">{item.price}</p>
                            </div>
                        </div>
                    })
                }
            </div>
            <div className="d-lg-none d-sm-block col-12 mb-5">
                <button className="link w-100">See all</button>
            </div>
        </div>
    )
}

export default Wonder