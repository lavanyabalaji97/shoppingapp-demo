
import Button from '../Button/Button'
import data from '../../Data.json'
import '../Craft/Craft.css'
import { FaRegHeart } from 'react-icons/fa'

function Craft() {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-6 col-12 text-button">
          <div className='mt-3'>
            <p>In Focus</p>
            <h3 className='heading'>The world’s oldest craft form</h3>
            <p className='craft-para'>Dhokra Metal Craft. Dhokra is amongst the oldest traditional techniques of metal casting in India, practiced for over 4,000 years, said to date back to the era of the Indus Valley Civilisation. The lost wax technique or ‘cire-perdue’ has been the medium of metal workers in Madhya Pradesh, Chhattisgarh, Orissa and West Bengal. Entirely handcrafted, the unique 13-stage process of Dhokra /Bell-metal making today, is an outcome of the original craft instinct handed down through the centuries. Dhokra or Bell metal is an alloy of brass, and other metals that impart an antique effect to the castings.</p>
            <div className='button d-lg'>
              <Button />
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12 d-flex justify-content-between">
          {
            data.craft.map((item: any) => {
              return <div className="cards_items" key={item.id}>
                <a href="">
                  <FaRegHeart className='hearticon' />
                  <img src={item.img} className="card-img-top" alt="..." />
                </a>
                <span className="line"><hr /></span>
                <div className="card-body">
                  <span className='light-text'>{item.span}</span>
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.price}</p>
                </div>
              </div>
            })
          }

        </div>
      </div>
    </div>

  )
}

export default Craft