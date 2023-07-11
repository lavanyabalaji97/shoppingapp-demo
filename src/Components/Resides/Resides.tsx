import Button from "../Button/Button"
import data from '../../Data.json'

function Resides() {
    return (
        <div className='container'>
            <div className="row d-flex justify-content-evenly">
                <div className="col-lg-12 col-md-9 col-12 my-3">
                    <p className='small-title'>For The Home</p>
                    <div className='two section d-flex justify-content-between'>
                        <h3 className="big_title">Where the heart resides</h3>
                        <div className="d-none d-lg-inline-block">
                            <Button />
                        </div>
                    </div>
                </div>
                {
                    data.Homeproducts.map((item: any) => {
                        return <div className="cards_items" key={item.id}>
                            <img src={item.img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
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

export default Resides