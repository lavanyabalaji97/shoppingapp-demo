import elephant from '../../Asserts/elephant.webp'
import '../order/Order.css'

function Order() {
    return (
        <div className='order_section'>
            <div className='container mx-auto'>
                <div className="row">
                    <div className="col-md-6 col-12 d-none d-md-block">
                        <img src={elephant} />
                    </div>
                    <div className="col-md-6 col-12 marginbox">
                        <p className='small_para'>For Large Orders</p>
                        <h3 className='heading'>Place a bulk order with us</h3>
                        <p className='big_para'>Whether you want to place a large customised order for a single item or a large assortment of multiple craft products, we can sort it out for you! For years we have also worked on custom orders for our clients – it is one of the many benefits of having direct relationships with our artisans. Just drop us a note!</p>
                        <div className="d-md-flex">
                            <div className="col-lg-3">
                                <a href="" className='more_btn col-12'>Learn More</a>
                            </div>
                            <div className="col-lg-3">
                                <a href="" className='touch_btn col-12 mt-2 mt-md-0'>Get In Touch</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order