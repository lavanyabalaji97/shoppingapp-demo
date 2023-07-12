import "../Division/Division.css"
import humans from '../../Asserts/humans.webp'
import smiley_girl from '../../Asserts/smiley-girl.webp'
function Division() {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-12">
                    <div className="d-md-flex justify-content-evenly gap-4">
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