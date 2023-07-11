import "../Division/Division.css"
import humans from '../../Asserts/humans.webp'
import smiley_girl from '../../Asserts/smiley-girl.webp'
function Division() {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-12 col-sm-9 col-12">
                    <div className="d-lg-flex justify-content-evenly">
                        <div>
                            <img src={humans} alt="" />
                        </div>
                        <div>
                            <img src={smiley_girl} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Division